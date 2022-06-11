import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-page-admin-update',
  templateUrl: './page-admin-update.component.html',
  styleUrls: ['./page-admin-update.component.css']
})
export class PageAdminUpdateComponent implements OnInit {
updateProductForm!: FormGroup;
 

  constructor(private activateRoute: ActivatedRoute,
    private adminService: AdminService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      console.log(param['id-product']);
      this.adminService.getProductById(param['id-product']).subscribe((product: Product) => {
        console.log(product);
        this.updateProductForm = this.fb.group({
          name: [product.name, Validators.required],
          description: [product.description, Validators.required],
          price: [product.price, Validators.required],
          imageUrl: [product.imageUrl, Validators.required],
          id: [product.id]
        });
      });
    })
  }
  onSubmitForm() {
    const productToUpdate = this.updateProductForm.value;

    this.adminService.updateProduct(productToUpdate).subscribe((resp) => {
     
      this.router.navigateByUrl('/admincontrol');
    })

  }

}
