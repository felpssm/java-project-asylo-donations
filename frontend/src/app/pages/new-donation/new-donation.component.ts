import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DonationService } from '../../services/donation.service';
import { DonorService } from '../../services/donor.service';
import { DonationType } from '../../models/donation.model';

@Component({
  selector: 'app-new-donation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card" id="donation-form">
            <div class="card-header">
              <h2 class="mb-0">Nova Doação</h2>
            </div>
            <div class="card-body">
              <form [formGroup]="donationForm" (ngSubmit)="onSubmit()">
                 <!-- Tipo de Doação -->
                 <div class="mb-4">
                   <h5 class="text-primary mb-3">Tipo de Doação</h5>
                   <p class="text-muted mb-3">Escolha o tipo de doação que deseja fazer:</p>
                   
                   <div class="row">
                     <div class="col-md-6 mb-3">
                       <div class="card donation-type-card h-100" 
                            [class.selected]="donationForm.get('type')?.value === 'MONEY'"
                            [class.border-success]="donationForm.get('type')?.value === 'MONEY'"
                            (click)="selectDonationType('MONEY')"
                            style="cursor: pointer; transition: all 0.3s ease;">
                         <div class="card-body text-center p-4">
                           <div class="donation-icon mb-3">
                             <i class="fas fa-dollar-sign fa-3x text-success"></i>
                           </div>
                           <h5 class="card-title text-success mb-2">Doação em Dinheiro</h5>
                           <p class="card-text text-muted">
                             Contribua com valores em dinheiro para ajudar nas necessidades gerais da instituição.
                           </p>
                           <div class="features mt-3">
                             <small class="text-muted">
                               <i class="fas fa-check text-success me-1"></i> PIX, Cartão ou Transferência<br>
                               <i class="fas fa-check text-success me-1"></i> Valor flexível<br>
                               <i class="fas fa-check text-success me-1"></i> Recibo automático
                             </small>
                           </div>
                         </div>
                       </div>
                     </div>
                     
                     <div class="col-md-6 mb-3">
                       <div class="card donation-type-card h-100" 
                            [class.selected]="donationForm.get('type')?.value === 'ITEM'"
                            [class.border-info]="donationForm.get('type')?.value === 'ITEM'"
                            (click)="selectDonationType('ITEM')"
                            style="cursor: pointer; transition: all 0.3s ease;">
                         <div class="card-body text-center p-4">
                           <div class="donation-icon mb-3">
                             <i class="fas fa-box fa-3x text-info"></i>
                           </div>
                           <h5 class="card-title text-info mb-2">Doação de Itens</h5>
                           <p class="card-text text-muted">
                             Doe itens físicos como roupas, alimentos, medicamentos ou outros materiais necessários.
                           </p>
                           <div class="features mt-3">
                             <small class="text-muted">
                               <i class="fas fa-check text-info me-1"></i> Roupas e calçados<br>
                               <i class="fas fa-check text-info me-1"></i> Alimentos e medicamentos<br>
                               <i class="fas fa-check text-info me-1"></i> Materiais de higiene
                             </small>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   
                   <div class="invalid-feedback d-block" *ngIf="donationForm.get('type')?.invalid && donationForm.get('type')?.touched">
                     <i class="fas fa-exclamation-circle me-1"></i>
                     Selecione o tipo de doação
                   </div>
                 </div>
                 
                 <!-- Campos Condicionais -->
                 <div class="mb-4" *ngIf="donationForm.get('type')?.value">
                   <!-- Campos para Doação em Dinheiro -->
                   <div *ngIf="donationForm.get('type')?.value === 'MONEY'">
                     <h5 class="text-primary mb-3">Detalhes da Doação em Dinheiro</h5>
                     <div class="row">
                       <div class="col-md-6 mb-3">
                         <label for="amount" class="form-label">Valor (R$) *</label>
                         <input 
                           type="number" 
                           class="form-control" 
                           id="amount"
                           formControlName="amount"
                           placeholder="0,00"
                           min="1"
                           step="0.01"
                           [class.is-invalid]="donationForm.get('amount')?.invalid && donationForm.get('amount')?.touched"
                         >
                         <div class="invalid-feedback" *ngIf="donationForm.get('amount')?.invalid && donationForm.get('amount')?.touched">
                           Valor é obrigatório e deve ser maior que zero
                         </div>
                       </div>
                       <div class="col-md-6 mb-3">
                         <label for="paymentMethod" class="form-label">Forma de Pagamento *</label>
                         <select 
                           class="form-select" 
                           id="paymentMethod" 
                           formControlName="paymentMethod"
                           [class.is-invalid]="donationForm.get('paymentMethod')?.invalid && donationForm.get('paymentMethod')?.touched"
                         >
                           <option value="">Selecione</option>
                           <option value="PIX">PIX</option>
                           <option value="CREDIT_CARD">Cartão de Crédito</option>
                           <option value="DEBIT_CARD">Cartão de Débito</option>
                           <option value="BANK_TRANSFER">Transferência Bancária</option>
                           <option value="CASH">Dinheiro</option>
                         </select>
                         <div class="invalid-feedback" *ngIf="donationForm.get('paymentMethod')?.invalid && donationForm.get('paymentMethod')?.touched">
                           Selecione uma forma de pagamento
                         </div>
                       </div>
                     </div>
                   </div>
                   
                   <!-- Campos para Doação de Itens -->
                   <div *ngIf="donationForm.get('type')?.value === 'ITEM'">
                     <h5 class="text-primary mb-3">Detalhes dos Itens</h5>
                     <div class="row">
                       <div class="col-md-6 mb-3">
                         <label for="itemDescription" class="form-label">Descrição dos Itens *</label>
                         <textarea 
                           class="form-control" 
                           id="itemDescription"
                           formControlName="itemDescription"
                           rows="3"
                           placeholder="Descreva os itens que deseja doar..."
                           [class.is-invalid]="donationForm.get('itemDescription')?.invalid && donationForm.get('itemDescription')?.touched"
                         ></textarea>
                         <div class="invalid-feedback" *ngIf="donationForm.get('itemDescription')?.invalid && donationForm.get('itemDescription')?.touched">
                           Descrição dos itens é obrigatória
                         </div>
                       </div>
                       <div class="col-md-3 mb-3">
                         <label for="itemQuantity" class="form-label">Quantidade *</label>
                         <input 
                           type="number" 
                           class="form-control" 
                           id="itemQuantity"
                           formControlName="itemQuantity"
                           placeholder="1"
                           min="1"
                           [class.is-invalid]="donationForm.get('itemQuantity')?.invalid && donationForm.get('itemQuantity')?.touched"
                         >
                         <div class="invalid-feedback" *ngIf="donationForm.get('itemQuantity')?.invalid && donationForm.get('itemQuantity')?.touched">
                           Quantidade é obrigatória
                         </div>
                       </div>
                       <div class="col-md-3 mb-3">
                         <label for="unit" class="form-label">Unidade *</label>
                         <select 
                           class="form-select" 
                           id="unit" 
                           formControlName="unit"
                           [class.is-invalid]="donationForm.get('unit')?.invalid && donationForm.get('unit')?.touched"
                         >
                           <option value="">Selecione</option>
                           <option value="UNIT">Unidade(s)</option>
                           <option value="KG">Quilograma(s)</option>
                           <option value="LITER">Litro(s)</option>
                           <option value="BOX">Caixa(s)</option>
                           <option value="BAG">Sacola(s)</option>
                         </select>
                         <div class="invalid-feedback" *ngIf="donationForm.get('unit')?.invalid && donationForm.get('unit')?.touched">
                           Selecione uma unidade
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <h5 class="text-primary mb-3">Dados do Doador</h5>
                
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="donorName" class="form-label">Nome Completo *</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="donorName"
                      formControlName="donorName"
                      [class.is-invalid]="donationForm.get('donorName')?.invalid && donationForm.get('donorName')?.touched"
                    >
                    <div class="invalid-feedback" *ngIf="donationForm.get('donorName')?.invalid && donationForm.get('donorName')?.touched">
                      Nome é obrigatório
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <label for="donorEmail" class="form-label">E-mail *</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="donorEmail"
                      formControlName="donorEmail"
                      [class.is-invalid]="donationForm.get('donorEmail')?.invalid && donationForm.get('donorEmail')?.touched"
                    >
                    <div class="invalid-feedback" *ngIf="donationForm.get('donorEmail')?.invalid && donationForm.get('donorEmail')?.touched">
                      <span *ngIf="donationForm.get('donorEmail')?.errors?.['required']">E-mail é obrigatório</span>
                      <span *ngIf="donationForm.get('donorEmail')?.errors?.['email']">E-mail inválido</span>
                    </div>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="donorPhone" class="form-label">Telefone *</label>
                    <input 
                      type="tel" 
                      class="form-control" 
                      id="donorPhone"
                      formControlName="donorPhone"
                      placeholder="(11) 99999-9999"
                      [class.is-invalid]="donationForm.get('donorPhone')?.invalid && donationForm.get('donorPhone')?.touched"
                    >
                    <div class="invalid-feedback" *ngIf="donationForm.get('donorPhone')?.invalid && donationForm.get('donorPhone')?.touched">
                      Telefone é obrigatório
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <label for="donorAddress" class="form-label">Endereço</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="donorAddress"
                      formControlName="donorAddress"
                      placeholder="Rua, número, bairro, cidade"
                    >
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="observations" class="form-label">Observações</label>
                  <textarea 
                    class="form-control" 
                    id="observations"
                    rows="3"
                    formControlName="observations"
                    placeholder="Informações adicionais sobre a doação..."
                  ></textarea>
                </div>
                
                <div class="d-flex gap-2 justify-content-end">
                  <button type="button" class="btn btn-outline-secondary" (click)="onCancel()">
                    Cancelar
                  </button>
                  <button 
                    type="submit" 
                    class="btn btn-primary"
                    [disabled]="donationForm.invalid || isSubmitting"
                  >
                    <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                    {{isSubmitting ? 'Registrando...' : 'Registrar Doação'}}
                  </button>
                </div>
              </form>
              
              <!-- Mensagens -->
              <div *ngIf="showSuccessMessage" class="alert alert-success mt-3">
                <i class="fas fa-check-circle me-2"></i>
                Doação registrada com sucesso! Obrigado pela sua generosidade.
              </div>

              <div *ngIf="showErrorMessage" class="alert alert-danger mt-3">
                <i class="fas fa-exclamation-circle me-2"></i>
                Erro ao registrar doação. Tente novamente.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./new-donation.component.css']
})
export class NewDonationComponent implements OnInit {
  donationForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private donationService: DonationService,
    private donorService: DonorService,
    private route: ActivatedRoute
  ) {
    this.donationForm = this.fb.group({
      type: ['', Validators.required],
      donorName: ['', Validators.required],
      donorEmail: ['', [Validators.required, Validators.email]],
      donorPhone: ['', Validators.required],
      donorAddress: [''],
      observations: [''],
      // Campos para doação em dinheiro
      amount: [''],
      paymentMethod: [''],
      // Campos para doação de itens
      itemDescription: [''],
      itemQuantity: [''],
      unit: ['']
    });
  }

  ngOnInit() {
    // Adicionar listener para mudanças no tipo de doação
    this.donationForm.get('type')?.valueChanges.subscribe(type => {
      this.updateValidators(type);
    });
    
    // Scroll automático quando vem de um link com fragmento
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'donation-form') {
        setTimeout(() => {
          const element = document.getElementById('donation-form');
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

  updateValidators(type: string): void {
    // Limpar validações anteriores
    this.donationForm.get('amount')?.clearValidators();
    this.donationForm.get('paymentMethod')?.clearValidators();
    this.donationForm.get('itemDescription')?.clearValidators();
    this.donationForm.get('itemQuantity')?.clearValidators();
    this.donationForm.get('unit')?.clearValidators();

    if (type === 'MONEY') {
      // Validações para doação em dinheiro
      this.donationForm.get('amount')?.setValidators([Validators.required, Validators.min(1)]);
      this.donationForm.get('paymentMethod')?.setValidators([Validators.required]);
    } else if (type === 'ITEM') {
      // Validações para doação de itens
      this.donationForm.get('itemDescription')?.setValidators([Validators.required]);
      this.donationForm.get('itemQuantity')?.setValidators([Validators.required, Validators.min(1)]);
      this.donationForm.get('unit')?.setValidators([Validators.required]);
    }

    // Atualizar status de validação
    this.donationForm.get('amount')?.updateValueAndValidity();
    this.donationForm.get('paymentMethod')?.updateValueAndValidity();
    this.donationForm.get('itemDescription')?.updateValueAndValidity();
    this.donationForm.get('itemQuantity')?.updateValueAndValidity();
    this.donationForm.get('unit')?.updateValueAndValidity();
  }

  selectDonationType(type: string) {
    this.donationForm.patchValue({ type: type });
    this.donationForm.get('type')?.markAsTouched();
  }

  onSubmit() {
    if (this.donationForm.valid) {
      this.isSubmitting = true;
      this.showSuccessMessage = false;
      this.showErrorMessage = false;

      const formData = this.donationForm.value;
      console.log('Dados do formulário:', formData);

      // Primeiro, criar o doador
      const donorData = {
        type: 'PF', // Pessoa Física - valor correto esperado pelo backend
        name: formData.donorName,
        document: null, // Campo opcional no backend - null para evitar constraint UNIQUE
        email: formData.donorEmail,
        phone: formData.donorPhone,
        address: formData.donorAddress
      };

      this.donorService.create(donorData).subscribe({
        next: (donorResponse) => {
          console.log('Doador criado:', donorResponse);
          
          // Agora criar a doação
          const donationData = {
            donorId: donorResponse.id,
            type: formData.type,
            amount: formData.type === 'MONEY' ? formData.amount : undefined,
            itemDescription: formData.type === 'ITEM' ? formData.itemDescription : undefined,
            itemQuantity: formData.type === 'ITEM' ? formData.itemQuantity : undefined,
            unit: formData.type === 'ITEM' ? formData.unit : undefined,
            observations: formData.observations || '',
            donationDate: new Date().toISOString().split('T')[0] // Data atual no formato YYYY-MM-DD
          };

          this.donationService.create(donationData).subscribe({
            next: (donationResponse) => {
              console.log('Doação criada com sucesso:', donationResponse);
              this.isSubmitting = false;
              this.showSuccessMessage = true;
              this.showErrorMessage = false;
              this.donationForm.reset();
              
              // Redirecionar para a página de doações após 2 segundos
              setTimeout(() => {
                this.router.navigate(['/doacoes']);
              }, 2000);
            },
            error: (error) => {
              console.error('Erro ao criar doação:', error);
              this.isSubmitting = false;
              this.showErrorMessage = true;
              this.showSuccessMessage = false;
            }
          });
        },
        error: (error) => {
          console.error('Erro ao criar doador:', error);
          this.isSubmitting = false;
          this.showErrorMessage = true;
          this.showSuccessMessage = false;
        }
      });
    } else {
      // Marcar todos os campos como touched para mostrar erros
      Object.keys(this.donationForm.controls).forEach(key => {
        this.donationForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}