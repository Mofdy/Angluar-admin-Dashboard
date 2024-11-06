import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { SharedModule } from '../../shared.module';
import { IOffer } from 'src/app/models/ioffer';
import { OfferService } from 'src/app/services/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-offer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-offer.component.html',
  styleUrl: './add-offer.component.scss'
})
export class AddOfferComponent implements OnInit {
  offer: IOffer = {
    availableDrinks: [{ price: 0, title: { ar: '', en: '' } }],
    availableFries: [{ price: 0, title: { ar: '', en: '' } }],
    availableProducts: [''], description: { ar: '', en: '' },
    image: '',
    keenImage: '',
    price: 0,
    swiperMobileImage: '',
    swiperWebImage: '',
    tabs: [{ title: { ar: '', en: '' } }], title: { ar: '', en: '' }
  }

  availableProducts: string[] = [];
  constructor(
    private offerService: OfferService,
    private foodService: FoodService,
    private router: Router,
  ) { }
  ngOnInit(): void {

    this.foodService.getFoods().subscribe((data) => {
      this.availableProducts = data.filter(
        food => food.category == "burger sandwiches" || food.category == "chicken sandwiches" || food.category == "keto & light sandwiches")
        .map(food => food.title.en);
      console.log(this.availableProducts);
    });
  }
  onSubmit(): void {
    if (this.offer) {
      this.offerService.addOffer(this.offer).then(() => { this.router.navigate(['/offers']); });
    }
  }
  addDrink() {
    this.offer.availableDrinks.push({ price: 0, title: { ar: '', en: '' } });
  }

  addFry() {
    this.offer.availableFries.push({ price: 0, title: { ar: '', en: '' } });
  }

  addTab() {
    this.offer.tabs.push({ title: { ar: '', en: '' } });
  }

  removeDrink(index: number) {
    this.offer.availableDrinks.splice(index, 1);
  }

  removeFry(index: number) {
    this.offer.availableFries.splice(index, 1);
  }

  removeTab(index: number) {
    this.offer.tabs.splice(index, 1);
  }
}
