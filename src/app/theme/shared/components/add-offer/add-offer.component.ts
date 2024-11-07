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
    availableFries: [
      { price: 0, title: { ar: 'بطاطس صغيرة', en: 'Small French Fries' } },
      { price: 10, title: { ar: 'بطاطس كبيرة', en: 'Large French Fries' } }
    ],
    availableDrinks: [
      { price: 0, title: { ar: 'كولا كبيرة', en: 'Big Cola' } },
      { price: 10, title: { ar: 'عصير تفاح نقي', en: 'Pure Apple Juice' } }
    ],
    availableProducts: [''],
    description: { ar: '', en: '' },
    image: '',
    keenImage: '',
    price: 0,
    swiperMobileImage: '',
    swiperWebImage: '',
    tabs: [
      { title: { ar: 'الاختيار', en: 'choice' } },
      { title: { ar: 'المشروبات', en: 'drinks' } },
      { title: { ar: 'البطاطس', en: 'fries' } },
    ],
    title: { ar: '', en: '' }
  }

  activeTab: string = 'fries'; // Default tab
  selectedFries: string = this.offer.availableFries[0].title.en; // Default fries selection
  selectedDrink: string = this.offer.availableDrinks[0].title.en; // Default drink selection

  selectedProducts: string[] = [];
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
    });
  }
  onSubmit(): void {
    if (this.offer) {
      this.offerService.addOffer(this.offer).then(() => {
        // this.router.navigate(['/food']);
        console.log(this.offer);
      });
    }
  }

  selectTab(tabTitle: string): void {
    this.activeTab = tabTitle;
  }

  addTab() {

    const choiceTabs = this.offer.tabs.filter(tab => tab.title.en.startsWith('choice'));
    const newChoiceNumber = choiceTabs.length + 1; // Increment by 1

    // Add a new tab with the incremented choice number
    this.offer.tabs.push({
      title: {
        ar: `الاختيار ${newChoiceNumber}`,
        en: `Choice ${newChoiceNumber}`
      }
    });
    // Automatically select the new tab
    this.activeTab = `choice ${newChoiceNumber}`.toLowerCase();
  }
  addDrink() {
    this.offer.availableDrinks.push({ price: 0, title: { ar: '', en: '' } });
  }

  addFry() {
    this.offer.availableFries.push({ price: 0, title: { ar: '', en: '' } });
  }

  // addTab() {
  //   this.offer.tabs.push({ title: { ar: '', en: '' } });
  // }

  removeDrink(index: number) {
    this.offer.availableDrinks.splice(index, 1);
  }

  removeFry(index: number) {
    this.offer.availableFries.splice(index, 1);
  }

  removeTab(index: number) {
    if (index > 3 ) {
      this.offer.tabs.splice(index, 1);
    }
  }
  addProduct(product: string) {
    this.selectedProducts.push(product);
    this.availableProducts = this.availableProducts.filter((prd) => prd != product);
    this.offer.availableProducts = this.selectedProducts;
  }

  removeProduct(product: string) {
    const index = this.selectedProducts.indexOf(product);
    if (index > -1) {
      this.selectedProducts.splice(index, 1);
    }
    this.availableProducts.push(product);
    this.offer.availableProducts = this.selectedProducts;
  }
}
