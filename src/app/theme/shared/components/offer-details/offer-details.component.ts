import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IOffer } from 'src/app/models/ioffer';
import { OfferService } from 'src/app/services/offer.service';
import { SharedModule } from '../../shared.module';
import { FoodService } from 'src/app/services/food.service';
import { ifood } from 'src/app/models/ifood';

@Component({
  selector: 'app-offer-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './offer-details.component.html',
  styleUrl: './offer-details.component.scss'
})
export class OfferDetailsComponent implements OnInit {
  offer: IOffer | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offerService: OfferService,
    private food: FoodService
  ) {}
  cat: ifood[] = [];
  availableProducts: string[] = [];
  selectedProducts: string[] = [];
  ngOnInit(): void {
    const titleEn = this.route.snapshot.paramMap.get('id').split('-').join(' ');

    if (titleEn) {
      this.offerService.getOfferByTitleEn(titleEn).subscribe((data) => {
        this.offer = data;
        // console.log(this.offer);
        this.selectedProducts = data.availableProducts;
      });
    }
    this.food.getFoods().subscribe((data) => {
      this.availableProducts = data
        .filter((food) => food.category == 'burger sandwiches' || food.category == 'chicken sandwiches')
        .map((food) => food.title.en);
      this.availableProducts = this.availableProducts.filter((product) => !this.selectedProducts.includes(product));

      console.log(this.availableProducts);
    });
  }
  updateOffer(): void {
    if (this.offer) {
      this.offerService.updateOffer(this.offer.id, this.offer).then(() => {
        this.router.navigate(['/food']);
        console.log(this.offer);
      });
    }
  }

  addProduct(product: string) {
    this.selectedProducts.push(product);
    this.availableProducts = this.availableProducts.filter((prd) => prd != product);
  }

  removeProduct(product: string) {
    const index = this.selectedProducts.indexOf(product);
    if (index > -1) {
      this.selectedProducts.splice(index, 1);
    }
    this.availableProducts.push(product);
  }
}
