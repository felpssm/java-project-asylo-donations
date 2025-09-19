import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { DonorRequest, DonorResponse } from '../models/donor.model';
import { environment } from '../../environments/environment';

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  private apiUrl = `${environment.apiUrl}/v1/donors`;
  private cache = new Map<string, Observable<any>>();
  private cacheTimeout = 5 * 60 * 1000; // 5 minutos

  constructor(private http: HttpClient) { }

  create(donor: DonorRequest): Observable<DonorResponse> {
    return this.http.post<DonorResponse>(this.apiUrl, donor);
  }

  list(page: number = 0, size: number = 10): Observable<PageResponse<DonorResponse>> {
    const cacheKey = `donors_${page}_${size}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    const request$ = this.http.get<PageResponse<DonorResponse>>(this.apiUrl, { params })
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