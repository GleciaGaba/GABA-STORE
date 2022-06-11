import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getAllProductById(arg0: any) {
    throw new Error('Method not implemented.');
  }

  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }

  getAllCategories(): Observable<Category[]> {
    const token = localStorage.getItem("token");

    return this.http.get<Category[]>(`${this.urlApi}/category/list`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getAllProducts(): Observable<Product[]> {
    const token = localStorage.getItem("token");

    return this.http.get<Product[]>(`${this.urlApi}/products/list`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getProductById(productId: number): Observable<Product> {
    const token = localStorage.getItem("token");

    return this.http.get<Product>(`${this.urlApi}/products/${productId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  updateProduct(product: Product): Observable<any> {
    const token = localStorage.getItem("token");

    const body = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl


    }

    return this.http.put<any>(`${this.urlApi}/products/${product.id}`,
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

  deleteProduct(productId: number) {
    const token = localStorage.getItem("token");

    return this.http.delete(
      `${this.urlApi}/products/${productId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
}
