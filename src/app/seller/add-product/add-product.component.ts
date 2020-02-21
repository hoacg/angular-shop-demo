import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      image: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    });
  }

  save() {
    const product = this.formGroup.value;
    this.productService.createProduct(product).subscribe( result => {
      alert('Thêm thành công!');
    }, error => {
      alert('Thêm thất bại!');
    });
  }

}
