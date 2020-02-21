import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'seller', loadChildren: './seller/seller.module.ts#SellerModule'
  },
  {
    path: '', loadChildren: './buyer/buyer.module.ts#BuyerModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
