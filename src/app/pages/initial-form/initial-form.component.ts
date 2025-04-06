import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-initial-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent],
  templateUrl: './initial-form.component.html'
})
export class InitialFormComponent {
  incomeItems = [
    { category: '', amount: '' }
  ];

  addIncomeItem() {
    this.incomeItems.push({ category: '', amount: '' });
  }

  incomeOptions = [
    'Salary',
    'Benefits',
    'Passive Income',
    'Rent',
    'Investments'
  ];

  fixedExpensesItems = [
    { category: '', amount: '' }
  ];

  addFixedExpensesItem() {
    this.fixedExpensesItems.push({ category: '', amount: '' });
  }

  fixedExpensesOptions = [
    'Rent', 'Transportation', 'Insurance', 'Subscription', 'Utilities']

}
