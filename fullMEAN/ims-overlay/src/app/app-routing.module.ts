import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductResolver } from './services/product.resolver';

import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent,
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: FormsComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ProductDetailsComponent,
        pathMatch: 'full',
        resolve: {
          product: ProductResolver
        }
      },
      {
        path: ':id/edit',
        component: FormsComponent,
        pathMatch: 'full'
      },
      {
        path: ':id/copy',
        component: FormsComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
