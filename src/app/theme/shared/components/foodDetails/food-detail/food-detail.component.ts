import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ifood } from 'src/app/models/ifood';
import { FoodService } from 'src/app/services/food.service';
<<<<<<< HEAD
// import { CommonModule } from '@angular/common';
=======
>>>>>>> e97af9489d50b1afe95651e5f82a9c93094e0024

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [FormsModule,CommonModule],

})
export class FoodDetailComponent implements OnInit {
  food: ifood | null = null;
product: any;
=======
  imports: [FormsModule, CommonModule]
})
export class FoodDetailComponent implements OnInit {
  food: ifood | null = null;
>>>>>>> e97af9489d50b1afe95651e5f82a9c93094e0024

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private router: Router
  ) {}

  ngOnInit() {
<<<<<<< HEAD
    const id = this.route.snapshot.paramMap.get('id').split('-').join(' ');
    
 

    if (id) {
      this.foodService.getDocumentByTitle('product',id).subscribe((data) => {
        this.food = data;
        console.log(this.food);
        
      });
   
      
      
=======
    const titleEn = this.route.snapshot.paramMap.get('id').split('-').join(' ');

    if (titleEn) {
      this.foodService.getDocumentByTitle('products', titleEn).subscribe((data) => {
        this.food = data;
        console.log(this.food);
      });
>>>>>>> e97af9489d50b1afe95651e5f82a9c93094e0024
    }
  }

  updateFood() {
    if (this.food) {
      this.foodService.updateFood(this.food.id, this.food).then(() => {
<<<<<<< HEAD
        this.router.navigate(['/food']);
        console.log(this.food);
        

=======

        this.router.navigate(['/food']);
        console.log(this.food);
>>>>>>> e97af9489d50b1afe95651e5f82a9c93094e0024
      });
    }
  }
}
