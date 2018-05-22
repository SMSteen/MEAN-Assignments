import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ProductdataService } from './productdata.service';

import { AppComponent } from './app.component';
import { ShoeListComponent } from './shoes/shoe-list/shoe-list.component';
import { ShoeNewComponent } from './shoes/./shoe-new/shoe-new.component';
import { ShoeDetailsComponent } from './shoes/./shoe-details/shoe-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoeListComponent,
    ShoeNewComponent,
    ShoeDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }