import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Products } from '../Models/products';
import { ProductsDTO } from '../DTO/ProductsDTO';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient : HttpClient) { }


  baseUrl : string = "http://localhost:3000/products"

  GetProduct(id: any){
    return this.httpClient.get<ProductsDTO[]>(this.baseUrl+"?id=" + id);
  }

  GetProducts() {
    return this.httpClient.get<ProductsDTO[]>(this.baseUrl);
  }

  CreateProduct(data : Products){
    return this.httpClient.post(this.baseUrl, data);
  }

  Updateproduct(data: ProductsDTO) {
    return this.httpClient.put(this.baseUrl + '/' + data.id, data);
  }

  RemoveProduct(id: number){
    return this.httpClient.delete(this.baseUrl+ "/"+ id);
  }




}
