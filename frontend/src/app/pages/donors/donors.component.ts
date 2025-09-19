import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DonorService } from '../../services/donor.service';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-donors',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="container-fluid p-0">
      <!-- Hero Section -->
      <section class="hero-section bg-primary text-white py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <h1 class="display-4 fw-bold mb-4">Nossos Doadores</h1>
              <p class="lead">
                Conheça as pessoas generosas que fazem a diferença em nossa comunidade 
                através de suas doações e apoio contínuo.
              </p>
            </div>
            <div class="col-lg-4 text-end">
              <a routerLink="/nova-doacao" class="btn btn-light btn-lg">
                <i class="fas fa-heart me-2"></i>Fazer Doação
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Estatísticas e Filtros -->
      <section class="py-4 bg-light">
        <div class="container">
          <div class="row">
            <!-- Estatísticas -->
            <div class="col-lg-8 mb-3">
              <div class="row">
                <div class="col-md-3 mb-2">
                  <div class="card border-0 shadow-sm h-100">
                    <div class="card-body text-center p-3">
                      <h5 class="text-primary mb-1">{{totalDonors}}</h5>
                      <small class="text-muted">Total de Doadores</small>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 mb-2">
                  <div class="card border-0 shadow-sm h-100">
                    <div class="card-body text-center p-3">
                      <h5 class="text-success mb-1">{{activeDonors}}</h5>
                      <small class="text-muted">Doadores Ativos</small>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 mb-2">
                  <div class="card border-0 shadow-sm h-100">
                    <div class="card-body text-center p-3">
                      <h5 class="text-info mb-1">{{newThisMonth}}</h5>
                      <small class="text-muted">Novos Este Mês</small>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 mb-2">
                  <div class="card border-0 shadow-sm h-100">
                    <div class="card-body text-center p-3">
                      <h5 class="text-warning mb-1">{{averageDonations}}</h5>
                      <small class="text-muted">Média de Doações</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Filtros e Busca -->
            <div class="col-lg-4">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h6 class="card-title mb-0">Buscar Doadores</h6>
                    <a routerLink="/novo-doador" class="btn btn-primary btn-sm">
                      <i class="fas fa-plus me-1"></i>Novo Doador
                    </a>
                  </div>
                  <div class="mb-3">
                    <input 
                      type="text" 
                      class="form-control" 
                      placeholder="Buscar por nome ou email..."
                      [(ngModel)]="searchTerm"
                      (input)="applyFilters()"
                    >
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <select class="form-select form-select-sm" [(ngModel)]="filterType" (change)="applyFilters()">
                        <option value="">Todos os Tipos</option>
                        <option value="INDIVIDUAL">Pessoa Física</option>
                        <option value="COMPANY">Empresa</option>
                      </select>
                    </div>
                    <div class="col-6">
                      <select class="form-select form-select-sm" [(ngModel)]="sortBy" (change)="applySorting()">
                        <option value="name">Nome</option>
                        <option value="registrationDate">Data de Cadastro</option>
                        <option value="donationCount">Nº de Doações</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Lista de Doadores -->
      <section class="py-5" id="donors-list">
        <div class="container">
          <!-- Loading -->
          <div *ngIf="isLoading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Carregando...</span>
            </div>
            <p class="mt-3 text-muted">Carregando doadores...</p>
          </div>

          <!-- Lista -->
          <div *ngIf="!isLoading && filteredDonors.length > 0" class="row">
            <div class="col-lg-4 col-md-6 mb-4" *ngFor="let donor of paginatedDonors">
              <div class="card border-0 shadow-sm h-100 donor-card">
                <div class="card-body text-center p-4">
                  <!-- Avatar -->
                  <div class="donor-avatar mx-auto mb-3">
                    <i class="fas fa-user" *ngIf="donor.type === 'INDIVIDUAL'"></i>
                    <i class="fas fa-building" *ngIf="donor.type === 'COMPANY'"></i>
                  </div>

                  <!-- Nome -->
                  <h5 class="card-title mb-2">{{donor.name}}</h5>
                  
                  <!-- Tipo -->
                  <span class="badge mb-3"
                        [class.bg-primary]="donor.type === 'INDIVIDUAL'"
                        [class.bg-info]="donor.type === 'COMPANY'">
                    {{donor.type === 'INDIVIDUAL' ? 'Pessoa Física' : 'Empresa'}}
                  </span>

                  <!-- Informações -->
                  <div class="donor-info mb-3">
                    <div class="info-item">
                      <i class="fas fa-envelope text-muted me-2"></i>
                      <small class="text-muted">{{donor.email}}</small>
                    </div>
                    <div class="info-item" *ngIf="donor.phone">
                      <i class="fas fa-phone text-muted me-2"></i>
                      <small class="text-muted">{{donor.phone}}</small>
                    </div>
                    <div class="info-item">
                      <i class="fas fa-calendar text-muted me-2"></i>
                      <small class="text-muted">Desde {{donor.registrationDate | date:'MM/yyyy'}}</small>
                    </div>
                  </div>

                  <!-- Estatísticas do Doador -->
                  <div class="donor-stats mb-3">
                    <div class="row text-center">
                      <div class="col-6">
                        <div class="stat-item">
                          <h6 class="text-success mb-0">{{donor.donationCount || 0}}</h6>
                          <small class="text-muted">Doações</small>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="stat-item">
                          <h6 class="text-info mb-0">{{getLastDonationText(donor.lastDonationDate)}}</h6>
                          <small class="text-muted">Última Doação</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Ações -->
                  <div class="donor-actions">
                    <button class="btn btn-outline-primary btn-sm me-2" (click)="viewDetails(donor)">
                      <i class="fas fa-eye me-1"></i>Detalhes
                    </button>
                    <button class="btn btn-outline-success btn-sm" (click)="viewDonations(donor)">
                      <i class="fas fa-gift me-1"></i>Doações
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Paginação -->
          <div *ngIf="!isLoading && filteredDonors.length > itemsPerPage" class="d-flex justify-content-center mt-4">
            <nav>
              <ul class="pagination">
                <li class="page-item" [class.disabled]="currentPage === 1">
                  <button class="page-link" (click)="changePage(currentPage - 1)">
                    <i class="fas fa-chevron-left"></i>
                  </button>
                </li>
                <li class="page-item" 
                    *ngFor="let page of getPageNumbers()" 
                    [class.active]="page === currentPage">
                  <button class="page-link" (click)="changePage(page)">{{page}}</button>
                </li>
                <li class="page-item" [class.disabled]="currentPage === totalPages">
                  <button class="page-link" (click)="changePage(currentPage + 1)">
                    <i class="fas fa-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Nenhum doador encontrado -->
          <div *ngIf="!isLoading && filteredDonors.length === 0" class="text-center py-5">
            <i class="fas fa-users fa-4x text-muted mb-3"></i>
            <h4 class="text-muted">Nenhum doador encontrado</h4>
            <p class="text-muted">
              Não há doadores que correspondam aos filtros selecionados.
            </p>
            <button class="btn btn-outline-primary" (click)="clearFilters()">
              <i class="fas fa-times me-2"></i>Limpar Filtros
            </button>
          </div>

          <!-- Erro -->
          <div *ngIf="showError" class="alert alert-danger">
            <i class="fas fa-exclamation-circle me-2"></i>
            Erro ao carregar doadores. Tente novamente.
            <button class="btn btn-outline-danger btn-sm ms-2" (click)="loadDonors()">
              <i class="fas fa-redo me-1"></i>Tentar Novamente
            </button>
          </div>
        </div>
      </section>
    </div>

    <!-- Modal de Detalhes -->
    <div class="modal fade" id="detailsModal" tabindex="-1" *ngIf="selectedDonor">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fas fa-user-circle me-2"></i>
              Detalhes do Doador
            </h5>
            <button type="button" class="btn-close" (click)="closeModal()"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="donor-avatar-large mx-auto mb-3">
                  <i class="fas fa-user" *ngIf="selectedDonor.type === 'INDIVIDUAL'"></i>
                  <i class="fas fa-building" *ngIf="selectedDonor.type === 'COMPANY'"></i>
                </div>
                <h5>{{selectedDonor.name}}</h5>
                <span class="badge"
                      [class.bg-primary]="selectedDonor.type === 'INDIVIDUAL'"
                      [class.bg-info]="selectedDonor.type === 'COMPANY'">
                  {{selectedDonor.type === 'INDIVIDUAL' ? 'Pessoa Física' : 'Empresa'}}
                </span>
              </div>
              <div class="col-md-8">
                <div class="row mb-2">
                  <div class="col-4"><strong>Email:</strong></div>
                  <div class="col-8">{{selectedDonor.email}}</div>
                </div>
                <div class="row mb-2" *ngIf="selectedDonor.phone">
                  <div class="col-4"><strong>Telefone:</strong></div>
                  <div class="col-8">{{selectedDonor.phone}}</div>
                </div>
                <div class="row mb-2" *ngIf="selectedDonor.address">
                  <div class="col-4"><strong>Endereço:</strong></div>
                  <div class="col-8">{{selectedDonor.address}}</div>
                </div>
                <div class="row mb-2">
                  <div class="col-4"><strong>Data de Cadastro:</strong></div>
                  <div class="col-8">{{selectedDonor.registrationDate | date:'dd/MM/yyyy'}}</div>
                </div>
                <div class="row mb-2" *ngIf="selectedDonor.lastDonationDate">
                  <div class="col-4"><strong>Última Doação:</strong></div>
                  <div class="col-8">{{selectedDonor.lastDonationDate | date:'dd/MM/yyyy'}}</div>
                </div>
                <div class="row mb-2">
                  <div class="col-4"><strong>Total de Doações:</strong></div>
                  <div class="col-8">
                    <span class="badge bg-success">{{selectedDonor.donationCount || 0}} doações</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-success" (click)="viewDonations(selectedDonor)">
              <i class="fas fa-gift me-1"></i>Ver Doações
            </button>
            <button type="button" class="btn btn-secondary" (click)="closeModal()">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./donors.component.scss']
})
export class DonorsComponent implements OnInit {
  donors: any[] = [];
  filteredDonors: any[] = [];
  paginatedDonors: any[] = [];
  selectedDonor: any = null;
  
