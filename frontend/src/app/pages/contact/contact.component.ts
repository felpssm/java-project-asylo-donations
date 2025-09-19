import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="w-full">
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <!-- Elementos decorativos -->
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-10 right-10 w-24 h-24 bg-accent-400/20 rounded-full blur-lg animate-bounce"></div>
        <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-md animate-ping"></div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div class="mb-6">
              <span class="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-4">
                <i class="fas fa-headset mr-2"></i>
                Atendimento Personalizado
              </span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Entre em <span class="text-accent-300">Contato</span>
            </h1>
            <p class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Estamos aqui para ajudar. Entre em contato conosco para mais informações, 
              dúvidas ou para se tornar um voluntário.
            </p>
            
            <!-- Ícone decorativo -->
            <div class="flex justify-center">
              <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                <i class="fas fa-envelope text-2xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Informações de Contato -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Informações de <span class="text-primary-600">Contato</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha a melhor forma de entrar em contato conosco
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-6"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Endereço -->
            <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div class="relative mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-map-marker-alt text-3xl text-white"></i>
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Endereço</h3>
              <div class="text-gray-600 space-y-2 mb-6">
                <p class="font-medium">Rua da Solidariedade, 123</p>
                <p>Centro - Cidade/UF</p>
                <p>CEP: 12345-678</p>
              </div>
              <a href="https://maps.google.com" target="_blank" 
                 class="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                <i class="fas fa-directions mr-2"></i>Ver no Mapa
              </a>
            </div>

            <!-- Telefone -->
            <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div class="relative mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-phone text-3xl text-white"></i>
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Telefone</h3>
              <div class="text-gray-600 space-y-2 mb-6">
                <p><span class="font-semibold text-gray-800">Fixo:</span> (11) 1234-5678</p>
                <p><span class="font-semibold text-gray-800">WhatsApp:</span> (11) 9 8765-4321</p>
                <p><span class="font-semibold text-gray-800">Emergência:</span> (11) 9 9999-9999</p>
              </div>
              <a href="tel:+5511123456789" 
                 class="inline-flex items-center px-6 py-3 border-2 border-success-600 text-success-600 font-semibold rounded-xl hover:bg-success-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                <i class="fas fa-phone mr-2"></i>Ligar Agora
              </a>
            </div>

            <!-- E-mail -->
            <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center border border-gray-100">
              <div class="relative mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-info-500 to-info-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-envelope text-3xl text-white"></i>
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">E-mail</h3>
              <div class="text-gray-600 space-y-2 mb-6">
                <p><span class="font-semibold text-gray-800">Geral:</span> contato&#64;asilo.org.br</p>
                <p><span class="font-semibold text-gray-800">Doações:</span> doacoes&#64;asilo.org.br</p>
                <p><span class="font-semibold text-gray-800">Voluntários:</span> voluntarios&#64;asilo.org.br</p>
              </div>
              <a href="mailto:contato@asilo.org.br" 
                 class="inline-flex items-center px-6 py-3 border-2 border-info-600 text-info-600 font-semibold rounded-xl hover:bg-info-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                <i class="fas fa-envelope mr-2"></i>Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Formulário de Contato -->
      <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Envie uma <span class="text-primary-600">Mensagem</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Preencha o formulário abaixo e entraremos em contato o mais breve possível
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-6"></div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Nome -->
                <div class="space-y-2">
                  <label for="name" class="block text-sm font-semibold text-gray-700">
                    Nome Completo <span class="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    formControlName="name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    [class.border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                    [class.ring-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                    placeholder="Digite seu nome completo"
                  >
                  <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" 
                       class="text-red-500 text-sm mt-1 flex items-center">
                    <i class="fas fa-exclamation-circle mr-1"></i>
                    Nome é obrigatório
                  </div>
                </div>

                <!-- E-mail -->
                <div class="space-y-2">
                  <label for="email" class="block text-sm font-semibold text-gray-700">
                    E-mail <span class="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    formControlName="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                    [class.ring-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                    placeholder="seu@email.com"
                  >
                  <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" 
                       class="text-red-500 text-sm mt-1 flex items-center">
                    <i class="fas fa-exclamation-circle mr-1"></i>
                    <span *ngIf="contactForm.get('email')?.errors?.['required']">E-mail é obrigatório</span>
                    <span *ngIf="contactForm.get('email')?.errors?.['email']">E-mail inválido</span>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Telefone -->
                <div class="space-y-2">
                  <label for="phone" class="block text-sm font-semibold text-gray-700">
                    Telefone
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    formControlName="phone"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="(11) 99999-9999"
                  >
                </div>

                <!-- Assunto -->
                <div class="space-y-2">
                  <label for="subject" class="block text-sm font-semibold text-gray-700">
                    Assunto <span class="text-red-500">*</span>
                  </label>
                  <select 
                    id="subject"
                    formControlName="subject"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    [class.border-red-500]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched"
                    [class.ring-red-500]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="informacoes">Informações Gerais</option>
                    <option value="doacoes">Doações</option>
                    <option value="voluntario">Ser Voluntário</option>
                    <option value="parcerias">Parcerias</option>
                    <option value="outros">Outros</option>
                  </select>
                  <div *ngIf="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched" 
                       class="text-red-500 text-sm mt-1 flex items-center">
                    <i class="fas fa-exclamation-circle mr-1"></i>
                    Assunto é obrigatório
                  </div>
                </div>
              </div>

              <!-- Mensagem -->
              <div class="space-y-2">
                <label for="message" class="block text-sm font-semibold text-gray-700">
                  Mensagem <span class="text-red-500">*</span>
                </label>
                <textarea 
                  id="message"
                  rows="5"
                  formControlName="message"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                  [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                  [class.ring-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
                <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" 
                     class="text-red-500 text-sm mt-1 flex items-center">
                  <i class="fas fa-exclamation-circle mr-1"></i>
                  Mensagem é obrigatória
                </div>
              </div>

              <!-- Política de Privacidade -->
              <div class="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  id="privacy"
                  formControlName="privacy"
                  class="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  [class.border-red-500]="contactForm.get('privacy')?.invalid && contactForm.get('privacy')?.touched"
                >
                <div class="flex-1">
                  <label for="privacy" class="text-sm text-gray-700">
                    Concordo com a <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">Política de Privacidade</a> <span class="text-red-500">*</span>
                  </label>
                  <div *ngIf="contactForm.get('privacy')?.invalid && contactForm.get('privacy')?.touched" 
                       class="text-red-500 text-sm mt-1 flex items-center">
                    <i class="fas fa-exclamation-circle mr-1"></i>
                    É necessário concordar com a política de privacidade
                  </div>
                </div>
              </div>

              <!-- Botão de Envio -->
              <div class="pt-4">
                <button 
                  type="submit" 
                  [disabled]="contactForm.invalid || isSubmitting"
                  class="group relative w-full bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white font-bold py-5 px-8 rounded-2xl hover:from-primary-700 hover:via-primary-800 hover:to-primary-900 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                >
                  <!-- Efeito de ripple -->
                  <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <!-- Efeito de shine -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <!-- Conteúdo do botão -->
                  <div class="relative z-10">
                    <span *ngIf="isSubmitting" class="inline-flex items-center justify-center">
                      <!-- Loading animation mais sofisticada -->
                      <div class="relative mr-3">
                        <!-- Anel externo -->
                        <div class="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <!-- Anel interno -->
                        <div class="absolute inset-1 w-4 h-4 border-2 border-white/50 border-b-white rounded-full animate-spin animate-reverse"></div>
                        <!-- Ponto central -->
                        <div class="absolute inset-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                      <span class="text-lg">Enviando mensagem...</span>
                    </span>
                    
                    <span *ngIf="!isSubmitting" class="inline-flex items-center justify-center">
                      <i class="fas fa-paper-plane mr-3 text-lg group-hover:rotate-12 group-hover:translate-x-1 transition-transform duration-300"></i>
                      <span class="text-lg">Enviar Mensagem</span>
                      <div class="ml-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <i class="fas fa-arrow-right text-sm group-hover:translate-x-0.5 transition-transform duration-300"></i>
                      </div>
                    </span>
                  </div>
                  
                  <!-- Partículas decorativas -->
                  <div class="absolute top-2 left-4 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
                  <div class="absolute bottom-3 right-6 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse"></div>
                  <div class="absolute top-4 right-8 w-0.5 h-0.5 bg-white/50 rounded-full animate-bounce"></div>
                </button>
              </div>
            </form>

            <!-- Mensagem de Sucesso -->
            <div *ngIf="showSuccessMessage" 
                 class="mt-8 p-6 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border-2 border-green-200 rounded-2xl shadow-lg transform animate-bounce-in">
              <div class="relative overflow-hidden">
                <!-- Efeito de brilho de fundo -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
                
                <div class="relative flex items-center text-green-800">
                  <!-- Ícone animado -->
                  <div class="relative mr-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
                      <i class="fas fa-check text-white text-xl animate-bounce"></i>
                    </div>
                    <!-- Ondas de sucesso -->
                    <div class="absolute inset-0 border-2 border-green-400 rounded-full animate-ping opacity-75"></div>
                    <div class="absolute inset-0 border border-green-300 rounded-full animate-ping animation-delay-200 opacity-50"></div>
                  </div>
                  
                  <div class="flex-1">
                    <h4 class="font-bold text-lg text-green-900 mb-1">Sucesso!</h4>
                    <p class="font-medium text-green-700">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                  </div>
                  
                  <!-- Partículas de celebração -->
                  <div class="absolute top-1 right-2 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                  <div class="absolute bottom-2 right-6 w-1 h-1 bg-emerald-500 rounded-full animate-ping"></div>
                  <div class="absolute top-3 right-8 w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <!-- Mensagem de Erro -->
            <div *ngIf="showErrorMessage" 
                 class="mt-8 p-6 bg-gradient-to-r from-red-50 via-rose-50 to-red-50 border-2 border-red-200 rounded-2xl shadow-lg transform animate-shake">
              <div class="relative overflow-hidden">
                <!-- Efeito de brilho de fundo -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-red-100/50 to-transparent transform -skew-x-12 animate-shimmer-slow"></div>
                
                <div class="relative flex items-center text-red-800">
                  <!-- Ícone animado -->
                  <div class="relative mr-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center animate-pulse">
                      <i class="fas fa-exclamation-triangle text-white text-xl animate-bounce"></i>
                    </div>
                    <!-- Ondas de erro -->
                    <div class="absolute inset-0 border-2 border-red-400 rounded-full animate-ping opacity-75"></div>
                    <div class="absolute inset-0 border border-red-300 rounded-full animate-ping animation-delay-300 opacity-50"></div>
                  </div>
                  
                  <div class="flex-1">
                    <h4 class="font-bold text-lg text-red-900 mb-1">Ops! Algo deu errado</h4>
                    <p class="font-medium text-red-700 mb-3">Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.</p>
                    
                    <!-- Botão de tentar novamente -->
                    <button 
                      (click)="showErrorMessage = false"
                      class="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-rose-700 text-white text-sm font-semibold rounded-lg hover:from-red-700 hover:to-rose-800 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <!-- Efeito de ripple -->
                      <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                      
                      <i class="fas fa-redo mr-2 group-hover:rotate-180 transition-transform duration-300"></i>
                      <span class="relative z-10">Tentar Novamente</span>
                    </button>
                  </div>
                  
                  <!-- Partículas de alerta -->
                  <div class="absolute top-1 right-2 w-2 h-2 bg-red-400 rounded-full animate-bounce animation-delay-100"></div>
                  <div class="absolute bottom-2 right-6 w-1 h-1 bg-rose-500 rounded-full animate-ping animation-delay-200"></div>
                  <div class="absolute top-3 right-8 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse animation-delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Horários de Atendimento e Redes Sociais -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Horários de Atendimento -->
            <div>
              <div class="text-center lg:text-left mb-8">
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Horários de <span class="text-primary-600">Atendimento</span>
                </h3>
                <p class="text-lg text-gray-600">
                  Confira nossos horários de funcionamento
                </p>
                <div class="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto lg:mx-0 mt-4"></div>
              </div>
              
              <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 border border-gray-100">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <!-- Acolhimento 24h -->
                  <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div class="flex items-center mb-4">
                      <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-3">
                        <i class="fas fa-clock text-white text-lg"></i>
                      </div>
                      <h6 class="text-lg font-bold text-primary-600">Acolhimento</h6>
                    </div>
                    <div class="text-gray-700 space-y-1">
                      <p class="font-semibold">24 horas por dia</p>
                      <p class="text-sm text-gray-600">7 dias por semana</p>
                    </div>
                  </div>
                  
                  <!-- Atendimento Geral -->
                  <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div class="flex items-center mb-4">
                      <div class="w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center mr-3">
                        <i class="fas fa-business-time text-white text-lg"></i>
                      </div>
                      <h6 class="text-lg font-bold text-success-600">Atendimento Geral</h6>
                    </div>
                    <div class="text-gray-700 space-y-1">
                      <p class="font-semibold">Segunda a Sexta</p>
                      <p class="text-sm text-gray-600">8h às 18h</p>
                    </div>
                  </div>
                  
                  <!-- Finais de Semana -->
                  <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div class="flex items-center mb-4">
                      <div class="w-12 h-12 bg-gradient-to-br from-info-500 to-info-600 rounded-full flex items-center justify-center mr-3">
                        <i class="fas fa-calendar-weekend text-white text-lg"></i>
                      </div>
                      <h6 class="text-lg font-bold text-info-600">Finais de Semana</h6>
                    </div>
                    <div class="text-gray-700 space-y-1">
                      <p class="font-semibold">Sábado: 8h às 14h</p>
                      <p class="text-sm text-gray-600">Domingo: Emergências</p>
                    </div>
                  </div>
                  
                  <!-- Feriados -->
                  <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div class="flex items-center mb-4">
                      <div class="w-12 h-12 bg-gradient-to-br from-warning-500 to-warning-600 rounded-full flex items-center justify-center mr-3">
                        <i class="fas fa-calendar-day text-white text-lg"></i>
                      </div>
                      <h6 class="text-lg font-bold text-warning-600">Feriados</h6>
                    </div>
                    <div class="text-gray-700 space-y-1">
                      <p class="font-semibold">Apenas emergências</p>
                      <p class="text-sm text-gray-600">Plantão 24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Redes Sociais -->
            <div>
              <div class="text-center lg:text-left mb-8">
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Redes <span class="text-primary-600">Sociais</span>
                </h3>
                <p class="text-lg text-gray-600">
                  Siga-nos nas redes sociais para acompanhar nosso trabalho
                </p>
                <div class="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto lg:mx-0 mt-4"></div>
              </div>
              
              <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 border border-gray-100">
                <p class="text-gray-700 mb-6 text-center lg:text-left">
                  Conecte-se conosco e fique por dentro de todas as novidades, eventos e histórias inspiradoras.
                </p>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Facebook -->
                  <a href="#" class="group flex items-center justify-center lg:justify-start p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <i class="fab fa-facebook-f text-white text-lg"></i>
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">Facebook</p>
                      <p class="text-sm text-gray-600">Acompanhe nosso dia a dia</p>
                    </div>
                  </a>
                  
                  <!-- Instagram -->
                  <a href="#" class="group flex items-center justify-center lg:justify-start p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <i class="fab fa-instagram text-white text-lg"></i>
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">Instagram</p>
                      <p class="text-sm text-gray-600">Fotos e momentos especiais</p>
                    </div>
                  </a>
                  
                  <!-- WhatsApp -->
                  <a href="#" class="group flex items-center justify-center lg:justify-start p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <i class="fab fa-whatsapp text-white text-lg"></i>
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">WhatsApp</p>
                      <p class="text-sm text-gray-600">Contato direto e rápido</p>
                    </div>
                  </a>
                  
                  <!-- YouTube -->
                  <a href="#" class="group flex items-center justify-center lg:justify-start p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <i class="fab fa-youtube text-white text-lg"></i>
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">YouTube</p>
                      <p class="text-sm text-gray-600">Vídeos e documentários</p>
                    </div>
                  </a>
                </div>
                
                <!-- Call to Action -->
                <div class="mt-8 text-center lg:text-left">
                  <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <i class="fas fa-heart mr-2"></i>
                    Seja parte da nossa comunidade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.showSuccessMessage = false;
      this.showErrorMessage = false;

      // Simular envio do formulário
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        
        // Esconder mensagem de sucesso após 5 segundos
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    } else {
      // Marcar todos os campos como touched para mostrar erros
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}