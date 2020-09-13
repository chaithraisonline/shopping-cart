import { Component, OnInit} from '@angular/core';
import { Flowermodel } from ".././sharedcls/Flowermodel";
import {DetailService  } from "../services/detail.service";
import {Router  } from "@angular/router";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
 flowers:Flowermodel[];
 selectedFlower:Flowermodel;
 
   constructor(private detailservice:DetailService,private router:Router){}
   ngOnInit(){

     this.detailservice.getflowers()
     .subscribe(
      flowers=>this.flowers=flowers
     );
   } 
   onSelect(pics:Flowermodel)
   {
     this.selectedFlower=pics;
     this.router.navigate(["/collection",pics.id]);
   }


}
