import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AdminService } from 'src/app/services/admin.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {
  newProductForm!: FormGroup;
  public categories!: any;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private categoryService: CategoryService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    this.newProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      image: ['', Validators.required],
      category: [, Validators.required]
    })

    this.categoryService.getAllCategories().subscribe((response: any) => {
      console.log(response);
      this.categories = response;
    })

  }

  onSubmitForm() {

    console.log(this.newProductForm.value);
    const newProduct = new Product(
      this.newProductForm.value.name,
      this.newProductForm.value.description,
      this.newProductForm.value.price,
      this.newProductForm.value.image,
      this.newProductForm.value.category
    );
    console.log(newProduct);




    this.adminService.createNewProduct(newProduct).subscribe(() => {
      console.log("Le product a été créé.");
      this.router.navigateByUrl('/admincontrol');
    });

  }




}


