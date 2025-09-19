import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DonationService } from '../../services/donation.service';
import { AuthService } from '../../services/auth.service';
import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';
import { SuccessModalComponent } from '../../components/success-modal/success-modal.component';
import { ErrorModalComponent } from '../../components/error-modal/error-modal.component';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ConfirmationModalComponent, SuccessModalComponent, ErrorModalComponent],
  template: `
    <div class="w-full">
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <!-- Elementos decorativos -->
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
        <div class="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div class="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <div class="lg:col-span-2">
              <div class="flex items-center gap-3 mb-6">
                <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <i class="fas fa-heart text-2xl"></i>
                </div>
                <span class="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                  Transparência Total
                </span>
              </div>
              
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Doações
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Recebidas
                </span>
              </h1>
              
              <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Acompanhe todas as doações recebidas e veja como sua contribuição 
                está fazendo a diferença na vida de muitas pessoas.
              </p>
            </div>
            
            <div class="lg:col-span-1 flex justify-center lg:justify-end">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <a routerLink="/nova-doacao" 
                   class="relative flex items-center gap-3 px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <div class="p-2 bg-primary-100 rounded-lg">
                    <i class="fas fa-plus text-primary-600"></i>
                  </div>
                  Nova Doação
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Ícone decorativo -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div class="w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center animate-bounce">
            <i class="fas fa-chevron-down text-white/60"></i>
          </div>
        </div>
      </section>

      <!-- Filtros e Estatísticas -->
      <section class="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <!-- Estatísticas -->
            <div class="lg:col-span-3 xl:col-span-4">
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <!-- Total de Doações -->
                <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div class="relative p-6 text-center overflow-hidden">
                    <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full transform translate-x-8 -translate-y-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div class="relative">
                      <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-heart text-white text-lg"></i>
                      </div>
                      <h3 class="text-2xl font-bold text-primary-600 mb-1">{{totalDonations}}</h3>
                      <p class="text-sm text-gray-600 font-medium">Total de Doações</p>
                    </div>
                  </div>
                </div>

                <!-- Valor Total -->
                <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div class="relative p-6 text-center overflow-hidden">
                    <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full transform translate-x-8 -translate-y-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div class="relative">
                      <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-dollar-sign text-white text-lg"></i>
                      </div>
                      <h3 class="text-2xl font-bold text-green-600 mb-1">R$ {{totalAmount | number:'1.2-2'}}</h3>
                      <p class="text-sm text-gray-600 font-medium">Valor Total</p>
                    </div>
                  </div>
                </div>

                <!-- Itens Doados -->
                <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div class="relative p-6 text-center overflow-hidden">
                    <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full transform translate-x-8 -translate-y-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div class="relative">
                      <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-box text-white text-lg"></i>
                      </div>
                      <h3 class="text-2xl font-bold text-blue-600 mb-1">{{totalItems}}</h3>
                      <p class="text-sm text-gray-600 font-medium">Itens Doados</p>
                    </div>
                  </div>
                </div>

                <!-- Este Mês -->
                <div class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div class="relative p-6 text-center overflow-hidden">
                    <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full transform translate-x-8 -translate-y-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div class="relative">
                      <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-calendar-alt text-white text-lg"></i>
                      </div>
                      <h3 class="text-2xl font-bold text-orange-600 mb-1">{{currentMonth}}</h3>
                      <p class="text-sm text-gray-600 font-medium">Este Mês</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Filtros -->
            <div class="lg:col-span-1 xl:col-span-1">
              <div class="bg-white rounded-xl shadow-lg p-6 h-full">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                    <i class="fas fa-filter text-white"></i>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-800">Filtros</h3>
                </div>
                
                <div class="space-y-6">
                  <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-3 group-focus-within:text-primary-600 transition-colors duration-200">
                      <i class="fas fa-tag mr-2 text-primary-500"></i>
                      Tipo
                    </label>
                    <div class="relative">
                      <select class="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-300 hover:shadow-md appearance-none cursor-pointer" 
                              [(ngModel)]="filterType" 
                              (change)="applyFilters()">
                        <option value="">Todos os Tipos</option>
                        <option value="MONEY">💰 Dinheiro</option>
                        <option value="ITEM">📦 Itens</option>
                      </select>
                      <!-- Custom dropdown arrow -->
                      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i class="fas fa-chevron-down text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div class="group">
                    <label class="block text-sm font-medium text-gray-700 mb-3 group-focus-within:text-primary-600 transition-colors duration-200">
                      <i class="fas fa-calendar-alt mr-2 text-primary-500"></i>
                      Período
                    </label>
                    <div class="relative">
                      <input 
                        type="month" 
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-300 hover:shadow-md cursor-pointer" 
                        [(ngModel)]="filterMonth"
                        (change)="applyFilters()"
                      >
                      <!-- Calendar icon overlay -->
                      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i class="fas fa-calendar text-gray-400 group-focus-within:text-primary-500 transition-colors duration-200"></i>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Clear filters button -->
                  <div class="pt-2">
                    <button 
                      *ngIf="filterType || filterMonth"
                      class="group w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-xl transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98]"
                      (click)="clearFilters()">
                      <i class="fas fa-times group-hover:rotate-90 transition-transform duration-300"></i>
                      <span>Limpar Filtros</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Filtro Ativo por Doador -->
      <section class="py-6" *ngIf="filterDonorName">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-blue-100 rounded-lg">
                <i class="fas fa-filter text-blue-600"></i>
              </div>
              <div>
                <span class="text-blue-800 font-semibold">Filtro Ativo:</span>
                <span class="text-blue-700 ml-2">Mostrando doações de {{filterDonorName}}</span>
              </div>
            </div>
            <button 
              class="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors duration-200"
              (click)="clearFilters()">
              <i class="fas fa-times"></i>
              Remover Filtro
            </button>
          </div>
        </div>
      </section>

      <!-- Lista de Doações -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Loading -->
          <div *ngIf="isLoading" class="py-20">
            <!-- Loading Animation -->
            <div class="text-center mb-12">
              <div class="relative inline-flex items-center justify-center mb-8">
                <!-- Outer ring -->
                <div class="w-20 h-20 border-4 border-primary-200 rounded-full animate-spin"></div>
                <!-- Inner ring -->
                <div class="absolute w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;"></div>
                <!-- Center dot -->
                <div class="absolute w-4 h-4 bg-primary-600 rounded-full animate-pulse"></div>
              </div>
              
              <div class="space-y-3">
                <h3 class="text-xl font-semibold text-gray-800 animate-pulse">Carregando doações...</h3>
                <div class="flex items-center justify-center gap-1">
                  <div class="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
                  <div class="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
                  <div class="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                </div>
                <p class="text-gray-600">Aguarde enquanto buscamos as informações</p>
              </div>
            </div>

            <!-- Skeleton Loading Cards -->
            <div class="grid md:grid-cols-2 gap-6">
              <div *ngFor="let i of [1,2,3,4]" class="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-pulse">
                <div class="flex items-start gap-4">
                  <!-- Skeleton Icon -->
                  <div class="w-14 h-14 bg-gray-200 rounded-xl"></div>
                  
                  <!-- Skeleton Content -->
                  <div class="flex-1 space-y-3">
                    <!-- Skeleton Header -->
                    <div class="flex items-start justify-between">
                      <div class="h-5 bg-gray-200 rounded w-3/4"></div>
                      <div class="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                    
                    <!-- Skeleton Badge -->
                    <div class="h-6 bg-gray-200 rounded-full w-24"></div>
                    
                    <!-- Skeleton Description -->
                    <div class="space-y-2">
                      <div class="h-4 bg-gray-200 rounded w-full"></div>
                      <div class="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                    
                    <!-- Skeleton Buttons -->
                    <div class="flex gap-2 pt-2">
                      <div class="h-8 bg-gray-200 rounded w-20"></div>
                      <div class="h-8 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Lista -->
          <div *ngIf="!isLoading && filteredDonations.length > 0" class="grid md:grid-cols-2 gap-6">
            <div *ngFor="let donation of paginatedDonations" class="group">
              <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full">
                <div class="p-6">
                  <div class="flex items-start gap-4">
                    <!-- Ícone -->
                    <div class="flex-shrink-0">
                      <div class="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                           [class]="donation.type === 'MONEY' ? 'bg-gradient-to-br from-green-500 to-green-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'">
                        <i class="fas fa-dollar-sign text-white text-lg" *ngIf="donation.type === 'MONEY'"></i>
                        <i class="fas fa-box text-white text-lg" *ngIf="donation.type === 'ITEM'"></i>
                      </div>
                    </div>
                    
                    <!-- Conteúdo -->
                    <div class="flex-1 min-w-0">
                      <!-- Header -->
                      <div class="flex items-start justify-between mb-3">
                        <h3 class="text-lg font-semibold text-gray-800 truncate">
                          <span *ngIf="donation.type === 'MONEY'">
                            Doação em Dinheiro
                          </span>
                          <span *ngIf="donation.type === 'ITEM'">
                            {{donation.itemDescription}}
                          </span>
                        </h3>
                        <span class="text-sm text-gray-500 ml-2 flex-shrink-0">
                          {{donation.donationDate | date:'dd/MM/yyyy'}}
                        </span>
                      </div>
                      
                      <!-- Badge de valor/quantidade -->
                      <div class="mb-3">
                        <span *ngIf="donation.type === 'MONEY'" 
                              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          R$ {{donation.amount | number:'1.2-2'}}
                        </span>
                        <span *ngIf="donation.type === 'ITEM'" 
                              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {{donation.itemQuantity}} {{donation.unit}}
                        </span>
                      </div>

                      <!-- Observações -->
                      <p class="text-gray-600 text-sm mb-4 line-clamp-2" *ngIf="donation.observations">
                        <i class="fas fa-comment text-gray-400 mr-2"></i>
                        {{donation.observations}}
                      </p>

                      <!-- Footer -->
                      <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                          <i class="fas fa-user text-gray-400"></i>
                          <span class="truncate">{{donation.donorName}}</span>
                        </div>
                        
                        <div class="flex items-center gap-3">
                          <button 
                            class="group/btn relative overflow-hidden flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                            (click)="viewDetails(donation)">
                            <!-- Ripple effect -->
                            <div class="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover/btn:scale-100 transition-transform duration-300 opacity-0 group-hover/btn:opacity-100"></div>
                            
                            <!-- Shine effect -->
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                            
                            <i class="fas fa-eye relative z-10 group-hover/btn:scale-110 transition-transform duration-200"></i>
                            <span class="relative z-10">Detalhes</span>
                          </button>
                          <button 
                            *ngIf="isAdmin" 
                            class="group/del relative overflow-hidden flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                            (click)="deleteDonation(donation)"
                            title="Deletar doação (apenas admin)">
                            <!-- Ripple effect -->
                            <div class="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover/del:scale-100 transition-transform duration-300 opacity-0 group-hover/del:opacity-100"></div>
                            
                            <!-- Danger pulse -->
                            <div class="absolute inset-0 bg-red-400/30 rounded-xl animate-pulse opacity-0 group-hover/del:opacity-100 transition-opacity duration-300"></div>
                            
                            <i class="fas fa-trash text-sm relative z-10 group-hover/del:scale-110 group-hover/del:rotate-12 transition-all duration-200"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Paginação -->
          <div *ngIf="!isLoading && filteredDonations.length > itemsPerPage" class="flex justify-center mt-12">
            <nav class="flex items-center gap-2 p-2 bg-white rounded-xl shadow-lg border border-gray-100">
              <!-- Botão Anterior -->
              <button 
                class="group relative flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 bg-white hover:bg-primary-50 hover:border-primary-200 text-gray-600 hover:text-primary-600 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white overflow-hidden"
                [disabled]="currentPage === 1"
                (click)="changePage(currentPage - 1)">
                <div class="absolute inset-0 bg-primary-100 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl opacity-0 group-hover:opacity-100"></div>
                <i class="fas fa-chevron-left text-sm relative z-10"></i>
              </button>
              
              <!-- Números das páginas -->
              <div class="flex items-center gap-1 mx-2">
                <button 
                  *ngFor="let page of getPageNumbers()" 
                  class="group relative flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-300 text-sm font-semibold transform hover:scale-110 overflow-hidden"
                  [class]="page === currentPage ? 
                    'bg-gradient-to-r from-primary-600 to-primary-700 border-primary-600 text-white shadow-lg shadow-primary-200' : 
                    'border-gray-200 bg-white hover:bg-primary-50 hover:border-primary-200 text-gray-600 hover:text-primary-600'"
                  (click)="changePage(page)">
                  <div class="absolute inset-0 bg-primary-100 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl opacity-0 group-hover:opacity-100" 
                       [class.hidden]="page === currentPage"></div>
                  <span class="relative z-10">{{page}}</span>
                  <div *ngIf="page === currentPage" class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 animate-pulse opacity-20 rounded-xl"></div>
                </button>
              </div>
              
              <!-- Botão Próximo -->
              <button 
                class="group relative flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 bg-white hover:bg-primary-50 hover:border-primary-200 text-gray-600 hover:text-primary-600 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white overflow-hidden"
                [disabled]="currentPage === totalPages"
                (click)="changePage(currentPage + 1)">
                <div class="absolute inset-0 bg-primary-100 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl opacity-0 group-hover:opacity-100"></div>
                <i class="fas fa-chevron-right text-sm relative z-10"></i>
              </button>
            </nav>
          </div>

          <!-- Nenhuma doação encontrada -->
          <div *ngIf="!isLoading && filteredDonations.length === 0" class="text-center py-20">
            <div class="relative mb-8">
              <div class="w-24 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-search text-4xl text-gray-400"></i>
              </div>
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-50 rounded-full -z-10 animate-pulse"></div>
            </div>
            
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Nenhuma doação encontrada</h3>
            <p class="text-gray-600 mb-8 max-w-md mx-auto">
              Não há doações que correspondam aos filtros selecionados. 
              Tente ajustar os critérios de busca.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                class="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                (click)="clearFilters()">
                <!-- Ripple effect -->
                <div class="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <!-- Shine effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <i class="fas fa-times relative z-10 group-hover:rotate-90 transition-transform duration-300"></i>
                <span class="relative z-10">Limpar Filtros</span>
              </button>
              <a routerLink="/nova-doacao" 
                 class="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]">
                <!-- Ripple effect -->
                <div class="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <!-- Pulse effect -->
                <div class="absolute inset-0 bg-green-400/30 rounded-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <i class="fas fa-plus relative z-10 group-hover:scale-110 group-hover:rotate-90 transition-all duration-300"></i>
                <span class="relative z-10">Nova Doação</span>
              </a>
            </div>
          </div>

          <!-- Erro -->
          <div *ngIf="showError" class="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <i class="fas fa-exclamation-circle text-red-600 text-lg"></i>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-red-800 mb-2">Erro ao carregar doações</h3>
                <p class="text-red-700 mb-4">
                  Ocorreu um problema ao buscar as informações. Verifique sua conexão e tente novamente.
                </p>
                <button 
                  class="group relative overflow-hidden flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-100 to-red-200 hover:from-red-200 hover:to-red-300 text-red-700 rounded-xl transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                  (click)="loadDonations()">
                  <!-- Ripple effect -->
                  <div class="absolute inset-0 bg-red-300/30 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                  
                  <i class="fas fa-redo relative z-10 group-hover:rotate-180 transition-transform duration-500"></i>
                  <span class="relative z-10">Tentar Novamente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Modal de Detalhes -->
    <div *ngIf="selectedDonation" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100">
        <!-- Header -->
        <div class="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <i class="fas fa-info-circle text-white text-lg"></i>
              </div>
              <h3 class="text-xl font-bold text-white">Detalhes da Doação</h3>
            </div>
            <button 
              class="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              (click)="closeModal()">
              <i class="fas fa-times text-white text-lg"></i>
            </button>
          </div>
        </div>

        <!-- Body -->
        <div class="p-6 space-y-6 max-h-[calc(90vh-140px)] overflow-y-auto">
          <!-- Tipo de Doação -->
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span class="text-gray-700 font-medium">Tipo:</span>
            <span class="px-3 py-1 rounded-full text-sm font-medium"
                  [class]="selectedDonation.type === 'MONEY' ? 
                    'bg-green-100 text-green-800' : 
                    'bg-blue-100 text-blue-800'">
              <i class="fas mr-2" 
                 [class]="selectedDonation.type === 'MONEY' ? 'fa-dollar-sign' : 'fa-box'"></i>
              {{selectedDonation.type === 'MONEY' ? 'Dinheiro' : 'Item'}}
            </span>
          </div>

          <!-- Valor ou Descrição do Item -->
          <div *ngIf="selectedDonation.type === 'MONEY'" class="p-4 bg-green-50 rounded-xl border border-green-200">
            <div class="flex items-center justify-between">
              <span class="text-green-700 font-medium">Valor:</span>
              <div class="text-right">
                <div class="text-2xl font-bold text-green-800">
                  R$ {{selectedDonation.amount | number:'1.2-2'}}
                </div>
              </div>
            </div>
          </div>

          <div *ngIf="selectedDonation.type === 'ITEM'" class="space-y-4">
            <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div class="flex items-start justify-between">
                <span class="text-blue-700 font-medium">Descrição:</span>
                <div class="text-right max-w-xs">
                  <div class="text-blue-800 font-semibold">{{selectedDonation.itemDescription}}</div>
                </div>
              </div>
            </div>
            
            <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div class="flex items-center justify-between">
                <span class="text-blue-700 font-medium">Quantidade:</span>
                <div class="text-blue-800 font-semibold">
                  {{selectedDonation.itemQuantity}} {{selectedDonation.unit}}
                </div>
              </div>
            </div>
          </div>

          <!-- Data -->
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span class="text-gray-700 font-medium">Data:</span>
            <div class="flex items-center gap-2 text-gray-800 font-semibold">
              <i class="fas fa-calendar-alt text-gray-500"></i>
              {{selectedDonation.donationDate | date:'dd/MM/yyyy'}}
            </div>
          </div>

          <!-- Doador -->
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span class="text-gray-700 font-medium">Doador:</span>
            <div class="flex items-center gap-2 text-gray-800 font-semibold">
              <i class="fas fa-user text-gray-500"></i>
              {{selectedDonation.donorName}}
            </div>
          </div>

          <!-- Observações -->
          <div *ngIf="selectedDonation.observations" class="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <div class="flex items-start gap-3">
              <i class="fas fa-comment text-yellow-600 mt-1"></i>
              <div>
                <h4 class="text-yellow-800 font-medium mb-2">Observações:</h4>
                <p class="text-yellow-700 leading-relaxed">{{selectedDonation.observations}}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div class="flex justify-end">
            <button 
              class="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-medium"
              (click)="closeModal()">
              <i class="fas fa-times"></i>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Confirmação -->
    <app-confirmation-modal
      [isVisible]="showDeleteModal"
      [title]="deleteModalTitle"
      [message]="deleteModalMessage"
      [details]="deleteModalDetails"
      [type]="'danger'"
      [confirmText]="'Excluir'"
      [cancelText]="'Cancelar'"
      (confirmed)="confirmDelete()"
      (cancelled)="cancelDelete()">
    </app-confirmation-modal>

    <!-- Modal de Sucesso -->
    <app-success-modal
      [isVisible]="showSuccessModal"
      [title]="successModalTitle"
      [message]="successModalMessage"
      [details]="successModalDetails"
      [confirmText]="'OK'"
      (confirmed)="closeSuccessModal()">
    </app-success-modal>

    <!-- Modal de Erro -->
    <app-error-modal
      [isVisible]="showErrorModal"
      [title]="errorModalTitle"
      [message]="errorModalMessage"
      [details]="errorModalDetails"
      [confirmText]="'OK'"
      (confirmed)="closeErrorModal()">
    </app-error-modal>
  `,
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {
  donations: any[] = [];
  filteredDonations: any[] = [];
  paginatedDonations: any[] = [];
  selectedDonation: any = null;
  
  isLoading = true;
  showError = false;
  isAdmin = false;

  // Propriedades do modal de confirmação
  showDeleteModal = false;
  deleteModalTitle = '';
  deleteModalMessage = '';
  deleteModalDetails = '';
  deleteAction: (() => void) | null = null;

  // Propriedades do modal de sucesso
  showSuccessModal = false;
  successModalTitle = '';
  successModalMessage = '';
  successModalDetails = '';

  // Propriedades do modal de erro
  showErrorModal = false;
  errorModalTitle = '';
  errorModalMessage = '';
  errorModalDetails = '';
  
  // Estatísticas
  totalDonations = 0;
  totalAmount = 0;
  totalItems = 0;
  currentMonth = 0;
  
  // Filtros
  filterType = '';
  filterMonth = '';
  filterDonorId = '';
  filterDonorName = '';
  
  // Paginação
  currentPage = 1;
  itemsPerPage = 8;
  totalPages = 1;

  constructor(
    private donationService: DonationService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadDonations();
    this.checkAdminStatus();
    
    // Verificar se há filtros de doador nos query parameters
    this.route.queryParams.subscribe(params => {
      if (params['donorId']) {
        this.filterDonorId = params['donorId'];
        this.filterDonorName = params['donorName'] || '';
      }
      this.loadDonations();
    });
  }

  checkAdminStatus() {
    this.isAdmin = this.authService.isAuthenticated();
  }

  loadDonations() {
    this.isLoading = true;
    this.showError = false;

    this.donationService.list(0, 100).subscribe({
      next: (response) => {
        this.donations = response.content;
        this.calculateStatistics();
        this.applyFilters();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.showError = true;
      }
    });
  }

  calculateStatistics() {
    this.totalDonations = this.donations.length;
    this.totalAmount = this.donations
      .filter(d => d.type === 'MONEY' && d.amount)
      .reduce((sum, d) => sum + (d.amount || 0), 0);
    this.totalItems = this.donations
      .filter(d => d.type === 'ITEM')
      .length;
    
    // Doações do mês atual
    const currentDate = new Date();
    const currentMonthStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
    this.currentMonth = this.donations
      .filter(d => d.donationDate && d.donationDate.startsWith(currentMonthStr))
      .length;
  }

  applyFilters() {
    this.filteredDonations = this.donations.filter(donation => {
      let matchesType = true;
      let matchesMonth = true;
      let matchesDonor = true;

      if (this.filterType) {
        matchesType = donation.type === this.filterType;
      }

      if (this.filterMonth) {
        matchesMonth = donation.donationDate && donation.donationDate.startsWith(this.filterMonth);
      }

      if (this.filterDonorName) {
        matchesDonor = donation.donorName && donation.donorName.toLowerCase().includes(this.filterDonorName.toLowerCase());
      }

      return matchesType && matchesMonth && matchesDonor;
    });

    this.totalPages = Math.ceil(this.filteredDonations.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePagination();
  }

  clearFilters() {
    this.filterType = '';
    this.filterMonth = '';
    this.filterDonorId = '';
    this.filterDonorName = '';
    this.applyFilters();
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDonations = this.filteredDonations.slice(startIndex, endIndex);
  }

  getPageNumbers(): number[] {
    const pages = [];
    const maxPages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxPages - 1);

    if (endPage - startPage < maxPages - 1) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  viewDetails(donation: any) {
    this.selectedDonation = donation;
    this.openModal('detailsModal');
  }

  private openModal(modalId: string) {
    // Usar Bootstrap modal programaticamente
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      // Se Bootstrap estiver disponível globalmente
      if (typeof (window as any).bootstrap !== 'undefined') {
        const modal = new (window as any).bootstrap.Modal(modalElement);
        modal.show();
      } else {
        // Fallback: mostrar modal manualmente
        modalElement.style.display = 'block';
        modalElement.classList.add('show');
        document.body.classList.add('modal-open');
        
        // Adicionar backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop fade show';
        backdrop.id = 'modal-backdrop';
        document.body.appendChild(backdrop);
      }
    }
  }

  closeModal() {
    this.selectedDonation = null;
    
    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
      // Se Bootstrap estiver disponível globalmente
      if (typeof (window as any).bootstrap !== 'undefined') {
        const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
      } else {
        // Fallback: fechar modal manualmente
        modalElement.style.display = 'none';
        modalElement.classList.remove('show');
        document.body.classList.remove('modal-open');
        
        // Remover backdrop
        const backdrop = document.getElementById('modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }
      }
    }
  }

  // Métodos para o modal de confirmação
  confirmDelete(): void {
    if (this.deleteAction) {
      this.deleteAction();
    }
    this.showDeleteModal = false;
    this.deleteAction = null;
  }

  cancelDelete(): void {
    this.showDeleteModal = false;
    this.deleteAction = null;
  }

  // Métodos para o modal de sucesso
  showSuccessMessage(title: string, message: string, details: string = ''): void {
    this.successModalTitle = title;
    this.successModalMessage = message;
    this.successModalDetails = details;
    this.showSuccessModal = true;
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
  }

  // Métodos para o modal de erro
  showErrorMessage(title: string, message: string, details: string = ''): void {
    this.errorModalTitle = title;
    this.errorModalMessage = message;
    this.errorModalDetails = details;
    this.showErrorModal = true;
  }

  closeErrorModal(): void {
    this.showErrorModal = false;
  }

  deleteDonation(donation: any) {
    // Verificar se o usuário é realmente admin antes de permitir a exclusão
    if (!this.authService.isAuthenticated()) {
      this.showErrorMessage(
        'Acesso Negado',
        'Apenas administradores podem deletar doações.',
        'Faça login como administrador para realizar esta ação.'
      );
      return;
    }

    // Configurar o modal de confirmação
    this.deleteModalTitle = 'Confirmar Exclusão';
    this.deleteModalMessage = 'Tem certeza que deseja deletar esta doação?';
    
    const donationType = donation.type === 'MONEY' ? 'Dinheiro' : 'Item';
    const donationValue = donation.type === 'MONEY' ? 
      `Valor: R$ ${donation.amount?.toFixed(2) || '0.00'}` : 
      `Item: ${donation.itemDescription} (${donation.itemQuantity} ${donation.unit})`;
    const donationDate = new Date(donation.donationDate).toLocaleDateString('pt-BR');
    
    this.deleteModalDetails = `Tipo: ${donationType}\n${donationValue}\nDoador: ${donation.donorName}\nData: ${donationDate}\n\nEsta ação não pode ser desfeita.`;

    // Definir a ação de exclusão
    this.deleteAction = () => {
      this.donationService.delete(donation.id).subscribe({
        next: () => {
          // Remover a doação da lista local
          this.donations = this.donations.filter(d => d.id !== donation.id);
          
          // Recalcular estatísticas e aplicar filtros
          this.calculateStatistics();
          this.applyFilters();
          
          // Mostrar mensagem de sucesso
          this.showSuccessMessage(
            'Doação Excluída',
            'A doação foi excluída com sucesso!',
            'A doação foi removida permanentemente do sistema.'
          );
        },
        error: (error) => {
          console.error('Erro ao deletar doação:', error);
          this.showErrorMessage(
            'Erro ao Excluir',
            'Não foi possível excluir a doação.',
            'Tente novamente. Se o problema persistir, entre em contato com o suporte.'
          );
        }
      });
    };

    // Mostrar o modal de confirmação
    this.showDeleteModal = true;
  }
}