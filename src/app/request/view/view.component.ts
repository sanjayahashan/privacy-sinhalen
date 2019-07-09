import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { request } from '../../models/request.model';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css',
  '../../forum/css/linearicons.css',
  '../../forum/css/font-awesome.min.css',
  '../../forum/css/bootstrap.css',
  '../../forum/css/magnific-popup.css',
  '../../forum/css/nice-select.css',
  '../../forum/css/hexagons.min.css',
  '../../forum/css/animate.min.css',
  '../../forum/css/owl.carousel.css',
  '../../forum/css/main.css']
})
export class ViewComponent implements OnInit {
  list: request[];
  constructor(private request:RequestsService) { }

  ngOnInit() {

    this.request.getRequests().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as request;
      });
    });

  }

}
