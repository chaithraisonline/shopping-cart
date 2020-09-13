import { Component, OnInit } from '@angular/core';
import { Flowermodel } from '../sharedcls/Flowermodel';
import { DetailService } from '../services/detail.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  pics:Flowermodel;
  flowerIds:string[];
  constructor(private detailservice:DetailService) { }

  ngOnInit() {
    let pics= this.detailservice.getFlowerIds().subscribe(flowerIds=>this.flowerIds=flowerIds);

  }


}