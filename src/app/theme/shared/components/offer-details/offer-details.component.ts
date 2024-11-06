import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IOffer } from 'src/app/models/ioffer';
import { OfferService } from 'src/app/services/offer.service';
import { SharedModule } from '../../shared.module';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-offer-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './offer-details.component.html',
  styleUrl: './offer-details.component.scss'
})
export class OfferDetailsComponent implements OnInit {
  offer: IOffer | null = null;
  availableProducts: string []= [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offerService: OfferService,
    private foodservice: FoodService,
  ) { }
  ngOnInit(): void {
    const titleEn = this.route.snapshot.paramMap.get('id').split('-').join(' ');

    if (titleEn) {
      this.offerService.getOfferByTitleEn(titleEn).subscribe((data) => {
        this.offer = data;
        console.log(this.offer);

      });
    }
    this.foodservice.getFoods().subscribe((data) => {
      this.availableProducts = data.filter(
        food => food.category == "burger sandwiches"|| food.category == "chicken sandwiches"|| food.category == "keto & light sandwiches")
      .map( food => food.title.en);
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
}
