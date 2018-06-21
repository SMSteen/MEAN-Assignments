import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShoeListComponent } from './shoes/shoe-list/shoe-list.component';
import { ShoeNewComponent } from './shoes/shoe-new/shoe-new.component';
import { ShoeDetailsComponent } from './shoes/shoe-details/shoe-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'products', pathMatch: 'full', component: ShoeListComponent },
  {
    path: 'products/edit/:id',
    pathMatch: 'full',
    component: ShoeDetailsComponent
  },
  { path: 'products/new', pathMatch: 'full', component: ShoeNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
