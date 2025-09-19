import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, { response: HttpResponse<any>, timestamp: number }>();
  private cacheTimeout = 5 * 60 * 1000; // 5 minutos

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Apenas cachear requisições GET
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req.url);
    
    // Verificar se existe cache válido
    if (cachedResponse && (Date.now() - cachedResponse.timestamp) < this.cacheTimeout) {
      return of(cachedResponse.response);
    }

    // Fazer requisição e cachear resposta
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cache.set(req.url, {
            response: event,
            timestamp: Date.now()
          });
        }
      })
    );
  }

  clearCache(): void {
    this.cache.clear();
  }
}