import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {

  productList: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getList().subscribe( result => {
      this.productList = result.data;
    });
  }

}
