import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './product.service';
import { AddProductComponent } from './add-product/add-product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'product-management', component: ProductManagementComponent
  },
  {
    path: 'product-management/add', component: AddProductComponent
  }
]

@NgModule({
  declarations: [HomepageComponent, ProductManagementComponent, AddProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService]
})
export class SellerModule { }
