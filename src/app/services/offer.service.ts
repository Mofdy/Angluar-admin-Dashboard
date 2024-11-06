import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IOffer } from '../models/ioffer';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private collectionName = 'offers';

  constructor(private firestore: AngularFirestore) { }

  // Get all offers
  getAllOffers(): Observable<IOffer[]> {
    return this.firestore.collection<IOffer>(this.collectionName).valueChanges();
  }

  // Add a new offer
  addOffer(offer: IOffer): Promise<void> {
    const titleEn = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(titleEn).set({ titleEn, ...offer });
  }

  // Update an existing offer
  updateOffer(titleEn: string, updatedOffer: IOffer): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(titleEn).update(updatedOffer);
  }

  // Delete an offer
  async deleteOffer(titleEn: string): Promise<void> {
    const snapshot = await this.firestore.collection(this.collectionName, ref_1 => ref_1.where('title.en', '==', titleEn))
      .get()
      .toPromise();
    snapshot.forEach(doc => { doc.ref.delete(); });
  }

  getOfferByTitleEn(titleEn: string): Observable<any> {
     return this.firestore.collection<IOffer>(
      this.collectionName, ref => ref.where('title.en', '==', titleEn)).valueChanges({ idField: 'id' }).pipe(
        map(docs => (docs.length > 0 ? docs[0] : null)) // جلب أول وثيقة مطابقة
      );; 
    }
  // Get by title
  getDocumentByTitle(titleEn: string): Observable<any> {
    return this.firestore
      .collection(this.collectionName, ref => ref.where('title.en', '==', titleEn))
      .valueChanges({ idField: 'id' }) // جلب الـ ID مع الوثيقة
      .pipe(
        map(docs => (docs.length > 0 ? docs[0] : null)) // جلب أول وثيقة مطابقة
      );
  }
}
