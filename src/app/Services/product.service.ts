import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsDTO } from '../DTO/ProductsDTO';
import { Products } from '../Models/products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient : HttpClient) { }


  baseUrl : string = "http://localhost:3000/products"

  GetProduct(id: number){
    return this.httpClient.get<ProductsDTO>(this.baseUrl+"/" + id);
  }

  GetProducts() {
    return this.httpClient.get<ProductsDTO[]>(this.baseUrl);
  }

  CreateProduct(data : Products){
    return this.httpClient.post(this.baseUrl, data);
  }

  Updateproduct(data: Products) {
    return this.httpClient.put(this.baseUrl + '/' + data.id, data);
  }

  RemoveProduct(id: number){
    return this.httpClient.delete(this.baseUrl+ "/"+ id);
  }




}
