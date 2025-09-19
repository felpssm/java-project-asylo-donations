import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8">
      <!-- Elementos decorativos de fundo -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-20 w-32 h-32 bg-primary-200/30 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-40 h-40 bg-accent-200/20 rounded-full blur-2xl animate-bounce"></div>
        <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-300/20 rounded-full blur-lg animate-ping"></div>
      </div>

      <div class="relative w-full max-w-md">
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
          <!-- Header -->
          <div class="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 px-8 py-8 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-black/10"></div>
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12"></div>
            
            <div class="relative">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm mb-4">
                <i class="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h1 class="text-2xl font-bold text-white mb-2">Acesso Administrativo</h1>
              <p class="text-blue-100 text-sm">Sistema de Gestão de Doações</p>
            </div>
          </div>
          
          <div class="px-8 py-8">
            <!-- Mensagens de Status -->
            <div *ngIf="showErrorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0">
                  <i class="fas fa-exclamation-triangle text-red-600"></i>
                </div>
                <div class="flex-1">
                  <p class="text-red-800 font-medium">{{ errorMessage }}</p>
                </div>
                <button 
                  class="flex-shrink-0 text-red-400 hover:text-red-600 transition-colors duration-200"
                  (click)="showErrorMessage = false">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>

            <div *ngIf="showSuccessMessage" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0">
                  <i class="fas fa-check-circle text-green-600"></i>
                </div>
                <div class="flex-1">
                  <p class="text-green-800 font-medium">Login realizado com sucesso! Redirecionando...</p>
                </div>
                <button 
                  class="flex-shrink-0 text-green-400 hover:text-green-600 transition-colors duration-200"
                  (click)="showSuccessMessage = false">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>

            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <!-- Campo de Usuário -->
              <div>
                <label for="username" class="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <i class="fas fa-user text-gray-400"></i>
                  Usuário
                </label>
                <input 
                  type="text" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                  [class.border-red-500]="loginForm.get('username')?.invalid && loginForm.get('username')?.touched"
                  [class.focus:ring-red-500]="loginForm.get('username')?.invalid && loginForm.get('username')?.touched"
                  [class.focus:border-red-500]="loginForm.get('username')?.invalid && loginForm.get('username')?.touched"
                  id="username"
                  formControlName="username"
                  placeholder="Digite seu usuário"
                >
                <div *ngIf="loginForm.get('username')?.invalid && loginForm.get('username')?.touched" class="mt-2 text-sm text-red-600">
                  <div *ngIf="loginForm.get('username')?.errors?.['required']" class="flex items-center gap-1">
                    <i class="fas fa-exclamation-circle text-xs"></i>
                    Usuário é obrigatório
                  </div>
                </div>
              </div>

              <!-- Campo de Senha -->
              <div>
                <label for="password" class="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <i class="fas fa-lock text-gray-400"></i>
                  Senha
                </label>
                <div class="relative">
                  <input 
                    [type]="showPassword ? 'text' : 'password'" 
                    class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                    [class.border-red-500]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"
                    [class.focus:ring-red-500]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"
                    [class.focus:border-red-500]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"
                    id="password"
                    formControlName="password"
                    placeholder="Digite sua senha"
                  >
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    (click)="togglePasswordVisibility()"
                  >
                    <i [class]="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                </div>
                <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched" class="mt-2 space-y-1">
                  <div *ngIf="loginForm.get('password')?.errors?.['required']" class="flex items-center gap-1 text-sm text-red-600">
                    <i class="fas fa-exclamation-circle text-xs"></i>
                    Senha é obrigatória
                  </div>
                  <div *ngIf="loginForm.get('password')?.errors?.['minlength']" class="flex items-center gap-1 text-sm text-red-600">
                    <i class="fas fa-exclamation-circle text-xs"></i>
                    Senha deve ter pelo menos 6 caracteres
                  </div>
                </div>
              </div>

              <!-- Botão de Login -->
              <div class="pt-2">
                <button 
                  type="submit" 
                  class="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
                  [disabled]="loginForm.invalid || isLoading"
                >
                  <div *ngIf="isLoading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <i *ngIf="!isLoading" class="fas fa-sign-in-alt"></i>
                  <span>{{ isLoading ? 'Entrando...' : 'Entrar' }}</span>
                </button>
              </div>

              <!-- Link para voltar -->
              <div class="text-center pt-4">
                <a routerLink="/" class="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium">
                  <i class="fas fa-arrow-left"></i>
                  Voltar ao site
                </a>
              </div>
            </form>
          </div>
          
          <!-- Footer -->
          <div class="px-8 py-4 bg-gray-50 border-t border-gray-100">
            <div class="flex items-center justify-center gap-2 text-sm text-gray-600">
              <i class="fas fa-info-circle"></i>
              <span>Acesso restrito a administradores autorizados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  showPassword = false;
  showErrorMessage = false;
  showSuccessMessage = false;
  errorMessage = '';

  // Credenciais temporárias para demonstração
  private readonly ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Verificar se já está logado
    if (this.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.showErrorMessage = false;
      this.showSuccessMessage = false;

      const { username, password } = this.loginForm.value;

      // Simular delay de autenticação
      setTimeout(() => {
        if (username === this.ADMIN_CREDENTIALS.username && 
            password === this.ADMIN_CREDENTIALS.password) {
          
          // Salvar token de autenticação
          localStorage.setItem('adminToken', 'authenticated');
          localStorage.setItem('adminUser', username);
          
          this.showSuccessMessage = true;
          this.isLoading = false;

          // Redirecionar após sucesso
          setTimeout(() => {
            this.router.navigate(['/admin']);
          }, 1500);

        } else {
          this.errorMessage = 'Usuário ou senha incorretos';
          this.showErrorMessage = true;
          this.isLoading = false;
        }
      }, 1000);
    } else {
      // Marcar todos os campos como tocados para mostrar erros
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }

  private isLoggedIn(): boolean {
    return localStorage.getItem('adminToken') === 'authenticated';
  }
}