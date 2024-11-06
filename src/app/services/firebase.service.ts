import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: AngularFirestore) {}

  getItems( collection: string ): Observable<any[]> {
    return this.firestore.collection(collection).valueChanges();
  }
  updateProduct(id: string, data: any): Promise<void> {
    return this.firestore.collection('product').doc(id).update(data);
  }

  deleteProduct(id: string): Promise<void> {
    return this.firestore.collection('product').doc(id).delete();
  }
}
