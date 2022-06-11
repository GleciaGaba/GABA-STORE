import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-vitamines',
  templateUrl: './page-vitamines.component.html',
  styleUrls: ['./page-vitamines.component.css']
})
export class PageVitaminesComponent implements OnInit {
  public listProducts!: any[];

 
  constructor(private activateRoute: ActivatedRoute,
    private router:Router,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((resp:any)=> {
      this.listProducts=resp;
    })
  }

}
