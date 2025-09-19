import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { DonationRequest, DonationResponse } from '../models/donation.model';
import { PageResponse } from './donor.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private apiUrl = `${environment.apiUrl}/v1/donations`;
  private cache = new Map<string, Observable<any>>();
  private cacheTimeout = 5 * 60 * 1000; // 5 minutos

  constructor(private http: HttpClient) { }

  create(donation: DonationRequest): Observable<DonationResponse> {
    return this.http.post<DonationResponse>(this.apiUrl, donation);
  }

  list(page: number = 0, size: number = 10): Observable<PageResponse<DonationResponse>> {
    const cacheKey = `donations_${page}_${size}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    const request$ = this.http.get<PageResponse<DonationResponse>>(this.apiUrl, { params })
      .pipe(
        shareReplay(1),
        tap(() => {
          // Limpar cache após timeout
          setTimeout(() => {
            this.cache.delete(cacheKey);
          }, this.cacheTimeout);
        })
      );

    this.cache.set(cacheKey, request$);
    return request$;
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        tap(() => {
          // Limpar cache relacionado após deletar
          this.clearCache();
        })
      );
  }

  private clearCache(): void {
    this.cache.clear();
  }
}