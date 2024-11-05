import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ifood } from '../models/ifood';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private firestore: AngularFirestore) {}

  getFoods(collection:string): Observable<ifood[]> {
    return this.firestore.collection<ifood>(collection).valueChanges();
  }

  async addFood(food: ifood): Promise<void> {
    await this.firestore.collection('product').add(food);
  }

  updateFood(title: string, food: ifood): Promise<void> {
    return this.firestore.collection('product').doc(title).update(food);
  }

  deleteFood(title: string): Promise<void> {
    return this.firestore.collection('product').doc(title).delete();
  }
}
