import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" [class.show]="isVisible" (click)="onOverlayClick($event)">
      <div class="modal-container success-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <div class="success-icon">
            <i class="fas fa-check-circle"></i>
          </div>
          <h4 class="modal-title">{{ title }}</h4>
        </div>
        
        <div class="modal-body">
          <p class="success-message">{{ message }}</p>
          <p *ngIf="details" class="success-details">{{ details }}</p>
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-success" (click)="onConfirm()">
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent {
  @Input() isVisible = false;
  @Input() title = 'Sucesso';
  @Input() message = '';
  @Input() details = '';
  @Input() confirmText = 'OK';
  
  @Output() confirmed = new EventEmitter<void>();

  onConfirm(): void {
    this.confirmed.emit();
  }

  onOverlayClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onConfirm();
    }
  }
}