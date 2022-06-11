import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
   }
  getAllCategories(): Observable<Category[]> {


    return this.http.get<Category[]>(`${this.urlApi}/categories`);

  }

}
