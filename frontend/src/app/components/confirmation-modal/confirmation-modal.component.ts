import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" [class.show]="isVisible" (click)="onBackdropClick()">
      <div class="modal-container" [ngClass]="type + '-modal'" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <div class="modal-icon">
            <i [class]="iconClass"></i>
          </div>
          <h5 class="modal-title">{{ title }}</h5>
        </div>
        <div class="modal-body">
          <p class="modal-message">{{ message }}</p>
          <p *ngIf="details" class="modal-details">{{ details }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" (click)="onCancel()">
            <i class="fas fa-times me-2"></i>
            {{ cancelText }}
          </button>
          <button type="button" [class]="confirmButtonClass" (click)="onConfirm()">
            <i [class]="confirmIconClass" class="me-2"></i>
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  @Input() isVisible = false;
  @Input() title = 'Confirmação';
  @Input() message = 'Tem certeza que deseja continuar?';
  @Input() details = '';
  @Input() confirmText = 'Confirmar';
  @Input() cancelText = 'Cancelar';
  @Input() type: 'danger' | 'warning' | 'info' = 'danger';
  
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  get iconClass(): string {
    switch (this.type) {
      case 'danger':
        return 'fas fa-exclamation-triangle';
      case 'warning':
        return 'fas fa-exclamation-circle';
      case 'info':
        return 'fas fa-info-circle';
      default:
        return 'fas fa-exclamation-triangle';
    }
  }

  get confirmButtonClass(): string {
    switch (this.type) {
      case 'danger':
        return 'btn btn-danger';
      case 'warning':
        return 'btn btn-warning';
      case 'info':
        return 'btn btn-info';
      default:
        return 'btn btn-danger';
    }
  }

  get confirmIconClass(): string {
    switch (this.type) {
      case 'danger':
        return 'fas fa-trash';
      case 'warning':
        return 'fas fa-check';
      case 'info':
        return 'fas fa-check';
      default:
        return 'fas fa-check';
    }
  }

  onConfirm(): void {
    this.confirmed.emit();
  }

  onCancel(): void {
    this.cancelled.emit();
  }

  onBackdropClick(): void {
    this.onCancel();
  }
}