import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DonorService } from '../../services/donor.service';
import { DonorRequest } from '../../models/donor.model';

@Component({
  selector: 'app-new-donor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow">
            <div class="card-header bg-primary text-white">
              <h4 class="mb-0">
                <i class="fas fa-user-plus me-2"></i>
                Cadastro de Doador
              </h4>
            </div>
            <div class="card-body">
              <form (ngSubmit)="onSubmit()" #donorForm="ngForm">
                <!-- Tipo de Doador -->
                <div class="mb-3">
                  <label for="type" class="form-label">Tipo de Doador *</label>
                  <select 
                    class="form-select" 
                    id="type" 
                    name="type" 
                    [(ngModel)]="donor.type" 
                    required
                    #type="ngModel">
                    <option value="">Selecione o tipo</option>
                    <option value="INDIVIDUAL">Pessoa Física</option>
                    <option value="CORPORATE">Pessoa Jurídica</option>
                  </select>
                  <div *ngIf="type.invalid && type.touched" class="text-danger">
                    Tipo é obrigatório
                  </div>
                </div>

                <!-- Nome -->
                <div class="mb-3">
                  <label for="name" class="form-label">
                    {{ donor.type === 'CORPORATE' ? 'Razão Social' : 'Nome Completo' }} *
                  </label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    name="name" 
                    [(ngModel)]="donor.name" 
                    required
                    #name="ngModel"
                    [placeholder]="donor.type === 'CORPORATE' ? 'Digite a razão social' : 'Digite o nome completo'">
                  <div *ngIf="name.invalid && name.touched" class="text-danger">
                    {{ donor.type === 'CORPORATE' ? 'Razão social' : 'Nome' }} é obrigatório
                  </div>
                </div>

                <!-- Documento -->
                <div class="mb-3">
                  <label for="document" class="form-label">
                    {{ donor.type === 'CORPORATE' ? 'CNPJ' : 'CPF' }}
                  </label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="document" 
                    name="document" 
                    [(ngModel)]="donor.document"
                    #document="ngModel"
                    [placeholder]="donor.type === 'CORPORATE' ? 'Digite o CNPJ (opcional)' : 'Digite o CPF (opcional)'">
                </div>

                <!-- Email -->
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    name="email" 
                    [(ngModel)]="donor.email"
                    #email="ngModel"
                    placeholder="Digite o email (opcional)">
                  <div *ngIf="email.invalid && email.touched" class="text-danger">
                    Email deve ter um formato válido
                  </div>
                </div>

                <!-- Telefone -->
                <div class="mb-3">
                  <label for="phone" class="form-label">Telefone</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    id="phone" 
                    name="phone" 
                    [(ngModel)]="donor.phone"
                    #phone="ngModel"
                    placeholder="Digite o telefone (opcional)">
                </div>

                <!-- Endereço -->
                <div class="mb-3">
                  <label for="address" class="form-label">Endereço</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="address" 
                    name="address" 
                    [(ngModel)]="donor.address"
                    #address="ngModel"
                    placeholder="Digite o endereço completo (opcional)">
                </div>

                <!-- Botões -->
                <div class="d-flex justify-content-between">
                  <button 
                    type="button" 
                    class="btn btn-secondary" 
                    (click)="goBack()">
                    <i class="fas fa-arrow-left me-1"></i>
                    Voltar
                  </button>
                  <button 
                    type="submit" 
                    class="btn btn-primary" 
                    [disabled]="donorForm.invalid || isSubmitting">
                    <i class="fas fa-save me-1"></i>
                    {{ isSubmitting ? 'Salvando...' : 'Salvar Doador' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Sucesso -->
    <div class="modal fade" id="successModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-success text-white">
            <h5 class="modal-title">
              <i class="fas fa-check-circle me-2"></i>
              Sucesso!
            </h5>
          </div>
          <div class="modal-body">
            <p>Doador cadastrado com sucesso!</p>
            <p><strong>Nome:</strong> {{ donor.name }}</p>
            <p><strong>Tipo:</strong> {{ donor.type === 'CORPORATE' ? 'Pessoa Jurídica' : 'Pessoa Física' }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" (click)="closeModal()">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Erro -->
    <div class="modal fade" id="errorModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title">
              <i class="fas fa-exclamation-triangle me-2"></i>
              Erro!
            </h5>
          </div>
          <div class="modal-body">
            <p>Ocorreu um erro ao cadastrar o doador:</p>
            <p class="text-danger">{{ errorMessage }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" (click)="closeErrorModal()">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./new-donor.component.scss']
})
export class NewDonorComponent {
  donor: DonorRequest = {
    type: '',
    name: '',
    document: '',
    email: '',
    phone: '',
    address: ''
  };

  isSubmitting = false;
  errorMessage = '';

  constructor(
    private donorService: DonorService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    this.donorService.create(this.donor).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.showSuccessModal();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || 'Erro interno do servidor';
        this.showErrorModal();
      }
    });
  }

  goBack() {
    this.router.navigate(['/doadores']);
  }

  showSuccessModal() {
    const modal = new (window as any).bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
  }

  showErrorModal() {
    const modal = new (window as any).bootstrap.Modal(document.getElementById('errorModal'));
    modal.show();
  }

  closeModal() {
    const modal = (window as any).bootstrap.Modal.getInstance(document.getElementById('successModal'));
    modal.hide();
    this.router.navigate(['/doadores']);
  }

  closeErrorModal() {
    const modal = (window as any).bootstrap.Modal.getInstance(document.getElementById('errorModal'));
    modal.hide();
  }
}