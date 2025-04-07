import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@app/components/button/button.component';
import { InputComponent } from '@app/components/input/input.component';

@Component({
  selector: 'app-invite-form',
  imports: [CommonModule, InputComponent, ButtonComponent],
  templateUrl: './invite-form.component.html'
})
export class InviteFormComponent {
  invitees = [
    { name: '', email: '' }
  ];

  addInvitee() {
    this.invitees.push({ name: '', email: '' });
  }

}
