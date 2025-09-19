import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="w-full">
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div class="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
          <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Sobre <span class="text-accent-400">Nós</span>
              </h1>
              <p class="text-xl text-primary-100 leading-relaxed">
                Há mais de 20 anos dedicados ao cuidado e acolhimento de pessoas 
                em situação de vulnerabilidade social, promovendo dignidade e esperança.
              </p>
              <div class="flex items-center space-x-4 text-primary-200">
                <div class="flex items-center">
                  <i class="fas fa-calendar-alt mr-2"></i>
                  <span>Desde 2003</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-users mr-2"></i>
                  <span>200+ atendidos/mês</span>
                </div>
              </div>
            </div>
            <div class="text-center lg:text-right">
              <div class="relative inline-block">
                <i class="fas fa-home text-8xl md:text-9xl text-primary-300 opacity-80"></i>
                <div class="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Nossa História -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Nossa História</h2>
              <p class="text-lg text-secondary-600">Uma jornada de dedicação e transformação social</p>
            </div>
            
            <div class="relative">
              <!-- Timeline line -->
              <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600 transform md:-translate-x-1/2"></div>
              
              <div class="space-y-12">
                <div class="relative flex items-center">
                  <div class="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    03
                  </div>
                  <div class="ml-6 md:ml-0 md:w-1/2 md:pr-8">
                    <div class="bg-white rounded-xl shadow-lg border border-secondary-100 p-6 hover:shadow-xl transition-shadow duration-300">
                      <div class="flex items-center mb-3">
                        <span class="text-2xl font-bold text-primary-600 mr-3">2003</span>
                        <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">Fundação</span>
                      </div>
                      <h5 class="text-lg font-semibold text-secondary-900 mb-2">Início da Jornada</h5>
                      <p class="text-secondary-600 leading-relaxed">
                        Iniciamos nossas atividades com o objetivo de oferecer 
                        abrigo e cuidados básicos para pessoas em situação de rua.
                      </p>
                     </div>
                   </div>
                 </div>

                 <div class="relative flex items-center md:flex-row-reverse">
                   <div class="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-success-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                     10
                   </div>
                   <div class="ml-6 md:ml-0 md:w-1/2 md:pl-8">
                     <div class="bg-white rounded-xl shadow-lg border border-secondary-100 p-6 hover:shadow-xl transition-shadow duration-300">
                       <div class="flex items-center mb-3">
                         <span class="text-2xl font-bold text-success-600 mr-3">2010</span>
                         <span class="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium">Expansão</span>
                       </div>
                       <h5 class="text-lg font-semibold text-secondary-900 mb-2">Expansão dos Serviços</h5>
                       <p class="text-secondary-600 leading-relaxed">
                         Ampliamos nossos serviços incluindo assistência médica, 
                         psicológica e programas de reintegração social.
                       </p>
                     </div>
                   </div>
                 </div>

                 <div class="relative flex items-center">
                   <div class="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-info-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                     18
                   </div>
                   <div class="ml-6 md:ml-0 md:w-1/2 md:pr-8">
                     <div class="bg-white rounded-xl shadow-lg border border-secondary-100 p-6 hover:shadow-xl transition-shadow duration-300">
                       <div class="flex items-center mb-3">
                         <span class="text-2xl font-bold text-info-600 mr-3">2018</span>
                         <span class="px-3 py-1 bg-info-100 text-info-700 rounded-full text-sm font-medium">Modernização</span>
                       </div>
                       <h5 class="text-lg font-semibold text-secondary-900 mb-2">Era Digital</h5>
                       <p class="text-secondary-600 leading-relaxed">
                         Implementamos sistemas digitais para melhor gestão 
                         das doações e transparência nas atividades.
                       </p>
                     </div>
                   </div>
                 </div>

                 <div class="relative flex items-center md:flex-row-reverse">
                   <div class="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-warning-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                     24
                   </div>
                   <div class="ml-6 md:ml-0 md:w-1/2 md:pl-8">
                     <div class="bg-white rounded-xl shadow-lg border border-secondary-100 p-6 hover:shadow-xl transition-shadow duration-300">
                       <div class="flex items-center mb-3">
                         <span class="text-2xl font-bold text-warning-600 mr-3">2024</span>
                         <span class="px-3 py-1 bg-warning-100 text-warning-700 rounded-full text-sm font-medium">Presente</span>
                       </div>
                       <h5 class="text-lg font-semibold text-secondary-900 mb-2">Impacto Atual</h5>
                       <p class="text-secondary-600 leading-relaxed">
                         Hoje atendemos mais de 200 pessoas mensalmente, 
                         com uma equipe de 50 voluntários dedicados.
                       </p>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Missão, Visão e Valores -->
      <section class="py-20 bg-gradient-to-br from-secondary-50 to-secondary-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Missão, Visão e Valores</h2>
            <p class="text-lg text-secondary-600 max-w-3xl mx-auto">
              Os pilares que guiam nosso trabalho e definem nosso compromisso com a transformação social
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="group">
              <div class="bg-white rounded-2xl shadow-lg border border-secondary-100 p-8 text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div class="relative mb-6">
                  <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-bullseye text-3xl text-white"></i>
                  </div>
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full animate-pulse"></div>
                </div>
                <h4 class="text-2xl font-bold text-primary-600 mb-4">Missão</h4>
                <p class="text-secondary-600 leading-relaxed">
                  Proporcionar acolhimento, cuidado e oportunidades de 
                  reintegração social para pessoas em situação de vulnerabilidade, 
                  promovendo dignidade e cidadania.
                </p>
              </div>
            </div>

            <div class="group">
              <div class="bg-white rounded-2xl shadow-lg border border-secondary-100 p-8 text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div class="relative mb-6">
                  <div class="w-20 h-20 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-eye text-3xl text-white"></i>
                  </div>
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full animate-pulse delay-300"></div>
                </div>
                <h4 class="text-2xl font-bold text-success-600 mb-4">Visão</h4>
                <p class="text-secondary-600 leading-relaxed">
                  Ser referência em assistência social, contribuindo para 
                  uma sociedade mais justa e solidária, onde todos tenham 
                  acesso aos direitos básicos.
                </p>
              </div>
            </div>

            <div class="group">
              <div class="bg-white rounded-2xl shadow-lg border border-secondary-100 p-8 text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div class="relative mb-6">
                  <div class="w-20 h-20 bg-gradient-to-br from-info-500 to-info-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-heart text-3xl text-white"></i>
                  </div>
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full animate-pulse delay-500"></div>
                </div>
                <h4 class="text-2xl font-bold text-info-600 mb-4">Valores</h4>
                <div class="space-y-3 text-left">
                  <div class="flex items-center">
                    <div class="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-success-600 text-sm"></i>
                    </div>
                    <span class="text-secondary-700">Respeito à dignidade humana</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-success-600 text-sm"></i>
                    </div>
                    <span class="text-secondary-700">Transparência e ética</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-success-600 text-sm"></i>
                    </div>
                    <span class="text-secondary-700">Solidariedade e compaixão</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-success-600 text-sm"></i>
                    </div>
                    <span class="text-secondary-700">Compromisso social</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-success-600 text-sm"></i>
                    </div>
                    <span class="text-secondary-700">Inclusão e diversidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Equipe -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Nossa Equipe</h2>
            <p class="text-lg text-secondary-600 max-w-3xl mx-auto">
              Profissionais dedicados que fazem a diferença na vida de quem mais precisa
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="group">
              <div class="bg-white rounded-2xl shadow-lg border border-secondary-100 p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div class="relative mb-6">
                  <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-user-circle text-4xl text-white"></i>
                  </div>
                  <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                    Liderança
                  </div>
                </div>
                <h5 class="text-xl font-bold text-secondary-900 mb-2">Maria Silva</h5>
                <p class="text-primary-600 font-medium mb-3">Diretora Geral</p>
                <p class="text-sm text-secondary-600 leading-relaxed">
                  Assistente Social com 15 anos de experiência 
                  em projetos sociais.
                </p>
              </div>
            </div>

            <div class="group">
              <div class="bg-white rounded-2xl shadow-lg border border-secondary-100 p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div class="relative mb-6">
                  <div class="w-24 h-24 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-user-circle text-4xl text-white"></i>
                  </div>
                  <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-success-100 text-success-700 rounded-full text-xs font-medium">
                    Saúde
                  </div>
                </div>
                <h5 class="text-xl font-bold text-secondary-900 mb-2">Dr. João Santos</h5>
                <p class="text-success-600 font-medium mb-3">Coordenador Médico</p>
                <p class="text-sm text-secondary-600 leading-relaxed">
                  Médico voluntário especializado em 
                  medicina social e comunitária.
                </p>
              </div>
            </div>

            <div class="group">
              <div class="bg-white rounded-2xl shadow-lg border border-secondary-100 p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div class="relative mb-6">
                  <div class="w-24 h-24 bg-gradient-to-br from-info-500 to-info-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-user-circle text-4xl text-white"></i>
                  </div>
                  <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-info-100 text-info-700 rounded-full text-xs font-medium">
                    Psicologia
                  </div>
                </div>
                <h5 class="text-xl font-bold text-secondary-900 mb-2">Ana Costa</h5>
                <p class="text-info-600 font-medium mb-3">Psicóloga</p>
                <p class="text-sm text-secondary-600 leading-relaxed">
                  Especialista em atendimento a populações 
                  em situação de vulnerabilidade.
                </p>
              </div>
            </div>

            <div class="group">
              <div class="bg-white rounded-2xl shadow-lg border border-secondary-100 p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div class="relative mb-6">
                  <div class="w-24 h-24 bg-gradient-to-br from-warning-500 to-warning-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-user-circle text-4xl text-white"></i>
                  </div>
                  <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-warning-100 text-warning-700 rounded-full text-xs font-medium">
                    Voluntários
                  </div>
                </div>
                <h5 class="text-xl font-bold text-secondary-900 mb-2">Carlos Oliveira</h5>
                <p class="text-warning-600 font-medium mb-3">Coordenador de Voluntários</p>
                <p class="text-sm text-secondary-600 leading-relaxed">
                  Responsável pela organização e 
                  treinamento dos voluntários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-20 left-20 w-40 h-40 bg-white rounded-full animate-pulse"></div>
          <div class="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full animate-pulse delay-1000"></div>
          <div class="absolute top-1/3 right-1/4 w-20 h-20 bg-white rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Faça Parte da Nossa <span class="text-accent-400">História</span>
            </h2>
            <p class="text-xl text-primary-100 leading-relaxed mb-12 max-w-3xl mx-auto">
              Junte-se a nós nesta missão de transformar vidas e construir 
              uma sociedade mais justa e solidária. Cada contribuição faz a diferença.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a routerLink="/nova-doacao" 
                 class="group bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
                <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-200 transition-colors duration-300">
                  <i class="fas fa-hand-holding-heart text-primary-600"></i>
                </div>
                Fazer Doação
              </a>
              
              <a routerLink="/contato" 
                 class="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-700 hover:scale-105 transition-all duration-300 flex items-center">
                <div class="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-100 transition-colors duration-300">
                  <i class="fas fa-users group-hover:text-primary-600"></i>
                </div>
                Seja Voluntário
              </a>
            </div>
            
            <!-- Statistics -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-500 border-opacity-30">
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-accent-400 mb-2">200+</div>
                <div class="text-primary-200">Pessoas atendidas mensalmente</div>
              </div>
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-accent-400 mb-2">50+</div>
                <div class="text-primary-200">Voluntários dedicados</div>
              </div>
              <div class="text-center">
                <div class="text-3xl md:text-4xl font-bold text-accent-400 mb-2">20+</div>
                <div class="text-primary-200">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}