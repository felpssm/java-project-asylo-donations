import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
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
                Nossos <span class="text-accent-400">Serviços</span>
              </h1>
              <p class="text-xl text-primary-100 leading-relaxed">
                Oferecemos uma ampla gama de serviços para atender às necessidades 
                básicas e promover a reintegração social de pessoas em vulnerabilidade.
              </p>
              <div class="flex items-center space-x-4 text-primary-200">
                <div class="flex items-center">
                  <i class="fas fa-users mr-2"></i>
                  <span>Atendimento 24h</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-heart mr-2"></i>
                  <span>Gratuito</span>
                </div>
              </div>
            </div>
            <div class="text-center lg:text-right">
              <div class="relative inline-block">
                <i class="fas fa-hands-helping text-8xl md:text-9xl text-primary-300 opacity-80"></i>
                <div class="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Serviços Principais -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Serviços <span class="text-primary-600">Principais</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos principais serviços para atender às necessidades básicas
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-6"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Acolhimento Institucional -->
            <div class="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 overflow-hidden">
              <!-- Efeito de brilho de fundo -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div class="relative p-8 text-center">
                <div class="mb-6 relative">
                  <div class="w-24 h-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <i class="fas fa-home text-4xl text-white group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                  <!-- Ondas de animação -->
                  <div class="absolute inset-0 border-2 border-primary-400 rounded-full opacity-0 group-hover:opacity-75 group-hover:scale-125 transition-all duration-500"></div>
                  <div class="absolute inset-0 border border-primary-300 rounded-full opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-700 animation-delay-200"></div>
                  <!-- Partículas decorativas -->
                  <div class="absolute -top-2 -right-2 w-3 h-3 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                  <div class="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                </div>
                <h5 class="text-xl font-bold text-gray-900 mb-4">Acolhimento Institucional</h5>
                <p class="text-gray-600 mb-6">
                  Oferecemos abrigo temporário com dormitórios seguros, 
                  alimentação balanceada e ambiente acolhedor para pessoas 
                  em situação de rua ou vulnerabilidade social.
                </p>
                <div class="space-y-3 text-left">
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Dormitórios seguros</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Refeições diárias</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Higiene pessoal</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Guarda de pertences</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Assistência Médica -->
            <div class="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 overflow-hidden">
              <!-- Efeito de brilho de fundo -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-success-50/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div class="relative p-8 text-center">
                <div class="mb-6 relative">
                  <div class="w-24 h-24 bg-gradient-to-br from-success-500 via-success-600 to-success-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <i class="fas fa-user-md text-4xl text-white group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                  <!-- Ondas de animação -->
                  <div class="absolute inset-0 border-2 border-success-400 rounded-full opacity-0 group-hover:opacity-75 group-hover:scale-125 transition-all duration-500"></div>
                  <div class="absolute inset-0 border border-success-300 rounded-full opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-700 animation-delay-200"></div>
                  <!-- Partículas decorativas -->
                  <div class="absolute -top-2 -right-2 w-3 h-3 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                  <div class="absolute -bottom-1 -left-1 w-2 h-2 bg-success-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                </div>
                <h5 class="text-xl font-bold text-gray-900 mb-4">Assistência Médica</h5>
                <p class="text-gray-600 mb-6">
                  Atendimento médico básico com profissionais voluntários, 
                  primeiros socorros e encaminhamentos para especialistas 
                  quando necessário.
                </p>
                <div class="space-y-3 text-left">
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Consultas médicas</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Primeiros socorros</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Medicamentos básicos</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Encaminhamentos</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Apoio Psicológico -->
            <div class="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 overflow-hidden">
              <!-- Efeito de brilho de fundo -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-info-50/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div class="relative p-8 text-center">
                <div class="mb-6 relative">
                  <div class="w-24 h-24 bg-gradient-to-br from-info-500 via-info-600 to-info-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <i class="fas fa-brain text-4xl text-white group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                  <!-- Ondas de animação -->
                  <div class="absolute inset-0 border-2 border-info-400 rounded-full opacity-0 group-hover:opacity-75 group-hover:scale-125 transition-all duration-500"></div>
                  <div class="absolute inset-0 border border-info-300 rounded-full opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-700 animation-delay-200"></div>
                  <!-- Partículas decorativas -->
                  <div class="absolute -top-2 -right-2 w-3 h-3 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                  <div class="absolute -bottom-1 -left-1 w-2 h-2 bg-info-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                </div>
                <h5 class="text-xl font-bold text-gray-900 mb-4">Apoio Psicológico</h5>
                <p class="text-gray-600 mb-6">
                  Atendimento psicológico individual e em grupo para 
                  auxiliar no processo de recuperação emocional e 
                  fortalecimento da autoestima.
                </p>
                <div class="space-y-3 text-left">
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Atendimento individual</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Terapia em grupo</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Apoio emocional</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Orientação familiar</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Capacitação Profissional -->
            <div class="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 overflow-hidden">
              <!-- Efeito de brilho de fundo -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-warning-50/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div class="relative p-8 text-center">
                <div class="mb-6 relative">
                  <div class="w-24 h-24 bg-gradient-to-br from-warning-500 via-warning-600 to-warning-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <i class="fas fa-graduation-cap text-4xl text-white group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                  <!-- Ondas de animação -->
                  <div class="absolute inset-0 border-2 border-warning-400 rounded-full opacity-0 group-hover:opacity-75 group-hover:scale-125 transition-all duration-500"></div>
                  <div class="absolute inset-0 border border-warning-300 rounded-full opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-700 animation-delay-200"></div>
                  <!-- Partículas decorativas -->
                  <div class="absolute -top-2 -right-2 w-3 h-3 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                  <div class="absolute -bottom-1 -left-1 w-2 h-2 bg-warning-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                </div>
                <h5 class="text-xl font-bold text-gray-900 mb-4">Capacitação Profissional</h5>
                <p class="text-gray-600 mb-6">
                  Cursos e oficinas para desenvolvimento de habilidades 
                  profissionais, visando a reintegração no mercado de trabalho 
                  e autonomia financeira.
                </p>
                <div class="space-y-3 text-left">
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Cursos profissionalizantes</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Oficinas de artesanato</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Orientação para emprego</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Empreendedorismo</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Assistência Social -->
            <div class="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 overflow-hidden">
              <!-- Efeito de brilho de fundo -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-danger-50/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div class="relative p-8 text-center">
                <div class="mb-6 relative">
                  <div class="w-24 h-24 bg-gradient-to-br from-danger-500 via-danger-600 to-danger-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <i class="fas fa-hands-helping text-4xl text-white group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                  <!-- Ondas de animação -->
                  <div class="absolute inset-0 border-2 border-danger-400 rounded-full opacity-0 group-hover:opacity-75 group-hover:scale-125 transition-all duration-500"></div>
                  <div class="absolute inset-0 border border-danger-300 rounded-full opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-700 animation-delay-200"></div>
                  <!-- Partículas decorativas -->
                  <div class="absolute -top-2 -right-2 w-3 h-3 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                  <div class="absolute -bottom-1 -left-1 w-2 h-2 bg-danger-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                </div>
                <h5 class="text-xl font-bold text-gray-900 mb-4">Assistência Social</h5>
                <p class="text-gray-600 mb-6">
                  Orientação e auxílio para acesso a documentos, 
                  benefícios sociais e programas governamentais, 
                  promovendo o exercício da cidadania.
                </p>
                <div class="space-y-3 text-left">
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Emissão de documentos</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Cadastro em programas sociais</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Orientação jurídica</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Mediação familiar</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Atividades Recreativas -->
            <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div class="p-8 text-center">
                <div class="mb-6 relative">
                  <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-gamepad text-3xl text-white"></i>
                  </div>
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h5 class="text-xl font-bold text-gray-900 mb-4">Atividades Recreativas</h5>
                <p class="text-gray-600 mb-6">
                  Atividades de lazer, esporte e cultura para promover 
                  a socialização, bem-estar e desenvolvimento pessoal 
                  dos assistidos.
                </p>
                <div class="space-y-3 text-left">
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Atividades esportivas</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Oficinas culturais</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Eventos comunitários</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i class="fas fa-check text-white text-xs"></i>
                    </div>
                    <span class="text-gray-700">Passeios educativos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Horários de Funcionamento -->
      <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Horários de <span class="text-primary-600">Funcionamento</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos serviços estão disponíveis para atender você quando precisar
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-6"></div>
          </div>
          
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <!-- Acolhimento 24h -->
                <div class="p-8 lg:p-10 bg-gradient-to-br from-primary-50 to-primary-100">
                  <div class="flex items-center mb-6">
                    <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                      <i class="fas fa-clock text-white text-xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-primary-800">Acolhimento 24h</h3>
                  </div>
                  
                  <p class="text-gray-700 mb-6 leading-relaxed">
                    Nosso abrigo funciona 24 horas por dia, 7 dias por semana, 
                    garantindo acolhimento a qualquer momento.
                  </p>
                  
                  <div class="space-y-4">
                    <h4 class="text-lg font-semibold text-success-700 flex items-center">
                      <i class="fas fa-utensils mr-2"></i>
                      Refeições
                    </h4>
                    <div class="space-y-3">
                      <div class="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                        <span class="font-medium text-gray-700">Café da manhã</span>
                        <span class="text-warning-600 font-semibold">7h às 9h</span>
                      </div>
                      <div class="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                        <span class="font-medium text-gray-700">Almoço</span>
                        <span class="text-warning-600 font-semibold">11h30 às 13h30</span>
                      </div>
                      <div class="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                        <span class="font-medium text-gray-700">Jantar</span>
                        <span class="text-warning-600 font-semibold">18h às 20h</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Atendimentos Especializados -->
                <div class="p-8 lg:p-10">
                  <div class="flex items-center mb-6">
                    <div class="w-12 h-12 bg-info-600 rounded-full flex items-center justify-center mr-4">
                      <i class="fas fa-calendar text-white text-xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-info-800">Atendimentos Especializados</h3>
                  </div>
                  
                  <div class="space-y-6">
                    <div class="border-l-4 border-success-500 pl-4">
                      <h4 class="font-semibold text-gray-900 mb-1">Médico</h4>
                      <p class="text-gray-600">Segunda a Sexta: 8h às 17h</p>
                    </div>
                    
                    <div class="border-l-4 border-info-500 pl-4">
                      <h4 class="font-semibold text-gray-900 mb-1">Psicológico</h4>
                      <p class="text-gray-600">Terça e Quinta: 14h às 18h</p>
                    </div>
                    
                    <div class="border-l-4 border-warning-500 pl-4">
                      <h4 class="font-semibold text-gray-900 mb-1">Assistência Social</h4>
                      <p class="text-gray-600">Segunda a Sexta: 8h às 16h</p>
                    </div>
                    
                    <div class="border-l-4 border-purple-500 pl-4">
                      <h4 class="font-semibold text-gray-900 mb-1">Capacitação</h4>
                      <p class="text-gray-600">Quarta e Sexta: 14h às 17h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Como Acessar -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Como Acessar Nossos <span class="text-primary-600">Serviços</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nossos serviços são gratuitos e destinados a pessoas em situação 
              de vulnerabilidade social. Não é necessário agendamento para acolhimento.
            </p>
            <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-6"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <!-- Localização -->
            <div class="text-center group">
              <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-map-marker-alt text-3xl text-white"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Localização</h3>
              <div class="text-gray-600 space-y-1">
                <p>Rua da Solidariedade, 123</p>
                <p>Centro - Cidade/UF</p>
                <p>CEP: 12345-678</p>
              </div>
            </div>
            
            <!-- Contato -->
            <div class="text-center group">
              <div class="w-20 h-20 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-phone text-3xl text-white"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Contato</h3>
              <div class="text-gray-600 space-y-1">
                <p>Telefone: (11) 1234-5678</p>
                <p>WhatsApp: (11) 9 8765-4321</p>
                <p>Email: contato&#64;asilo.org.br</p>
              </div>
            </div>
            
            <!-- Transporte -->
            <div class="text-center group">
              <div class="w-20 h-20 bg-gradient-to-br from-info-500 to-info-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-bus text-3xl text-white"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Transporte</h3>
              <div class="text-gray-600 space-y-1">
                <p>Ônibus: Linhas 101, 205, 308</p>
                <p>Metrô: Estação Central (500m)</p>
                <p>Estacionamento disponível</p>
              </div>
            </div>
          </div>
          
          <!-- Call to Action -->
          <div class="text-center">
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a routerLink="/contato" 
                 class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <i class="fas fa-envelope mr-3"></i>
                Entre em Contato
              </a>
              <a routerLink="/nova-doacao" 
                 class="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                <i class="fas fa-hand-holding-heart mr-3"></i>
                Fazer Doação
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {}