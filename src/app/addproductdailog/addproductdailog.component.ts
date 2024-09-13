import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Products } from '../Models/products';

@Component({
  selector: 'app-addproductdailog',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatCardModule, MatButtonModule],
  templateUrl: './addproductdailog.component.html',
  styleUrl: './addproductdailog.component.css'
})
export class AddproductdailogComponent {


constructor(private productService: ProductService, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddproductdailogComponent>){}


productForm = this.formBuilder.group({
  id: this.formBuilder.control({ value: 0, disabled: true }),
  name: this.formBuilder.control('', Validators.required),
  description: this.formBuilder.control('', Validators.required),
  price: this.formBuilder.control(1, Validators.required),
  status: this.formBuilder.control(true),
})
 
AddProduct(){
if(this.productForm.valid){
  let newProduct : Products = {
    id: 0,
    name: this.productForm.value.name as string,
    description: this.productForm.value.description as string,
    price: this.productForm.value.price as number,
    status: this.productForm.value.status as boolean
  } 

this.productService.CreateProduct(newProduct).subscribe( result => {
  alert("Product created successfully");
  this.productForm.reset();
  this.dialogRef.close();
});

}

}

Cancel(){
  this.dialogRef.close();
}

}
