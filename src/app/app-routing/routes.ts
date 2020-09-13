import { Routes } from "@angular/router";

import {CollectionComponent  } from "../collection/collection.component";
import {MenuComponent  } from "../menu/menu.component";
import { FlowerdetailComponent } from "../flowerdetail/flowerdetail.component";
import { CartComponent } from "../cart/cart.component";

export const routes:Routes=[


{path:"collection", component:CollectionComponent},
{path:"collection/:id", component:FlowerdetailComponent},
{path:"cart", component:CartComponent}, 

 {path:"menu", component:MenuComponent},
 {path:"",redirectTo:'/menu',pathMatch:'full'}




];