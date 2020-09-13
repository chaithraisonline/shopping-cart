import { Component, OnInit, Input } from '@angular/core';
import { Flowermodel } from "../sharedcls/Flowermodel";
import { DetailService } from "../services/detail.service";

import {ActivatedRoute,Router,Params} from "@angular/router";
import { Location } from "@angular/common";
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-flowerdetail',
  templateUrl: './flowerdetail.component.html',
  styleUrls: ['./flowerdetail.component.css']
})




export class FlowerdetailComponent implements OnInit {

  @Input()
   pics:Flowermodel;
   flowerIds:string[];
   prev:string;
   next:string;
   flowers:Flowermodel[];
   selectedFlower:Flowermodel;

  constructor(private route:ActivatedRoute,
              private router:Router,
             private detailservice:DetailService,
             private location:Location) { }

  ngOnInit() {
    let pics= this.detailservice.getFlowerIds().subscribe(flowerIds=>this.flowerIds=flowerIds);
     
      this.route.params.pipe(switchMap((params:Params)=>this.detailservice.getflower(params['id'])))
      .subscribe(pics=>{this.pics=pics;this.setprevNext(pics.id);});

}
setprevNext(flowerId:string){
  const index=this.flowerIds.indexOf(flowerId);
  this.prev=this.flowerIds[(this.flowerIds.length+index-1)%this.flowerIds.length];
  this.next=this.flowerIds[(this.flowerIds.length+index+1)%this.flowerIds.length];
 
}
goback():void{
  this.location.back();
}

gocart(pics:Flowermodel){
  
  
    this.selectedFlower=pics;
   // this.router.navigate(["/collection",pics.id]);
  

}

}
