import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private performanceObserver?: PerformanceObserver;

  constructor() {
    if (!environment.production && 'PerformanceObserver' in window) {
      this.initPerformanceMonitoring();
    }
  }

  private initPerformanceMonitoring(): void {
    this.performanceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          this.logNavigationTiming(entry as PerformanceNavigationTiming);
        } else if (entry.entryType === 'paint') {
          this.logPaintTiming(entry);
        } else if (entry.entryType === 'largest-contentful-paint') {
          this.logLCP(entry);
        }
      }
    });

    this.performanceObserver.observe({ 
      entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] 
    });
  }

  private logNavigationTiming(entry: PerformanceNavigationTiming): void {
    console.group('🚀 Navigation Performance');
    console.log(`DNS Lookup: ${entry.domainLookupEnd - entry.domainLookupStart}ms`);
    console.log(`TCP Connection: ${entry.connectEnd - entry.connectStart}ms`);
    console.log(`Request: ${entry.responseStart - entry.requestStart}ms`);
    console.log(`Response: ${entry.responseEnd - entry.responseStart}ms`);
    console.log(`DOM Processing: ${entry.domComplete - entry.domContentLoadedEventStart}ms`);
    console.log(`Total Load Time: ${entry.loadEventEnd - entry.fetchStart}ms`);
    console.groupEnd();
  }

  private logPaintTiming(entry: PerformanceEntry): void {
    console.log(`🎨 ${entry.name}: ${entry.startTime.toFixed(2)}ms`);
  }

  private logLCP(entry: PerformanceEntry): void {
    console.log(`📊 Largest Contentful Paint: ${entry.startTime.toFixed(2)}ms`);
  }

  measureCustomMetric(name: string, startTime: number): void {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    if (!environment.production) {
      console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
    }

    // Em produção, você poderia enviar essas métricas para um serviço de analytics
    if (environment.production) {
      // Exemplo: analytics.track(name, duration);
    }
  }

  startMeasurement(): number {
    return performance.now();
  }

  getMemoryUsage(): any {
    if ('memory' in performance) {
      return (performance as any).memory;
    }
    return null;
  }

  logMemoryUsage(): void {
    const memory = this.getMemoryUsage();
    if (memory && !environment.production) {
      console.group('💾 Memory Usage');
      console.log(`Used: ${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`);
      console.log(`Total: ${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`);
      console.log(`Limit: ${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`);
      console.groupEnd();
    }
  }

  disconnect(): void {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
  }
}