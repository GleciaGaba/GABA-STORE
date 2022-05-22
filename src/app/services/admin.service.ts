import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }

  getAllProducts(): Observable<Product[]> {
    const token = localStorage.getItem("token");

    return this.http.get<Product[]>(`${this.urlApi}/product/list`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  createNewProduct(newProduct: Product) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/api/admin`, newProduct,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  deleteProduct(productId: string) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/products/${productId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
}
