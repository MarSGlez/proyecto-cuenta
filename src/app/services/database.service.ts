import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getUsers(){
    return this.firestore.collection('users').snapshotChanges();
  }

  addUser(data: any){
    return this.firestore.collection('users').add(data);
  }

  getUserById(id: string ){
    return this.firestore.collection('users').doc(id).snapshotChanges();
  }


}
