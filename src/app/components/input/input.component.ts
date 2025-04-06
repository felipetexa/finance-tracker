import { CommonModule } from '@angular/common';
import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input () type: 'text' | 'password' | 'email' | 'textarea' | 'select' = 'text';
  @Input () placeholder = '';
  @Input () name = '';
  @Input() options: string[] = [];
  @Input() extraClasses = '';
}
