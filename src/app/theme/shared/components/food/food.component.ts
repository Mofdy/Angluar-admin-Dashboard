import { Component, OnInit } from '@angular/core';
import { ifood } from 'src/app/models/ifood';
import { FoodService } from 'src/app/services/food.service';
import { SharedModule } from '../../shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule],
})
export class FoodComponent implements OnInit {
  foods: ifood[] = [];
  selectedFood: ifood | null = null;

  constructor(public foodService: FoodService) {}

  ngOnInit() {
    this.foodService.getFoods().subscribe((foods) => {
      this.foods = foods;
      console.log(foods);
    });
  }

  editFood(food: ifood) {
    this.selectedFood = { ...food };
  }

  // updateFood() {
  //   if (this.selectedFood) {
  //     this.foodService.updateFood(this.selectedFood.id, this.selectedFood).then(() => {
  //       this.selectedFood = null;
  //     });
  //   }
  // }

  deleteFood(id: string) {
    this.foodService.deleteFood(id).then(() => {{
        console.log('food deleted');
    }});
  }
}
