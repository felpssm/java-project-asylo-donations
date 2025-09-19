import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private readonly TOKEN_KEY = 'adminToken';
  private readonly USER_KEY = 'adminUser';

  constructor() {
    // Verificar token ao inicializar o serviço
    this.checkTokenValidity();
  }

  /**
   * Verifica se existe um token válido no localStorage
   */
  private hasValidToken(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token === 'authenticated';
  }

  /**
   * Verifica a validade do token periodicamente
   */
  private checkTokenValidity(): void {
    const isValid = this.hasValidToken();
    this.isAuthenticatedSubject.next(isValid);
  }

  /**
   * Realiza o login do administrador
   */
  login(username: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      // Simular delay de autenticação
      setTimeout(() => {
        // Credenciais temporárias para demonstração
        const ADMIN_CREDENTIALS = {
          username: 'admin',
          password: 'admin123'
        };

        if (username === ADMIN_CREDENTIALS.username && 
            password === ADMIN_CREDENTIALS.password) {
          
          // Salvar dados de autenticação
          localStorage.setItem(this.TOKEN_KEY, 'authenticated');
          localStorage.setItem(this.USER_KEY, username);
          
          this.isAuthenticatedSubject.next(true);
          observer.next(true);
        } else {
          observer.next(false);
        }
        
        observer.complete();
      }, 1000);
    });
  }

  /**
   * Realiza o logout do administrador
   */
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.isAuthenticatedSubject.next(false);
  }

  /**
   * Verifica se o usuário está autenticado
   */
  isAuthenticated(): boolean {
    return this.hasValidToken();
  }

  /**
   * Obtém o nome do usuário logado
   */
  getCurrentUser(): string | null {
    if (this.isAuthenticated()) {
      return localStorage.getItem(this.USER_KEY);
    }
    return null;
  }

  /**
   * Obtém o token de autenticação
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}