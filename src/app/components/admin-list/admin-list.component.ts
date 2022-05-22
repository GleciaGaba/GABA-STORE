import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  public listProducts!: Product[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllProducts().subscribe((resp) => {
      console.log(resp);
      this.listProducts = resp;
    })
  }

  onClickDeleteProduct(productId: string | undefined) {
    console.log(productId);
    if (productId) {
      this.adminService.deleteProduct(productId).subscribe({
        next: (response: any) => {


          this.listProducts = this.listProducts.filter(product => product.id !== productId);


        },
        error: (err: any) => { console.error(err) }
      })
    }
  }

}
