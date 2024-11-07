import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ifood } from 'src/app/models/ifood';
import { FoodService } from 'src/app/services/food.service';
import { SharedModule } from '../../shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Icategories } from 'src/app/models/icategories';
import { IOffer } from 'src/app/models/ioffer';
import { OfferService } from 'src/app/services/offer.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class FoodComponent implements OnInit {
  foods: ifood[] = [];
  menuCategory: Icategories[] = [];
  offers: IOffer[] = [];
  constructor(
    public foodService: FoodService,
    public offerService: OfferService,
    private router: Router,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.foodService.getFoods().subscribe((data) => {
      this.foods = data;
      console.log(data);
    });
    this.offerService.getAllOffers().subscribe((data) => {
      this.offers = data;
      console.log(data);
    });
    this.foodService.getCategories().subscribe((data) => {
      this.menuCategory = data;
      console.log(this.menuCategory);
    });
  }

  editFood(food: ifood) {
    this.router.navigate(['/food-Detail', food.title.en.split(' ').join('-')]);
  }

  deleteFood(id: string) {
    if (confirm('Are you sure you want to delete')) {
      this.foodService.deleteFood(id).then(() => {
        {
          this.alertService.showInfo("Product delete successfully")
        }
      });
    }
  }

  editOffer(offer: IOffer) {
    this.router.navigate(['/offer-Details', offer.title.en.split(' ').join('-')]);
  }

  deleteOffer(id: string) {
    this.offerService.deleteOffer(id).then(() => {
      {
        console.log('offer deleted');
      }
    });
  }
}
