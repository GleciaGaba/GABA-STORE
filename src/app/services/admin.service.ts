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

    return this.http.get<Product[]>(`${this.urlApi}/products/names`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getProductById(productId: string): Observable<Product> {
    const token = localStorage.getItem("token");

    return this.http.get<Product>(`${this.urlApi}/products/onlyid/${productId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  updateCountry(product: Product): Observable<any> {
    const token = localStorage.getItem("token");

    const body = {
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      category: product.category
    }

    return this.http.put<any>(`${this.urlApi}/products/{id}${product.id}`,
      body,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  createNewProduct(newProduct: Product) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/products/create`, newProduct,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  deleteProduct(productId: string) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/products/{id}${productId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
}
