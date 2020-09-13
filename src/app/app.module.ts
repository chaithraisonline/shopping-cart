import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {HttpClientModule } from "@angular/common/http";


import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import {MatCardModule } from "@angular/material/card";
import {MatListModule } from "@angular/material/list";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from "@angular/forms";



import { FlexLayoutModule } from "@angular/flex-layout";


import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';


import { MenuComponent } from './menu/menu.component';

import { DetailService } from './services/detail.service';
import { FlowerdetailComponent } from './flowerdetail/flowerdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CollectionComponent } from './collection/collection.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FlowerdetailComponent,
    HeaderComponent,
    FooterComponent,
    CollectionComponent,
    AccountComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,


     MatGridListModule,
     MatToolbarModule,MatButtonModule,
     MatInputModule,MatDialogModule,MatCheckboxModule,MatFormFieldModule,
     MatIconModule,
     MatCardModule,
     MatListModule,
     MatProgressSpinnerModule,FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
