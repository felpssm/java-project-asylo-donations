import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" [class.show]="isVisible" (click)="onOverlayClick($event)">
      <div class="modal-container error-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <div class="error-icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <h4 class="modal-title">{{ title }}</h4>
        </div>
        
        <div class="modal-body">
          <p class="error-message">{{ message }}</p>
          <p *ngIf="details" class="error-details">{{ details }}</p>
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" (click)="onConfirm()">
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent {
  @Input() isVisible = false;
  @Input() title = 'Erro';
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