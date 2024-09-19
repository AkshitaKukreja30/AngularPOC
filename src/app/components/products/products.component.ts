import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ProductsDTO } from '../../DTO/ProductsDTO';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Products } from '../../Models/products';
import { ToastrService } from 'ngx-toastr';
import { AddproductdailogComponent } from '../addproductdailog/addproductdailog.component';
import { catchError, of, Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSort, MatButtonModule, MatInputModule, CommonModule, MatDialogModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy{

constructor(private productService: ProductService, private matDialog : MatDialog, private toasterService: ToastrService){}
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

subscriptions = new Subscription();
 

displayedColumns: string[] = ['id', 'name', 'description', 'price', 'status', 'action'];
dataSource! : MatTableDataSource<ProductsDTO>;
@ViewChild(MatPaginator) paginator !: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;


ngOnInit(): void {
    this.LoadProducts();
  }

productList : ProductsDTO []= []


LoadProducts(){
  let subscription1 =  this.productService.GetProducts().pipe(
    catchError(error => {
      // Handle the error here (you can log it or show an error message)
      console.error('Error loading products:', error);
      // Return an empty array or other default value in case of error
      return of([]); // Return an observable of empty array
    })
  )
  .subscribe(
    items =>
      { 
        this.productList = items
        this.dataSource = new MatTableDataSource(this.productList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

      this.subscriptions.add(subscription1);
      return subscription1;
}


EditProduct(id: any){
  this.OpenPopUp(id, "Edit Product");
}

DeleteProduct(id: any){
if(confirm("Are you sure you want to delete this?")){
  this.productService.RemoveProduct(id).subscribe(result => {
    this.toasterService.success('Deleted successfully');
    this.LoadProducts();
  });

}

}

AddProduct(): void{
this.OpenPopUp(0,"Add Product");
}

OpenPopUp(id: number, title : string){
this.matDialog.open(AddproductdailogComponent,
  {
    width: '40%',
    height: '60%',
    data: {
      id: id,
      title : title
    }
  }).afterClosed().subscribe(item => {
    this.LoadProducts();
  });
}

}


