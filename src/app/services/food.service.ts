import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ifood } from '../models/ifood';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Title } from '@angular/platform-browser';
<<<<<<< HEAD

=======
import { Icategories } from '../models/icategories';
>>>>>>> e97af9489d50b1afe95651e5f82a9c93094e0024

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private firestore: AngularFirestore) { }

  getFoods(): Observable<ifood[]> {
    return this.firestore.collection<ifood>('products').valueChanges();
  }
  getCategories(): Observable<Icategories[]> {
    return this.firestore.collection<Icategories>('categories').valueChanges();
  }
  // getFoodById(id: string): Observable<ifood | undefined> {
  //   return this.firestore.collection<ifood>('product',prd=>prd.where()).doc(id).valueChanges();
  // }
  
  async addFood(food: ifood): Promise<void> {
    await this.firestore.collection('products').add(food);
  }

<<<<<<< HEAD
   updateFood( title:string ,food: ifood): Promise<void> {
    return this.firestore.collection(`product`).doc(title).update(food);
  }

  deleteFood(title: string): Promise<void> {
    return this.firestore.collection('product').doc(title).delete();
  }
  
getDocumentByTitle(collection: string, titleEn: string): Observable<any> {
  return this.firestore
    .collection(collection, ref => ref.where('title.en', '==', titleEn))
    .valueChanges({ idField: 'id' }) // جلب الـ ID مع الوثيقة
    .pipe(
      map(docs => (docs.length > 0 ? docs[0] : null)) // جلب أول وثيقة مطابقة
    );
=======

  updateFood(title: string, food: ifood): Promise<void> {
    return this.firestore.collection('products').doc(title).update(food);
  }

  async deleteFood(titleEn: string): Promise<void> {
    const snapshot = await this.firestore.collection('products', ref_1 => ref_1.where('title.en', '==', titleEn))
      .get()
      .toPromise();
    snapshot.forEach(doc => { doc.ref.delete(); });
  }

  getDocumentByTitle(collection: string, titleEn: string): Observable<any> {
    return this.firestore
      .collection(collection, ref => ref.where('title.en', '==', titleEn))
      .valueChanges({ idField: 'id' }) // جلب الـ ID مع الوثيقة
      .pipe(
        map(docs => (docs.length > 0 ? docs[0] : null)) // جلب أول وثيقة مطابقة
      );
  }

>>>>>>> e97af9489d50b1afe95651e5f82a9c93094e0024
}

}



