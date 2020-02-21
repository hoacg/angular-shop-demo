import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductService} from './product.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: HomepageComponent
  }
]


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [ProductService]
})
export class BuyerModule { }
