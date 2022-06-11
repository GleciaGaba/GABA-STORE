import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {
  public product!: any;
  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    const routeParams = this.activateRoute.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));
    this.productService.getAllProducts().subscribe((resp: any) => {
      this.product = resp.ind((product: { id: number; }) => product.id === productId);
    })
  }

}
