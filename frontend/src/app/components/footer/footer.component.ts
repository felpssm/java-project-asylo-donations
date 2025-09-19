import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-secondary-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Publicações mais populares -->
          <div class="space-y-4">
            <h5 class="text-xl font-bold text-primary-400 flex items-center">
              <i class="fas fa-star mr-2"></i>Publicações Populares
            </h5>
            <div class="space-y-3">
              <a href="#" class="block group hover:text-primary-300 transition-colors duration-200">
                <div class="text-xs text-secondary-400 mb-1">15 Set 2024</div>
                <div class="text-sm group-hover:text-primary-300">Como fazer doações de forma segura</div>
              </a>
              <a href="#" class="block group hover:text-primary-300 transition-colors duration-200">
                <div class="text-xs text-secondary-400 mb-1">10 Set 2024</div>
                <div class="text-sm group-hover:text-primary-300">Relatório de transparência mensal</div>
              </a>
              <a href="#" class="block group hover:text-primary-300 transition-colors duration-200">
                <div class="text-xs text-secondary-400 mb-1">05 Set 2024</div>
                <div class="text-sm group-hover:text-primary-300">Novos projetos em andamento</div>
              </a>
            </div>
          </div>

          <!-- Tags -->
          <div class="space-y-4">
            <h5 class="text-xl font-bold text-primary-400 flex items-center">
              <i class="fas fa-tags mr-2"></i>Tags
            </h5>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-secondary-700 text-secondary-200 rounded-full text-sm hover:bg-primary-600 hover:text-white transition-colors duration-200 cursor-pointer">#doações</span>
              <span class="px-3 py-1 bg-secondary-700 text-secondary-200 rounded-full text-sm hover:bg-primary-600 hover:text-white transition-colors duration-200 cursor-pointer">#caridade</span>
              <span class="px-3 py-1 bg-secondary-700 text-secondary-200 rounded-full text-sm hover:bg-primary-600 hover:text-white transition-colors duration-200 cursor-pointer">#asilo</span>
              <span class="px-3 py-1 bg-secondary-700 text-secondary-200 rounded-full text-sm hover:bg-primary-600 hover:text-white transition-colors duration-200 cursor-pointer">#pelotas</span>
              <span class="px-3 py-1 bg-secondary-700 text-secondary-200 rounded-full text-sm hover:bg-primary-600 hover:text-white transition-colors duration-200 cursor-pointer">#solidariedade</span>
              <span class="px-3 py-1 bg-secondary-700 text-secondary-200 rounded-full text-sm hover:bg-primary-600 hover:text-white transition-colors duration-200 cursor-pointer">#transparência</span>
            </div>
          </div>

          <!-- Um pouco sobre nós -->
          <div class="space-y-4">
            <h5 class="text-xl font-bold text-primary-400 flex items-center">
              <i class="fas fa-info-circle mr-2"></i>Sobre Nós
            </h5>
            <p class="text-secondary-300 leading-relaxed text-sm">
              O Asilo de Mendigos de Pelotas é uma instituição centenária dedicada ao cuidado 
              e acolhimento de pessoas em situação de vulnerabilidade social. 
              Trabalhamos com transparência e dedicação para transformar vidas.
            </p>
            <a routerLink="/sobre" class="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200 text-sm font-medium">
              Saiba mais 
              <i class="fas fa-arrow-right ml-2 text-xs"></i>
            </a>
          </div>

          <!-- Contato -->
          <div class="space-y-4">
            <h5 class="text-xl font-bold text-primary-400 flex items-center">
              <i class="fas fa-envelope mr-2"></i>Contato
            </h5>
            <div class="space-y-3 text-sm">
              <div class="flex items-start">
                <i class="fas fa-map-marker-alt text-primary-400 mr-3 mt-1 flex-shrink-0"></i>
                <div class="text-secondary-300">
                  Rua Exemplo, 123<br>
                  Centro - Pelotas/RS<br>
                  CEP: 96010-000
                </div>
              </div>
              <div class="flex items-center">
                <i class="fas fa-phone text-primary-400 mr-3 flex-shrink-0"></i>
                <a href="tel:+5553999999999" class="text-secondary-300 hover:text-primary-300 transition-colors duration-200">
                  (53) 99999-9999
                </a>
              </div>
              <div class="flex items-center">
                <i class="fas fa-envelope text-primary-400 mr-3 flex-shrink-0"></i>
                <a href="mailto:contato@asilodoacoes.org.br" class="text-secondary-300 hover:text-primary-300 transition-colors duration-200 break-all">
                  contato&#64;asilodoacoes.org.br
                </a>
              </div>
              <div class="flex items-start">
                <i class="fas fa-clock text-primary-400 mr-3 mt-1 flex-shrink-0"></i>
                <div class="text-secondary-300">
                  Seg-Sex: 8h às 17h<br>
                  Sáb: 8h às 12h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Barra de direitos autorais e redes sociais -->
      <div class="border-t border-secondary-800 bg-secondary-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div class="text-center md:text-left">
              <p class="text-secondary-400 text-sm">
                &copy; {{currentYear}} Asilo de Mendigos de Pelotas. Todos os direitos reservados.
              </p>
            </div>
            <div class="flex justify-center md:justify-end space-x-4">
              <a href="#" class="w-10 h-10 bg-secondary-800 hover:bg-primary-600 text-secondary-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110" target="_blank" title="Facebook">
                <i class="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-secondary-800 hover:bg-primary-600 text-secondary-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110" target="_blank" title="Instagram">
                <i class="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-secondary-800 hover:bg-primary-600 text-secondary-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110" target="_blank" title="Twitter">
                <i class="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-secondary-800 hover:bg-primary-600 text-secondary-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110" target="_blank" title="LinkedIn">
                <i class="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-secondary-800 hover:bg-primary-600 text-secondary-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110" target="_blank" title="YouTube">
                <i class="fab fa-youtube text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}