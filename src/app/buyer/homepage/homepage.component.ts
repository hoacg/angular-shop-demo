import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  productList: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
   this.productService.getList().subscribe( result => {
     this.productList = result.data;
   });
  }

}
