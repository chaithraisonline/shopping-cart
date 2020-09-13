import { Injectable } from '@angular/core';
import { FlowerdetailComponent } from "../flowerdetail/flowerdetail.component";
import { Flower } from "../sharedcls/flower";
import { Flowermodel } from "../sharedcls/Flowermodel";


import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, delay } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DetailService 
{
  
  
constructor(private http:HttpClient){}
      getflowers():Observable<Flowermodel[]>
      {
        return of(Flower).pipe(delay(2000));
      
      }

    
      getflower(id:string):Observable<Flowermodel>
      {
        return of(Flower.filter((flower)=>(flower.id===id))[0]).pipe(delay(2000));
      }
  getFlowerIds():Observable<number[]| any>{
    return this.getflowers().pipe(map(flowers=>flowers.map(flower=>flower.id)));
  }  
    
}
