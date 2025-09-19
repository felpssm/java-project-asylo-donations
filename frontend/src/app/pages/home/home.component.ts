import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DonationService } from '../../services/donation.service';
import { DonorService } from '../../services/donor.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="w-full">
      <!-- Estatísticas -->
      <section class="py-16 bg-gradient-to-br from-secondary-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Nosso Impacto</h2>
            <p class="text-lg text-secondary-600 max-w-2xl mx-auto">Veja como suas doações estão transformando vidas e fazendo a diferença em nossa comunidade</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-hand-holding-heart text-2xl text-white"></i>
              </div>
              <h3 class="text-3xl font-bold text-primary-600 mb-2">{{totalDonations}}</h3>
              <p class="text-secondary-600 font-medium">Doações Recebidas</p>
            </div>
            
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-users text-2xl text-white"></i>
              </div>
              <h3 class="text-3xl font-bold text-emerald-600 mb-2">{{totalDonors}}</h3>
              <p class="text-secondary-600 font-medium">Doadores Cadastrados</p>
            </div>
            
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-dollar-sign text-2xl text-white"></i>
              </div>
              <h3 class="text-3xl font-bold text-amber-600 mb-2">R$ {{totalAmount | number:'1.2-2'}}</h3>
              <p class="text-secondary-600 font-medium">Valor Arrecadado</p>
            </div>
            
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-box text-2xl text-white"></i>
              </div>
              <h3 class="text-3xl font-bold text-blue-600 mb-2">{{totalItems}}</h3>
              <p class="text-secondary-600 font-medium">Itens Doados</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Blocos de Conteúdo -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Como Fazemos a Diferença</h2>
            <p class="text-lg text-secondary-600 max-w-3xl mx-auto">Conheça nossa missão, descubra como você pode ajudar e acompanhe nossa transparência em cada ação</p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="group">
              <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center h-full border border-secondary-100 hover:border-primary-200">
                <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <i class="fas fa-heart text-3xl text-white"></i>
                </div>
                <h4 class="text-xl font-bold text-secondary-900 mb-4">Nossa Missão</h4>
                <p class="text-secondary-600 leading-relaxed mb-6">
                  Proporcionar cuidado, acolhimento e dignidade para pessoas em situação de 
                  vulnerabilidade social, promovendo sua reintegração na sociedade.
                </p>
                <a routerLink="/sobre" class="btn-primary inline-flex items-center group-hover:scale-105 transition-transform duration-200">
                  Saiba Mais
                  <i class="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
            </div>
            
            <div class="group">
              <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center h-full border border-secondary-100 hover:border-emerald-200">
                <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <i class="fas fa-hands-helping text-3xl text-white"></i>
                </div>
                <h4 class="text-xl font-bold text-secondary-900 mb-4">Como Ajudar</h4>
                <p class="text-secondary-600 leading-relaxed mb-6">
                  Existem várias formas de contribuir: doações em dinheiro, alimentos, 
                  roupas, medicamentos ou oferecendo seu tempo como voluntário.
                </p>
                <a routerLink="/nova-doacao" fragment="donation-form" class="btn-success inline-flex items-center group-hover:scale-105 transition-transform duration-200">
                  Fazer Doação
                  <i class="fas fa-heart ml-2 text-sm"></i>
                </a>
              </div>
            </div>
            
            <div class="group">
              <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center h-full border border-secondary-100 hover:border-blue-200">
                <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <i class="fas fa-eye text-3xl text-white"></i>
                </div>
                <h4 class="text-xl font-bold text-secondary-900 mb-4">Transparência</h4>
                <p class="text-secondary-600 leading-relaxed mb-6">
                  Acompanhe em tempo real como suas doações são utilizadas. 
                  Mantemos total transparência em todas as nossas atividades.
                </p>
                <a routerLink="/doacoes" class="btn-info inline-flex items-center group-hover:scale-105 transition-transform duration-200">
                  Ver Relatórios
                  <i class="fas fa-chart-line ml-2 text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Últimas Doações -->
      <section class="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Últimas Doações</h2>
            <p class="text-lg text-secondary-600 max-w-2xl mx-auto">Veja as contribuições mais recentes de nossa comunidade solidária</p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group" *ngFor="let donation of recentDonations">
              <div class="flex items-center">
                <div class="flex-shrink-0 mr-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-gift text-white"></i>
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h6 class="text-lg font-semibold text-secondary-900 mb-1">
                    <span *ngIf="donation.type === 'MONEY'" class="text-emerald-600">
                      Doação em Dinheiro - R$ {{donation.amount | number:'1.2-2'}}
                    </span>
                    <span *ngIf="donation.type === 'ITEM'" class="text-blue-600">
                      {{donation.itemDescription}} - {{donation.itemQuantity}} {{donation.unit}}
                    </span>
                  </h6>
                  <p class="text-sm text-secondary-500 flex items-center">
                    <i class="fas fa-calendar-alt mr-2"></i>
                    {{donation.donationDate | date:'dd/MM/yyyy'}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center">
            <a routerLink="/doacoes" class="btn-outline-primary inline-flex items-center">
              Ver Todas as Doações
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="py-20 bg-gradient-primary text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-black bg-opacity-10"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">Faça a Diferença Hoje</h2>
            <p class="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Sua contribuição, por menor que seja, pode transformar vidas. 
              Junte-se a nós nesta missão de solidariedade.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <a routerLink="/nova-doacao" fragment="donation-form" class="btn-white group">
                <i class="fas fa-hand-holding-heart mr-2 group-hover:scale-110 transition-transform duration-200"></i>
                Fazer Doação
              </a>
              <a routerLink="/contato" class="btn-outline-white group">
                <i class="fas fa-envelope mr-2 group-hover:scale-110 transition-transform duration-200"></i>
                Entre em Contato
              </a>
            </div>
          </div>
          
          <!-- Decorative elements -->
          <div class="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div class="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
          <div class="absolute top-1/2 left-20 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-500"></div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  totalDonations = 0;
  totalDonors = 0;
  totalAmount = 0;
  totalItems = 0;
  recentDonations: any[] = [];

  constructor(
    private donationService: DonationService,
    private donorService: DonorService
  ) {}

  ngOnInit() {
    this.loadStatistics();
    this.loadRecentDonations();
  }

  loadStatistics() {
    // Carregar estatísticas dos doadores
    this.donorService.list(0, 1).subscribe({
      next: (response) => {
        this.totalDonors = response.totalElements;
      },
      error: (error) => {
        console.error('Erro ao carregar doadores:', error);
        this.totalDonors = 0;
      }
    });

    // Carregar estatísticas das doações
    this.donationService.list(0, 100).subscribe({
      next: (response) => {
        this.totalDonations = response.totalElements;
        
        // Calcular totais
        this.totalAmount = response.content
          .filter(d => d.type === 'MONEY' && d.amount)
          .reduce((sum, d) => sum + (d.amount || 0), 0);
          
        this.totalItems = response.content
          .filter(d => d.type === 'ITEM')
          .length;
      },
      error: (error) => {
        console.error('Erro ao carregar doações:', error);
        this.totalDonations = 0;
        this.totalAmount = 0;
        this.totalItems = 0;
      }
    });
  }

  loadRecentDonations() {
    this.donationService.list(0, 6).subscribe({
      next: (response) => {
        this.recentDonations = response.content;
      },
      error: (error) => {
        console.error('Erro ao carregar doações recentes:', error);
        this.recentDonations = [];
      }
    });
  }
}