  isLoading = true;
  showError = false;
  
  // Estatísticas
  totalDonors = 0;
  activeDonors = 0;
  newThisMonth = 0;
  averageDonations = 0;
  
  // Filtros
  searchTerm = '';
  filterType = '';
  sortBy = 'name';
  
  // Paginação
  currentPage = 1;
  itemsPerPage = 9;
  totalPages = 1;

  constructor(
    private donorService: DonorService,
    private donationService: DonationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadDonors();
    
    // Scroll automático quando vem de um link com fragmento
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'donors-list') {
        setTimeout(() => {
          const element = document.getElementById('donors-list');
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      }
    });
  }

  loadDonors() {
    this.isLoading = true;
    this.showError = false;

    this.donorService.list(0, 100).subscribe({
      next: (response) => {
        this.donors = response.content;
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
    this.totalDonors = this.donors.length;
    
    // Doadores ativos (com pelo menos uma doação)
    this.activeDonors = this.donors.filter(d => d.donationCount && d.donationCount > 0).length;
    
    // Novos doadores este mês
    const currentDate = new Date();
    const currentMonthStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
    this.newThisMonth = this.donors
      .filter(d => d.registrationDate && d.registrationDate.startsWith(currentMonthStr))
      .length;
    
    // Média de doações
    const totalDonations = this.donors.reduce((sum, d) => sum + (d.donationCount || 0), 0);
    this.averageDonations = this.totalDonors > 0 ? Math.round(totalDonations / this.totalDonors) : 0;
  }

  applyFilters() {
    this.filteredDonors = this.donors.filter(donor => {
      let matchesSearch = true;
      let matchesType = true;

      if (this.searchTerm) {
        const searchLower = this.searchTerm.toLowerCase();
        matchesSearch = donor.name.toLowerCase().includes(searchLower) ||
                       donor.email.toLowerCase().includes(searchLower);
      }

      if (this.filterType) {
        matchesType = donor.type === this.filterType;
      }

      return matchesSearch && matchesType;
    });

    this.applySorting();
  }

  applySorting() {
    this.filteredDonors.sort((a, b) => {
      switch (this.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'registrationDate':
          return new Date(b.registrationDate).getTime() - new Date(a.registrationDate).getTime();
        case 'donationCount':
          return (b.donationCount || 0) - (a.donationCount || 0);
        default:
          return 0;
      }
    });

    this.totalPages = Math.ceil(this.filteredDonors.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updatePagination();
  }

  clearFilters() {
    this.searchTerm = '';
    this.filterType = '';
    this.sortBy = 'name';
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
    this.paginatedDonors = this.filteredDonors.slice(startIndex, endIndex);
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

  getLastDonationText(lastDonationDate: string): string {
    if (!lastDonationDate) {
      return 'Nunca';
    }

    const lastDate = new Date(lastDonationDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return 'Ontem';
    } else if (diffDays < 30) {
      return `${diffDays}d`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months}m`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years}a`;
    }
  }

  viewDetails(donor: any) {
    this.selectedDonor = donor;
    
    // Buscar doações do doador para atualizar estatísticas
    this.donationService.list(0, 100).subscribe({
      next: (response) => {
        const donorDonations = response.content.filter(d => d.donorId === donor.id);
        this.selectedDonor.donationCount = donorDonations.length;
        
        if (donorDonations.length > 0) {
          // Encontrar a data da última doação
          const lastDonation = donorDonations.sort((a, b) => 
            new Date(b.donationDate).getTime() - new Date(a.donationDate).getTime()
          )[0];
          this.selectedDonor.lastDonationDate = lastDonation.donationDate;
        }
        
        // Abrir modal usando Bootstrap
        this.openModal('detailsModal');
      },
      error: (error) => {
        console.error('Erro ao carregar doações do doador:', error);
        // Abrir modal mesmo com erro
        this.openModal('detailsModal');
      }
    });
  }

  viewDonations(donor: any) {
    // Navegar para a página de doações com filtro do doador
    this.router.navigate(['/doacoes'], { 
      queryParams: { donorId: donor.id, donorName: donor.name } 
    });
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
    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
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
    this.selectedDonor = null;
  }
}