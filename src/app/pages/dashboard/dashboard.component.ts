import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  selectedPeriod = 'month';
  periods = ['day', 'week', 'month', 'year'];

  income = 4500;
  expenses = 2300;

  get balance() {
    return this.income - this.expenses;
  }

  logout() {
    // TODO: implement logout
  }

  showAIInsights() {
    // TODO: implement AI insights
  }
}
