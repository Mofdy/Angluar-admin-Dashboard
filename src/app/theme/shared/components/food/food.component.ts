import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ifood } from 'src/app/models/ifood';
import { FoodService } from 'src/app/services/food.service';
import { SharedModule } from '../../shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Icategories } from 'src/app/models/icategories';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  standalone: true,
  imports: [FormsModule,CommonModule],
})
export class FoodComponent implements OnInit {
  foods: ifood[] = [];
  menuCategory: Icategories[]=[];
    
  selectedFood: ifood | null = null;

  constructor(public foodService: FoodService,private router:Router) {}

  ngOnInit() {
    this.foodService.getFoods().subscribe((data) => {
      this.foods = data;
      console.log(data);
    });
    this.foodService.getCategories().subscribe((data) => {
      this.menuCategory = data;
      console.log(this.menuCategory);
    });
  }

  editFood(food: ifood) {
    this.router.navigate(['/food-Detail', food.title.en.split(' ').join('-')])
    }

  // updateFood() {
  //   if (this.selectedFood) {
  //     this.foodService.updateFood(this.selectedFood.en, this.selectedFood).then(() => {
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
