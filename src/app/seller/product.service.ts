import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  apiUrl = 'http://localhost:5000/api/products';

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  public createProduct(product: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, product);
  }
}
