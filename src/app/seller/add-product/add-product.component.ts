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
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;

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
    this.isLoading = true;
    const product = this.formGroup.value;
    this.productService.createProduct(product).subscribe( result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Thêm thành công!';
      this.isLoading = false;
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Thêm thất bại!';
      this.isLoading = false;
      this.formGroup.reset();
    });
  }

}
