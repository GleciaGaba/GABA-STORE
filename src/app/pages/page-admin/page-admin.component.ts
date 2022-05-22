import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {
  newProductForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
    ){ }

  ngOnInit(): void {
    this.newProductForm = this.fb.group({
      name: ['', Validators.required],
      area: [0, Validators.required],
      population: [0, Validators.required],
      capital: ['', Validators.required]
    })
  }

  onSubmitForm() {
    console.log(this.newProductForm.value);
    const newProduct = new Product(
      this.newProductForm.value.name,
      this.newProductForm.value.description,
      this.newProductForm.value.image,
      this.newProductForm.value.price
  );
    console.log(newProduct);

    this.adminService.createNewProduct(newProduct).subscribe(() => {
      console.log("Le product a été créé !!!");
      this.router.navigateByUrl('/admin');
    });

    //fetch(url)
  }
  


}  


