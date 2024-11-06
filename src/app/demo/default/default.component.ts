// Angular Import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BajajChartComponent } from './bajaj-chart/bajaj-chart.component';
import { ChartDataMonthComponent } from './chart-data-month/chart-data-month.component';
import { DataService } from 'src/app/services/firebase.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, SharedModule, BajajChartComponent, BarChartComponent, ChartDataMonthComponent],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getItems('orders').subscribe((items) => {
      this.calculateTotals(items);
    });
  }

  today = new Date();

  // public method
  // ListGroup = [
  //   {
  //     name: 'Bajaj Finery',
  //     profit: '10% Profit',
  //     invest: '$1839.00',
  //     bgColor: 'bg-light-success',
  //     icon: 'ti ti-chevron-up',
  //     color: 'text-success'
  //   },
  //   {
  //     name: 'TTML',
  //     profit: '10% Loss',
  //     invest: '$100.00',
  //     bgColor: 'bg-light-danger',
  //     icon: 'ti ti-chevron-down',
  //     color: 'text-danger'
  //   },
  //   {
  //     name: 'Reliance',
  //     profit: '10% Profit',
  //     invest: '$200.00',
  //     bgColor: 'bg-light-success',
  //     icon: 'ti ti-chevron-up',
  //     color: 'text-success'
  //   },
  //   {
  //     name: 'ATGL',
  //     profit: '10% Loss',
  //     invest: '$189.00',
  //     bgColor: 'bg-light-danger',
  //     icon: 'ti ti-chevron-down',
  //     color: 'text-danger'
  //   },
  //   {
  //     name: 'Stolon',
  //     profit: '10% Profit',
  //     invest: '$210.00',
  //     bgColor: 'bg-light-success',
  //     icon: 'ti ti-chevron-up',
  //     color: 'text-success',
  //     space: 'pb-0'
  //   }
  // ];

  // profileCard = [
  //   {
  //     style: 'bg-primary-dark text-white',
  //     background: 'bg-primary',
  //     value: '$203k',
  //     text: 'Net Profit',
  //     color: 'text-white',
  //     value_color: 'text-white'
  //   },
  //   {
  //     background: 'bg-warning',
  //     avatar_background: 'bg-light-warning',
  //     value: '$550K',
  //     text: 'Total Revenue',
  //     color: 'text-warning'
  //   }
  // ];
  currentDay = this.today.getDate();
  currentMonth = this.today.getMonth() + 1;
  currentYear = this.today.getFullYear();

  totalForToday: number = 0;
  totalForCurrentMonth: number = 0;
  totalForCurrentYear: number = 0;
  total: number = 0;

  // Function to calculate totals for today, month, and year
  calculateTotals(items: any[]) {
    this.totalForToday = 0;
    this.totalForCurrentMonth = 0;
    this.totalForCurrentYear = 0;

    items.forEach((order) => {
      const [datePart] = order.date.split(',');
      const [month, day, year] = datePart.split('/').map(Number);

      // Calculate total for today
      if (day === this.currentDay && month === this.currentMonth && year === this.currentYear) {
        this.totalForToday += order.totalPrice;
      }

      // Calculate total for the current month
      if (month === this.currentMonth && year === this.currentYear) {
        this.totalForCurrentMonth += order.totalPrice;
      }

      // Calculate total for the current year
      if (year === this.currentYear) {
        this.totalForCurrentYear += order.totalPrice;
      }
      this.total+= order.totalPrice;
    });

    console.log('Total sales for today:', this.totalForToday);
    console.log('Total sales for the month:', this.totalForCurrentMonth);
    console.log('Total sales for the year:', this.totalForCurrentYear);
    console.log('Total sales :', this.total);
  }
}
