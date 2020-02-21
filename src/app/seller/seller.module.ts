import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './product.service';

const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'product-management', component: ProductManagementComponent
  }
]

@NgModule({
  declarations: [HomepageComponent, ProductManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [ProductService]
})
export class SellerModule { }
