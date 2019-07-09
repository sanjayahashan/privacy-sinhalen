import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../services/forum.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl  } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { post } from '../../models/post.model';
import {Router, ActivatedRoute} from '@angular/router';
import { SelectionChange } from '@angular/cdk/collections';
import { reply } from '../../models/comment.model';


@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css',
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
export class RepliesComponent implements OnInit {
 newComment: FormGroup;
 list: post[];
 list2: reply[];
 forump: post;
 list3: reply[];
 postid:string;
 i:number;
 title:string;
 j:number;

  constructor(private forum: ForumService, private router: Router,private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.postid = this.route.snapshot.paramMap.get("id")

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


      this.forum.getComments().subscribe(actionArray => {
        this.list2 = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as reply;
        });
      });

      console.log(this.list2)
      for(this.i=0; this.i < this.list.length;this.i++){
        if(this.list[this.i].id == this.postid){
          this.forump = this.list[this.i];
        }
      }
      for(this.j=0; this.j < this.list2.length;this.j++){
        if(this.list2[this.j].post_id == this.postid){
          this.list3.push(this.list2[this.j]);
        }
      }

    });

  }

  addComment(value){
    value.post_id = this.postid;
    this.forum.createComment(value)
    .then(res => {
  
    });
    this.reset2();
  }
  reset2() {
    this.newComment.reset();
  }

}
