import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IOffer } from 'src/app/models/ioffer';
import { OfferService } from 'src/app/services/offer.service';
import { SharedModule } from '../../shared.module';

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
  ) { }
  ngOnInit(): void {
    const titleEn = this.route.snapshot.paramMap.get('id').split('-').join(' ');

    if (titleEn) {
      this.offerService.getOfferByTitleEn(titleEn).subscribe((data) => {
        this.offer = data;
        console.log(this.offer);
      });
    }
  }
  updateOffer(): void {
    if (this.offer) {
      this.offerService.updateOffer(this.offer.title.en , this.offer)
      .then(() => { this.router.navigate(['/food']); });
    }
  }
}
