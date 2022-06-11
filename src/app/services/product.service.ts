import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }

  getAllProducts(): Observable<Product[]> {
    

    return this.http.get<Product[]>(`${this.urlApi}/products/list`);
    
  }

   
  
}
