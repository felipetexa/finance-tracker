import { Component } from '@angular/core';
import { InputComponent } from '@components/input/input.component'
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
