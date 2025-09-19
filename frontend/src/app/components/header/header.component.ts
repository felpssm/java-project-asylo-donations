import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <header class="sticky top-0 z-50 bg-white shadow-sm">
      <!-- Top Bar -->
      <div class="bg-gradient-primary text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between py-3">
            <div class="flex-1">
              <h1 class="text-lg sm:text-xl font-semibold">Sistema de Doações - Asilo de Mendigos de Pelotas</h1>
            </div>
            <div class="hidden md:block flex-shrink-0 ml-4">
              <div class="relative">
                <input 
                  type="text" 
                  class="w-64 px-4 py-2 text-sm text-gray-900 bg-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 placeholder-gray-500" 
                  placeholder="Pesquisar..."
                  [(ngModel)]="searchTerm"
                  (keyup.enter)="search()">
                <button 
                  class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200" 
                  type="button" 
                  (click)="search()">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="bg-white border-b border-secondary-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <div class="flex items-center">
              <a class="navbar-brand" routerLink="/inicio">
                <i class="fas fa-heart text-primary-600 mr-2"></i>
                <span class="text-xl font-bold text-primary-600">Asilo Doações</span>
              </a>
            </div>
            
            <!-- Desktop Navigation -->
            <div class="hidden lg:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a class="nav-link px-3 py-2 rounded-md text-sm font-medium" routerLink="/inicio" routerLinkActive="active">
                  <i class="fas fa-home mr-1"></i>Início
                </a>
                <a class="nav-link px-3 py-2 rounded-md text-sm font-medium" routerLink="/sobre" routerLinkActive="active">
                  <i class="fas fa-info-circle mr-1"></i>Sobre
                </a>
                
                <!-- Services Dropdown -->
                <div class="relative">
                  <button class="nav-link px-3 py-2 rounded-md text-sm font-medium flex items-center" (click)="toggleServicesDropdown()">
                    <i class="fas fa-cogs mr-1"></i>Serviços
                    <i class="fas fa-chevron-down ml-1 text-xs" [class.rotate-180]="isServicesDropdownOpen"></i>
                  </button>
                  <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-all duration-200 z-50" 
                       [class.opacity-100]="isServicesDropdownOpen" 
                       [class.visible]="isServicesDropdownOpen"
                       [class.opacity-0]="!isServicesDropdownOpen" 
                       [class.invisible]="!isServicesDropdownOpen">
                    <div class="py-1">
                      <a class="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 transition-colors duration-200" routerLink="/servicos" (click)="closeDropdowns()">Nossos Serviços</a>
                      <a class="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 transition-colors duration-200" routerLink="/doacoes" (click)="closeDropdowns()">Ver Doações</a>
                      <a class="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 transition-colors duration-200" routerLink="/nova-doacao" (click)="closeDropdowns()">Fazer Doação</a>
                      <a class="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 transition-colors duration-200" routerLink="/doadores" (click)="closeDropdowns()">Doadores</a>
                    </div>
                  </div>
                </div>
                
                <!-- Pages Dropdown -->
                <div class="relative">
                  <button class="nav-link px-3 py-2 rounded-md text-sm font-medium flex items-center" (click)="togglePagesDropdown()">
                    <i class="fas fa-link mr-1"></i>Páginas
                    <i class="fas fa-chevron-down ml-1 text-xs" [class.rotate-180]="isPagesDropdownOpen"></i>
                  </button>
                  <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-all duration-200 z-50" 
                       [class.opacity-100]="isPagesDropdownOpen" 
                       [class.visible]="isPagesDropdownOpen"
                       [class.opacity-0]="!isPagesDropdownOpen" 
                       [class.invisible]="!isPagesDropdownOpen">
                    <div class="py-1">
                      <a class="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 transition-colors duration-200" href="https://transparencia.pelotas.rs.gov.br/" target="_blank" (click)="closeDropdowns()">Portal da Transparência</a>
                      <a class="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 transition-colors duration-200" href="https://www.pelotas.rs.gov.br/" target="_blank" (click)="closeDropdowns()">Prefeitura de Pelotas</a>
                      <a class="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 transition-colors duration-200" href="https://www.pelotas.rs.gov.br/conselho-municipal" target="_blank" (click)="closeDropdowns()">Conselho Municipal</a>
                    </div>
                  </div>
                </div>
                
                <a class="nav-link px-3 py-2 rounded-md text-sm font-medium" routerLink="/contato" routerLinkActive="active">
                  <i class="fas fa-envelope mr-1"></i>Contato
                </a>
                
                <!-- Admin Link -->
                <a *ngIf="isAuthenticated" class="nav-link px-3 py-2 rounded-md text-sm font-medium" routerLink="/admin" routerLinkActive="active">
                  <i class="fas fa-cog mr-1"></i>Admin
                </a>
              </div>
            </div>
            
            <!-- CTA Button -->
            <div class="hidden lg:block">
              <a class="btn-primary" routerLink="/nova-doacao">
                <i class="fas fa-hand-holding-heart mr-2"></i>Fazer Doação
              </a>
            </div>
            
            <!-- Mobile menu button -->
            <div class="lg:hidden">
              <button 
                type="button" 
                class="inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-primary-600 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
                (click)="toggleMobileMenu()">
                <i class="fas fa-bars" [class.hidden]="isMobileMenuOpen"></i>
                <i class="fas fa-times" [class.hidden]="!isMobileMenuOpen"></i>
              </button>
            </div>
          </div>
          
          <!-- Mobile Navigation -->
          <div class="lg:hidden" [class.hidden]="!isMobileMenuOpen">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-secondary-200">
              <!-- Mobile Search -->
              <div class="mb-4">
                <div class="relative">
                  <input 
                    type="text" 
                    class="w-full px-4 py-2 text-sm text-gray-900 bg-secondary-50 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-500" 
                    placeholder="Pesquisar..."
                    [(ngModel)]="searchTerm"
                    (keyup.enter)="search()">
                  <button 
                    class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200" 
                    type="button" 
                    (click)="search()">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
              
              <a class="nav-link block px-3 py-2 rounded-md text-base font-medium" routerLink="/inicio" routerLinkActive="active" (click)="closeMobileMenu()">
                <i class="fas fa-home mr-2"></i>Início
              </a>
              <a class="nav-link block px-3 py-2 rounded-md text-base font-medium" routerLink="/sobre" routerLinkActive="active" (click)="closeMobileMenu()">
                <i class="fas fa-info-circle mr-2"></i>Sobre
              </a>
              <a class="nav-link block px-3 py-2 rounded-md text-base font-medium" routerLink="/servicos" (click)="closeMobileMenu()">
                <i class="fas fa-cogs mr-2"></i>Nossos Serviços
              </a>
              <a class="nav-link block px-3 py-2 rounded-md text-base font-medium" routerLink="/doacoes" (click)="closeMobileMenu()">
                <i class="fas fa-eye mr-2"></i>Ver Doações
              </a>
              <a class="nav-link block px-3 py-2 rounded-md text-base font-medium" routerLink="/doadores" (click)="closeMobileMenu()">
                <i class="fas fa-users mr-2"></i>Doadores
              </a>
              <a class="nav-link block px-3 py-2 rounded-md text-base font-medium" routerLink="/contato" routerLinkActive="active" (click)="closeMobileMenu()">
                <i class="fas fa-envelope mr-2"></i>Contato
              </a>
              <a *ngIf="isAuthenticated" class="nav-link block px-3 py-2 rounded-md text-base font-medium" routerLink="/admin" routerLinkActive="active" (click)="closeMobileMenu()">
                <i class="fas fa-cog mr-2"></i>Admin
              </a>
              
              <!-- Mobile CTA -->
              <div class="pt-4">
                <a class="btn-primary w-full text-center block" routerLink="/nova-doacao" (click)="closeMobileMenu()">
                  <i class="fas fa-hand-holding-heart mr-2"></i>Fazer Doação
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Slider -->
      <div class="relative h-96 md:h-[500px] overflow-hidden">
        <!-- Slides Container -->
        <div class="relative h-full">
          <!-- Slide 1 -->
          <div class="absolute inset-0 transition-opacity duration-1000" 
               [class.opacity-100]="currentSlide === 0" 
               [class.opacity-0]="currentSlide !== 0">
            <div class="h-full bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center relative overflow-hidden">
              <!-- Background decorative elements -->
              <div class="absolute inset-0 opacity-20">
                <div class="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
                <div class="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
                <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
              </div>
              
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                  Ajude quem mais precisa
                </h2>
                <p class="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto animate-fade-in-up delay-300">
                  Sua doação faz a diferença na vida de pessoas em situação de vulnerabilidade
                </p>
                <a class="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-full hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up delay-500" 
                   routerLink="/nova-doacao">
                  <i class="fas fa-heart mr-2"></i>
                  Doar Agora
                </a>
              </div>
            </div>
          </div>
          
          <!-- Slide 2 -->
          <div class="absolute inset-0 transition-opacity duration-1000" 
               [class.opacity-100]="currentSlide === 1" 
               [class.opacity-0]="currentSlide !== 1">
            <div class="h-full bg-gradient-to-br from-pink-500 via-rose-600 to-red-600 flex items-center justify-center relative overflow-hidden">
              <!-- Background decorative elements -->
              <div class="absolute inset-0 opacity-20">
                <div class="absolute top-10 right-10 w-40 h-40 bg-white rounded-full animate-bounce"></div>
                <div class="absolute bottom-10 left-10 w-28 h-28 bg-white rounded-full animate-bounce delay-700"></div>
                <div class="absolute top-1/3 right-1/3 w-20 h-20 bg-white rounded-full animate-bounce delay-300"></div>
              </div>
              
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                  Transparência Total
                </h2>
                <p class="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto animate-fade-in-up delay-300">
                  Acompanhe como suas doações são utilizadas em nosso sistema transparente
                </p>
                <a class="inline-flex items-center px-8 py-4 bg-white text-pink-700 font-semibold rounded-full hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up delay-500" 
                   routerLink="/doacoes">
                  <i class="fas fa-eye mr-2"></i>
                  Ver Doações
                </a>
              </div>
            </div>
          </div>
          
          <!-- Slide 3 -->
          <div class="absolute inset-0 transition-opacity duration-1000" 
               [class.opacity-100]="currentSlide === 2" 
               [class.opacity-0]="currentSlide !== 2">
            <div class="h-full bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-600 flex items-center justify-center relative overflow-hidden">
              <!-- Background decorative elements -->
              <div class="absolute inset-0 opacity-20">
                <div class="absolute top-1/4 left-1/4 w-36 h-36 bg-white rounded-full animate-ping"></div>
                <div class="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full animate-ping delay-1000"></div>
                <div class="absolute top-3/4 left-3/4 w-20 h-20 bg-white rounded-full animate-ping delay-500"></div>
              </div>
              
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                  Juntos somos mais fortes
                </h2>
                <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in-up delay-300">
                  Conheça nossa história e como você pode fazer parte desta causa
                </p>
                <a class="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up delay-500" 
                   routerLink="/sobre">
                  <i class="fas fa-users mr-2"></i>
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation Dots -->
        <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          <button *ngFor="let slide of slides; let i = index" (click)="goToSlide(i)" class="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125" [ngClass]="{'bg-white': currentSlide === i, 'bg-white/50': currentSlide !== i}"></button>
        </div>
        
        <!-- Navigation Arrows -->
        <button 
          (click)="previousSlide()"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button 
          (click)="nextSlide()"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchTerm: string = '';
  isAuthenticated: boolean = false;
  isMobileMenuOpen: boolean = false;
  isServicesDropdownOpen: boolean = false;
  isPagesDropdownOpen: boolean = false;
  private authSubscription: Subscription = new Subscription();

  // Carousel properties
  currentSlide: number = 0;
  slides: any[] = [
    { id: 0, title: 'Ajude quem mais precisa' },
    { id: 1, title: 'Transparência Total' },
    { id: 2, title: 'Juntos somos mais fortes' }
  ];
  private slideInterval: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(
      isAuth => this.isAuthenticated = isAuth
    );
    this.startAutoSlide();
    
    // Add click listener to close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        this.closeDropdowns();
      }
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.stopAutoSlide();
  }

  search() {
    if (this.searchTerm.trim()) {
      console.log('Pesquisando por:', this.searchTerm);
      // Implementar lógica de pesquisa aqui
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleServicesDropdown() {
    this.isServicesDropdownOpen = !this.isServicesDropdownOpen;
    this.isPagesDropdownOpen = false; // Close other dropdown
  }

  togglePagesDropdown() {
    this.isPagesDropdownOpen = !this.isPagesDropdownOpen;
    this.isServicesDropdownOpen = false; // Close other dropdown
  }

  closeDropdowns() {
    this.isServicesDropdownOpen = false;
    this.isPagesDropdownOpen = false;
  }

  // Carousel methods
  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetAutoSlide();
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    this.resetAutoSlide();
  }

  private startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  private stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  private resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}