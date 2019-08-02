import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { auth } from 'firebase/app';
import { from } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private firestore: AngularFirestore) { }

  createPosts(value) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("requests")
            .add(value)
            .then(res => {}, err => reject(err));
    });
}

getRequests(){
  return this.firestore.collection('requests').snapshotChanges();
}

}
