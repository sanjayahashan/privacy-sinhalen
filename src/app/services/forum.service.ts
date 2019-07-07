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
export class ForumService {

  constructor(private firestore: AngularFirestore) { }

  createPosts(value) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("post")
            .add(value)
            .then(res => {}, err => reject(err));
    });
}

getPosts(){
  return this.firestore.collection('post').snapshotChanges();
}

getSinglepost(id: string) {
  return this.firestore.doc('replies' + id);
}

createComment(value) {
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("replies")
          .add(value)
          .then(res => {}, err => reject(err));
  });
}
}
