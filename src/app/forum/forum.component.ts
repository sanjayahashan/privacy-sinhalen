import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl  } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms'
import { post } from '../models/post.model'
import {Router} from '@angular/router';
import { SelectionChange } from '@angular/cdk/collections';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css',  
  'css/linearicons.css',
  'css/font-awesome.min.css',
  'css/bootstrap.css',
  'css/magnific-popup.css',
  'css/nice-select.css',
  'css/hexagons.min.css',
  'css/animate.min.css',
  'css/owl.carousel.css',
  'css/main.css']
})
export class ForumComponent implements OnInit {
list: post[];
newPost: FormGroup;
newComment: FormGroup;
  constructor(private forum: ForumService, private router: Router) { }
  
  ngOnInit() {
    this.newPost = new FormGroup({
      user: new FormControl(),
      post: new FormControl(),
      description: new FormControl(),
      date_added: new FormControl(),
    });

    this.newComment = new FormGroup({
      user_id: new FormControl(),
      reply: new FormControl(),
      post_id: new FormControl(),
      date_a: new FormControl(),
    });

    this.forum.getPosts().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as post;
      });
    });
  }

  addPost(value){
    this.forum.createPosts(value)
       .then(res => {

       });
       this.reset();
       this.router.navigateByUrl('/forum')
}
reset() {
  this.newPost.reset();
}
reset2() {
  this.newComment.reset();
}

addComment(value){
  this.forum.createPosts(value)
  .then(res => {

  });
  this.reset2();
  this.router.navigateByUrl('/forum')
}
}
