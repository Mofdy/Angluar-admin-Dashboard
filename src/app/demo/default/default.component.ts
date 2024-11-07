import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BajajChartComponent } from './bajaj-chart/bajaj-chart.component';
import { ChartDataMonthComponent } from './chart-data-month/chart-data-month.component';
import { DataService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, SharedModule, BajajChartComponent, BarChartComponent, ChartDataMonthComponent],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  constructor(public dataService: DataService) {}

  totalOrders: number = 0;
  totalForToday: number = 0;
  totalForCurrentWeek: number = 0;
  totalForCurrentMonth: number = 0;
  totalForCurrentYear: number = 0;
  total: number = 0;
  ordersToday: number = 0;
  ordersThisWeek: number = 0;
  ordersThisMonth: number = 0;

  ngOnInit() {
    this.dataService.getItems('orders').subscribe((items) => {
      this.totalOrders = items.length;
      console.log(items);
      this.calculateTotals(items);
    });
  }

  private calculateTotals(items: any[]) {
    const currentDate = new Date();
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

    items.forEach((order) => {
      const [datePart] = order.date.split(',');
      const [month, day, year] = datePart.split('/').map(Number);
      const orderDate = new Date(year, month - 1, day);

      if (this.isSameDay(orderDate, currentDate)) {
        this.totalForToday += order.totalPrice;
        this.ordersToday += 1;
      }

      if (orderDate >= startOfWeek && orderDate <= currentDate) {
        this.totalForCurrentWeek += order.totalPrice;
        this.ordersThisWeek += 1;
      }

      if (this.isSameMonth(orderDate, currentDate)) {
        this.totalForCurrentMonth += order.totalPrice;
        this.ordersThisMonth += 1;
      }

      if (orderDate.getFullYear() === currentDate.getFullYear()) {
        this.totalForCurrentYear += order.totalPrice;
      }

      this.total += order.totalPrice;
    });
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  private isSameMonth(date1: Date, date2: Date): boolean {
    return (
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }
}
