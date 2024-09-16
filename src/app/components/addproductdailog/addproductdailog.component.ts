import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Products } from '../../Models/products';
import { ProductsDTO } from '../../DTO/ProductsDTO';

@Component({
  selector: 'app-addproductdailog',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatCardModule, MatButtonModule],
  templateUrl: './addproductdailog.component.html',
  styleUrl: './addproductdailog.component.css'
})
export class AddproductdailogComponent implements OnInit {


_dialogData : any;
productInfo !: ProductsDTO ;

constructor(private productService: ProductService, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddproductdailogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData : any){}
  
ngOnInit(): void {
   this._dialogData = this.dialogData;
   console.log(this._dialogData);

   if(this._dialogData.id !=0 ){
    console.log(this._dialogData.id);
    this.productService.GetProduct(this._dialogData.id).subscribe(response => {
      this.productInfo = response[0];

      console.log(this.productInfo);
   
      this.productForm.setValue({
        id: this.productInfo.id,
        name: this.productInfo.name,
        price: this.productInfo.price,
        description :this.productInfo.description,
        status : this.productInfo.status
      })

      console.log("From Init");
      console.log(this.productForm);
      console.log(this.productForm.value.id);

    });

   }

  }


productForm = this.formBuilder.group({
  id: this.formBuilder.control(null),
  name: this.formBuilder.control('', Validators.required),
  description: this.formBuilder.control('', Validators.required),
  price: this.formBuilder.control(1, Validators.required),
  status: this.formBuilder.control(true),
})
 
AddProduct(){
  let newProduct : Products = {
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

Cancel(){
  console.log("inside cancel");
  this.dialogRef.close();
}

UpdateProduct(){
  console.log("inside update");

  let updatedProduct : ProductsDTO = {
    id: this.productForm.value.id ,
    description : this.productForm.value.description as string,
    price: this.productForm.value.price as number,
    name: this.productForm.value.name as string,
    status : this.productForm.value.status as boolean
  };

  console.log(updatedProduct);

  this.productService.Updateproduct(updatedProduct).subscribe( result => {
    alert("Product Updated successfully");
    this.productForm.reset();
    this.dialogRef.close();
  });

}

Save(){
  if(this.productForm.valid){
  {
  console.log("in save");
  console.log(this.productForm.value);
  console.log(this.productForm.value.id);
  if(this.productForm.value.id == null ){
    this.AddProduct();
  }
  else{
    this.UpdateProduct();
  }
}
  }
}


}

