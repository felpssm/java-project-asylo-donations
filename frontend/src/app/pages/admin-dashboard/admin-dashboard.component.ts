import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DonationService } from '../../services/donation.service';
import { DonorService } from '../../services/donor.service';
import { PdfService } from '../../services/pdf.service';
import { DonationResponse, DonationType } from '../../models/donation.model';
import { DonorResponse } from '../../models/donor.model';
import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';
import { SuccessModalComponent } from '../../components/success-modal/success-modal.component';
import { ErrorModalComponent } from '../../components/error-modal/error-modal.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ConfirmationModalComponent, SuccessModalComponent, ErrorModalComponent],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <!-- Elementos decorativos de fundo -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-20 w-32 h-32 bg-primary-200/20 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-40 h-40 bg-accent-200/15 rounded-full blur-2xl animate-bounce"></div>
        <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-300/15 rounded-full blur-lg animate-ping"></div>
      </div>

      <!-- Header -->
      <div class="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32 -translate-y-32"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 translate-y-24"></div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <i class="fas fa-tachometer-alt text-2xl"></i>
                </div>
                <h1 class="text-3xl font-bold">Dashboard Administrativo</h1>
              </div>
              <p class="text-blue-100 text-lg">Bem-vindo, {{ currentUser }}!</p>
            </div>
            <button 
              class="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              (click)="logout()">
              <i class="fas fa-sign-out-alt"></i>
              <span>Sair</span>
            </button>
          </div>
        </div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Cards de Estatísticas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- Total de Doações -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div class="bg-gradient-to-br from-primary-500 to-primary-600 p-6 relative">
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
              <div class="flex items-center justify-between relative">
                <div>
                  <p class="text-primary-100 text-sm font-medium mb-1">Total de Doações</p>
                  <p class="text-white text-3xl font-bold">{{ totalDonations }}</p>
                </div>
                <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <i class="fas fa-hand-holding-heart text-2xl text-white"></i>
                </div>
              </div>
            </div>
            <div class="p-4 bg-gradient-to-r from-primary-50 to-primary-100">
              <div class="flex items-center gap-2 text-primary-700">
                <i class="fas fa-chart-line text-sm"></i>
                <span class="text-sm font-medium">Gestão de doações</span>
              </div>
            </div>
          </div>

          <!-- Total de Doadores -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div class="bg-gradient-to-br from-green-500 to-green-600 p-6 relative">
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
              <div class="flex items-center justify-between relative">
                <div>
                  <p class="text-green-100 text-sm font-medium mb-1">Total de Doadores</p>
                  <p class="text-white text-3xl font-bold">{{ totalDonors }}</p>
                </div>
                <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <i class="fas fa-users text-2xl text-white"></i>
                </div>
              </div>
            </div>
            <div class="p-4 bg-gradient-to-r from-green-50 to-green-100">
              <div class="flex items-center gap-2 text-green-700">
                <i class="fas fa-user-plus text-sm"></i>
                <span class="text-sm font-medium">Cadastros ativos</span>
              </div>
            </div>
          </div>

          <!-- Doações Dinheiro -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-6 relative">
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
              <div class="flex items-center justify-between relative">
                <div>
                  <p class="text-blue-100 text-sm font-medium mb-1">Doações Dinheiro</p>
                  <p class="text-white text-3xl font-bold">{{ moneyDonations }}</p>
                </div>
                <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <i class="fas fa-dollar-sign text-2xl text-white"></i>
                </div>
              </div>
            </div>
            <div class="p-4 bg-gradient-to-r from-blue-50 to-blue-100">
              <div class="flex items-center gap-2 text-blue-700">
                <i class="fas fa-coins text-sm"></i>
                <span class="text-sm font-medium">Contribuições financeiras</span>
              </div>
            </div>
          </div>

          <!-- Doações Materiais -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div class="bg-gradient-to-br from-amber-500 to-amber-600 p-6 relative">
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
              <div class="flex items-center justify-between relative">
                <div>
                  <p class="text-amber-100 text-sm font-medium mb-1">Doações Materiais</p>
                  <p class="text-white text-3xl font-bold">{{ materialDonations }}</p>
                </div>
                <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <i class="fas fa-box text-2xl text-white"></i>
                </div>
              </div>
            </div>
            <div class="p-4 bg-gradient-to-r from-amber-50 to-amber-100">
              <div class="flex items-center gap-2 text-amber-700">
                <i class="fas fa-gift text-sm"></i>
                <span class="text-sm font-medium">Itens doados</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Ações Administrativas -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <!-- Gerenciar Doações -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div class="bg-gradient-to-r from-primary-500 to-primary-600 p-6 relative">
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
              <div class="flex items-center gap-3 relative">
                <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <i class="fas fa-hand-holding-heart text-2xl text-white"></i>
                </div>
                <h3 class="text-xl font-bold text-white">Gerenciar Doações</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">Visualize, edite ou remova doações do sistema.</p>
              <div class="flex flex-col sm:flex-row gap-3">
                <button 
                  class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  (click)="viewDonations()">
                  <i class="fas fa-eye"></i>
                  <span>Ver Doações</span>
                </button>
                <button 
                  class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  (click)="manageDonations()">
                  <i class="fas fa-cog"></i>
                  <span>Gerenciar</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Gerenciar Doadores -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div class="bg-gradient-to-r from-green-500 to-green-600 p-6 relative">
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
              <div class="flex items-center gap-3 relative">
                <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <i class="fas fa-users text-2xl text-white"></i>
                </div>
                <h3 class="text-xl font-bold text-white">Gerenciar Doadores</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">Visualize, edite ou remova doadores do sistema.</p>
              <div class="flex flex-col sm:flex-row gap-3">
                <button 
                  class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  (click)="viewDonors()">
                  <i class="fas fa-eye"></i>
                  <span>Ver Doadores</span>
                </button>
                <button 
                  class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  (click)="manageDonors()">
                  <i class="fas fa-cog"></i>
                  <span>Gerenciar</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Relatórios PDF -->
          <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6 relative">
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
              <div class="flex items-center gap-3 relative">
                <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <i class="fas fa-file-pdf text-2xl text-white"></i>
                </div>
                <h3 class="text-xl font-bold text-white">Relatórios PDF</h3>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">Gere relatórios em PDF dos dados do sistema.</p>
              <div class="space-y-3">
                <button 
                  class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary-200 text-primary-700 hover:bg-primary-50 hover:border-primary-300 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  (click)="exportDonorsPdf()">
                  <i class="fas fa-users"></i>
                  <span>Relatório de Doadores</span>
                </button>
                <button 
                  class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  (click)="exportDonationsPdf()">
                  <i class="fas fa-hand-holding-heart"></i>
                  <span>Relatório de Doações</span>
                </button>
                <button 
                  class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  (click)="exportCombinedPdf()">
                  <i class="fas fa-file-alt"></i>
                  <span>Relatório Completo</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Doações Recentes -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div class="bg-gradient-to-r from-primary-500 to-primary-600 p-6">
            <div class="flex items-center gap-3">
              <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <i class="fas fa-clock text-2xl text-white"></i>
              </div>
              <h2 class="text-2xl font-bold text-white">Doações Recentes</h2>
            </div>
          </div>
          
          <div class="p-6">
            <div *ngIf="recentDonations.length === 0" class="text-center py-12">
              <div class="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                <i class="fas fa-inbox text-4xl text-gray-400"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-700 mb-2">Nenhuma doação encontrada</h3>
              <p class="text-gray-500">As doações aparecerão aqui quando forem registradas</p>
            </div>
            
            <div *ngIf="recentDonations.length > 0" class="overflow-x-auto">
              <!-- Mobile Cards (visible on small screens) -->
              <div class="block lg:hidden space-y-4">
                <div *ngFor="let donation of recentDonations" class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-sm font-medium text-gray-500">ID:</span>
                      <span class="font-semibold text-gray-900">{{ donation.id }}</span>
                    </div>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                          [class]="donation.type === 'MONEY' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'">
                      {{ donation.type === 'MONEY' ? 'DINHEIRO' : 'ITEM' }}
                    </span>
                  </div>
                  
                  <div class="space-y-2 mb-4">
                    <div class="flex items-center gap-2">
                      <i class="fas fa-user text-gray-400 text-sm"></i>
                      <span class="text-gray-900 font-medium">{{ donation.donorName }}</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <i class="fas fa-calendar text-gray-400 text-sm"></i>
                      <span class="text-gray-600 text-sm">{{ donation.donationDate | date:'dd/MM/yyyy HH:mm' }}</span>
                    </div>
                    
                    <div class="flex items-start gap-2">
                      <i class="fas fa-info-circle text-gray-400 text-sm mt-0.5"></i>
                      <div class="text-gray-900">
                        <span *ngIf="donation.type === 'MONEY'" class="font-semibold text-green-600">
                          R$ {{ donation.amount | number:'1.2-2' }}
                        </span>
                        <span *ngIf="donation.type === 'ITEM'" class="text-sm">
                          {{ donation.itemDescription }} ({{ donation.itemQuantity }} {{ donation.unit }})
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex justify-end">
                    <button 
                      class="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                      (click)="deleteDonation(donation.id)">
                      <i class="fas fa-trash text-sm"></i>
                      <span>Excluir</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- Desktop Table (hidden on small screens) -->
              <div class="hidden lg:block">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-gray-200">
                      <th class="text-left py-4 px-2 font-semibold text-gray-700">ID</th>
                      <th class="text-left py-4 px-2 font-semibold text-gray-700">Doador</th>
                      <th class="text-left py-4 px-2 font-semibold text-gray-700">Tipo</th>
                      <th class="text-left py-4 px-2 font-semibold text-gray-700">Valor/Descrição</th>
                      <th class="text-left py-4 px-2 font-semibold text-gray-700">Data</th>
                      <th class="text-center py-4 px-2 font-semibold text-gray-700">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let donation of recentDonations" class="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                      <td class="py-4 px-2 font-medium text-gray-900">{{ donation.id }}</td>
                      <td class="py-4 px-2 text-gray-900">{{ donation.donorName }}</td>
                      <td class="py-4 px-2">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                              [class]="donation.type === 'MONEY' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'">
                          {{ donation.type === 'MONEY' ? 'DINHEIRO' : 'ITEM' }}
                        </span>
                      </td>
                      <td class="py-4 px-2">
                        <span *ngIf="donation.type === 'MONEY'" class="font-semibold text-green-600">
                          R$ {{ donation.amount | number:'1.2-2' }}
                        </span>
                        <span *ngIf="donation.type === 'ITEM'" class="text-gray-900">
                          {{ donation.itemDescription }} ({{ donation.itemQuantity }} {{ donation.unit }})
                        </span>
                      </td>
                      <td class="py-4 px-2 text-gray-600">{{ donation.donationDate | date:'dd/MM/yyyy HH:mm' }}</td>
                      <td class="py-4 px-2 text-center">
                        <button 
                          class="inline-flex items-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                          (click)="deleteDonation(donation.id)">
                          <i class="fas fa-trash text-sm"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Seção de Doadores (condicional) -->
        <div *ngIf="showDonorsSection" class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-green-600 p-6">
            <div class="flex items-center gap-3">
              <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <i class="fas fa-users text-2xl text-white"></i>
              </div>
              <h2 class="text-2xl font-bold text-white">Gerenciar Doadores</h2>
            </div>
          </div>
          
          <div class="p-6">
            <div *ngIf="recentDonors.length === 0" class="text-center py-12">
              <div class="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                <i class="fas fa-users text-4xl text-gray-400"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-700 mb-2">Nenhum doador encontrado</h3>
              <p class="text-gray-500">Os doadores aparecerão aqui quando se cadastrarem</p>
            </div>
            
            <div *ngIf="recentDonors.length > 0" class="overflow-x-auto">
              <!-- Mobile Cards (visible on small screens) -->
              <div class="block lg:hidden space-y-4">
                <div *ngFor="let donor of recentDonors" class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-sm font-medium text-gray-500">ID:</span>
                      <span class="font-semibold text-gray-900">{{ donor.id }}</span>
                    </div>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {{ donor.type }}
                    </span>
                  </div>
                  
                  <div class="space-y-2 mb-4">
                    <div class="flex items-center gap-2">
                      <i class="fas fa-user text-gray-400 text-sm"></i>
                      <span class="text-gray-900 font-medium">{{ donor.name }}</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <i class="fas fa-id-card text-gray-400 text-sm"></i>
                      <span class="text-gray-600 text-sm">{{ donor.document }}</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <i class="fas fa-envelope text-gray-400 text-sm"></i>
                      <span class="text-gray-600 text-sm">{{ donor.email }}</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <i class="fas fa-phone text-gray-400 text-sm"></i>
                      <span class="text-gray-600 text-sm">{{ donor.phone }}</span>
                    </div>
                  </div>
                  
                  <div class="flex justify-end">
                    <button 
                      class="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                      (click)="deleteDonor(donor.id)">
                      <i class="fas fa-trash text-sm"></i>
                      <span>Excluir</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- Desktop Table (hidden on small screens) -->
              <div class="hidden lg:block">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-gray-200">
                      <th class="text-left py-4 px-2 font-semibold text-gray-700">ID</th>
                      <th class="text-left py-4 px-2 font-semibold text-gray-700">Nome</th>
                      <th class="text-left py-4 px-2 font-semibold text-gray-700">Tipo</th>
                      <th class="text-left py-4 px-2 font-semibold text-gray-700">Documento</th>
                      <th class="text-left py-4 px-2 font-semibold text-gray-700">Email</th>
                      <th class="text-left py-4 px-2 font-semibold text-gray-700">Telefone</th>
                      <th class="text-center py-4 px-2 font-semibold text-gray-700">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let donor of recentDonors" class="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                      <td class="py-4 px-2 font-medium text-gray-900">{{ donor.id }}</td>
                      <td class="py-4 px-2 text-gray-900">{{ donor.name }}</td>
                      <td class="py-4 px-2">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          {{ donor.type }}
                        </span>
                      </td>
                      <td class="py-4 px-2 text-gray-600">{{ donor.document }}</td>
                      <td class="py-4 px-2 text-gray-600">{{ donor.email }}</td>
                      <td class="py-4 px-2 text-gray-600">{{ donor.phone }}</td>
                      <td class="py-4 px-2 text-center">
                        <button 
                          class="inline-flex items-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                          (click)="deleteDonor(donor.id)">
                          <i class="fas fa-trash text-sm"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  currentUser: string | null = null;
  totalDonations = 0;
  totalDonors = 0;
  moneyDonations = 0;
  materialDonations = 0;
  recentDonations: DonationResponse[] = [];
  recentDonors: DonorResponse[] = [];
  showDonorsSection = false;

  // Propriedades do modal de confirmação// Modal properties
  showDeleteModal = false;
  deleteModalTitle = '';
  deleteModalMessage = '';
  deleteModalDetails = '';
  deleteAction: (() => void) | null = null;

  // Success modal properties
  showSuccessModal = false;
  successModalTitle = '';
  successModalMessage = '';
  successModalDetails = '';

  // Error modal properties
  showErrorModal = false;
  errorModalTitle = '';
  errorModalMessage = '';
  errorModalDetails = '';

  constructor(
    private authService: AuthService,
    private donationService: DonationService,
    private donorService: DonorService,
    private pdfService: PdfService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.loadStatistics();
    this.loadRecentDonations();
  }

  loadStatistics(): void {
    // Carregar estatísticas de doações
    this.donationService.list(0, 1000).subscribe({
      next: (response) => {
        const donations = response.content;
        this.totalDonations = donations.length;
        this.moneyDonations = donations.filter((d: DonationResponse) => d.type === DonationType.MONEY).length;
        this.materialDonations = donations.filter((d: DonationResponse) => d.type === DonationType.ITEM).length;
      },
      error: (error: any) => {
        console.error('Erro ao carregar doações:', error);
      }
    });

    // Carregar estatísticas de doadores
    this.donorService.list(0, 1000).subscribe({
      next: (response) => {
        const donors = response.content;
        this.totalDonors = donors.length;
      },
      error: (error: any) => {
        console.error('Erro ao carregar doadores:', error);
      }
    });
  }

  loadRecentDonations(): void {
    this.donationService.list(0, 10).subscribe({
      next: (response) => {
        // Pegar as 5 doações mais recentes
        this.recentDonations = response.content
          .sort((a: DonationResponse, b: DonationResponse) => 
            new Date(b.donationDate).getTime() - new Date(a.donationDate).getTime())
          .slice(0, 5);
      },
      error: (error: any) => {
        console.error('Erro ao carregar doações recentes:', error);
      }
    });
  }

  viewDonations(): void {
    this.router.navigate(['/doacoes']);
  }

  viewDonors(): void {
    this.router.navigate(['/doadores'], { fragment: 'donors-list' });
  }

  manageDonations(): void {
    this.showDonorsSection = false; // Fechar seção de doadores se estiver aberta
    this.loadRecentDonations(); // Recarregar doações para garantir dados atualizados
  }

  manageDonors(): void {
    this.showDonorsSection = !this.showDonorsSection;
    if (this.showDonorsSection) {
      this.loadRecentDonors();
    }
  }

  loadRecentDonors(): void {
    this.donorService.list(0, 10).subscribe({
      next: (response) => {
        this.recentDonors = response.content;
      },
      error: (error: any) => {
        console.error('Erro ao carregar doadores:', error);
      }
    });
  }

  deleteDonor(donorId: number): void {
    const donor = this.recentDonors.find(d => d.id === donorId);
    this.deleteModalTitle = 'Excluir Doador';
    this.deleteModalMessage = `Tem certeza que deseja excluir o doador "${donor?.name || 'Desconhecido'}"?`;
    this.deleteModalDetails = 'Todas as doações associadas a este doador também serão removidas. Esta ação não pode ser desfeita.';
    this.deleteAction = () => {
      this.donorService.delete(donorId).subscribe({
        next: () => {
          this.loadRecentDonors();
          this.loadStatistics();
          this.loadRecentDonations();
          this.showSuccessMessage('Sucesso!', 'Doador excluído com sucesso!', 'O doador foi removido permanentemente do sistema.');
        },
        error: (error: any) => {
          console.error('Erro ao excluir doador:', error);
          this.showErrorMessage('Erro', 'Erro ao excluir doador. Tente novamente.', 'Verifique sua conexão e tente novamente.');
        }
      });
    };
    this.showDeleteModal = true;
  }

  deleteDonation(donationId: number): void {
    const donation = this.recentDonations.find(d => d.id === donationId);
    this.deleteModalTitle = 'Excluir Doação';
    this.deleteModalMessage = `Tem certeza que deseja excluir esta doação?`;
    this.deleteModalDetails = donation ? 
      `Doação: ${donation.type === 'MONEY' ? 'R$ ' + donation.amount?.toFixed(2) : donation.itemDescription} - Doador: ${donation.donorName}` : 
      'Esta ação não pode ser desfeita.';
    this.deleteAction = () => {
      this.donationService.delete(donationId).subscribe({
        next: () => {
          this.loadRecentDonations();
          this.loadStatistics();
          this.showSuccessMessage('Sucesso!', 'Doação excluída com sucesso!', 'A doação foi removida permanentemente do sistema.');
        },
        error: (error: any) => {
          console.error('Erro ao excluir doação:', error);
          this.showErrorMessage('Erro', 'Erro ao excluir doação. Tente novamente.', 'Verifique sua conexão e tente novamente.');
        }
      });
    };
    this.showDeleteModal = true;
  }

  exportDonorsPdf(): void {
    this.donorService.list().subscribe({
      next: (response) => {
        try {
          console.log('Dados dos doadores carregados:', response.content);
          this.pdfService.generateDonorsReport(response.content);
          this.showSuccessMessage('Sucesso', 'Relatório de doadores gerado com sucesso!', 'O arquivo PDF foi baixado automaticamente.');
        } catch (error) {
          console.error('Erro ao gerar PDF de doadores:', error);
          this.showErrorMessage('Erro', 'Erro ao gerar relatório de doadores', `Erro técnico: ${error}`);
        }
      },
      error: (error) => {
        console.error('Erro ao carregar doadores para PDF:', error);
        this.showErrorMessage('Erro', 'Erro ao carregar dados dos doadores', 'Não foi possível carregar os dados. Tente novamente.');
      }
    });
  }

  exportDonationsPdf(): void {
    this.donationService.list().subscribe({
      next: (response) => {
        try {
          console.log('Dados das doações carregados:', response.content);
          this.pdfService.generateDonationsReport(response.content);
          this.showSuccessMessage('Sucesso', 'Relatório de doações gerado com sucesso!', 'O arquivo PDF foi baixado automaticamente.');
        } catch (error) {
          console.error('Erro ao gerar PDF de doações:', error);
          this.showErrorMessage('Erro', 'Erro ao gerar relatório de doações', `Erro técnico: ${error}`);
        }
      },
      error: (error) => {
        console.error('Erro ao carregar doações para PDF:', error);
        this.showErrorMessage('Erro', 'Erro ao carregar dados das doações', 'Não foi possível carregar os dados. Tente novamente.');
      }
    });
  }

  exportCombinedPdf(): void {
    // Carregar doadores e doações em paralelo
    Promise.all([
      this.donorService.list().toPromise(),
      this.donationService.list().toPromise()
    ]).then(([donorsResponse, donationsResponse]) => {
      try {
        const donors = donorsResponse?.content || [];
        const donations = donationsResponse?.content || [];
        console.log('Dados carregados para relatório completo:', { donors, donations });
        this.pdfService.generateCombinedReport(donors, donations);
        this.showSuccessMessage('Sucesso', 'Relatório completo gerado com sucesso!', 'O arquivo PDF foi baixado automaticamente.');
      } catch (error) {
        console.error('Erro ao gerar PDF completo:', error);
        this.showErrorMessage('Erro', 'Erro ao gerar relatório completo', `Erro técnico: ${error}`);
      }
    }).catch((error) => {
      console.error('Erro ao carregar dados para PDF:', error);
      this.showErrorMessage('Erro', 'Erro ao carregar dados', 'Não foi possível carregar os dados. Tente novamente.');
    });
  }

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

  showSuccessMessage(title: string, message: string, details: string = ''): void {
    this.successModalTitle = title;
    this.successModalMessage = message;
    this.successModalDetails = details;
    this.showSuccessModal = true;
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
  }

  showErrorMessage(title: string, message: string, details: string = ''): void {
    this.errorModalTitle = title;
    this.errorModalMessage = message;
    this.errorModalDetails = details;
    this.showErrorModal = true;
  }

  closeErrorModal(): void {
    this.showErrorModal = false;
  }

  logout(): void {
    if (confirm('Tem certeza que deseja sair?')) {
      this.authService.logout();
      this.router.navigate(['/']);
    }
  }
}