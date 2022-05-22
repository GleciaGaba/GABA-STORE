import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-product-list',
  templateUrl: './page-product-list.component.html',
  styleUrls: ['./page-product-list.component.css']
})
export class PageProductListComponent implements OnInit {
  public listProducts!: any[];

  constructor() { }

  ngOnInit(): void {
    produit:
    fetch("http://localhost:8080/products/list")
      .then((datas) => datas.json())
      .then((response) => {
        console.log(response);
        this.listProducts = response;
      })
   
  }

  
  }