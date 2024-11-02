import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ifood } from '../models/ifood';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private firestore: AngularFirestore) {}

  getFoods(): Observable<ifood[]> {
    return this.firestore.collection<ifood>('product').valueChanges();
  }

  async addFood(food: ifood): Promise<void> {
    await this.firestore.collection('product').add(food);
  }

  updateFood(id: string, food: ifood): Promise<void> {
    return this.firestore.doc(`product/${id}`).update(food);
  }

  deleteFood(id: string): Promise<void> {
    return this.firestore.doc(`product/${id}`).delete();
  }
}
