import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css',
  '../forum/css/linearicons.css',
  '../forum/css/font-awesome.min.css',
  '../forum/css/bootstrap.css',
  '../forum/css/magnific-popup.css',
  '../forum/css/nice-select.css',
  '../forum/css/hexagons.min.css',
  '../forum/css/animate.min.css',
  '../forum/css/owl.carousel.css',
  '../forum/css/main.css']
})
export class RequestComponent implements OnInit {
newRequest: FormGroup;

  constructor(private request:RequestsService) { }

  ngOnInit() {
    this.newRequest = new FormGroup({
      user_id: new FormControl(),
      request: new FormControl(),
      url: new FormControl()
    });


  }
  reset() {
    this.newRequest.reset();
  }
  
  addRequest(value){
    this.request.createPosts(value)
    .then(res => {
  
    });
    this.reset();
  }
}
