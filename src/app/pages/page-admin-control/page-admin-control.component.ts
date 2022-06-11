import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-page-admin-control',
  templateUrl: './page-admin-control.component.html',
  styleUrls: ['./page-admin-control.component.css']
})
export class PageAdminControlComponent implements OnInit {
  public listProducts!: Product[];
 

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllProducts().subscribe((resp) => {
      console.log(resp);
      this.listProducts = resp;
    })
    
  }

  onClickDeleteProduct(productId: number | undefined) {
    console.log(productId);
    if (productId) {
      this.adminService.deleteProduct(productId).subscribe({
        next: (response) => {


          this.listProducts = this.listProducts.filter(product => product.id !== productId);


        },
        error: (err: any) => { console.error(err) }
      })
    }
   
  }

}