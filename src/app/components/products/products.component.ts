import { Component, OnInit, ViewChild } from '@angular/core';
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


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSort, MatButtonModule, MatInputModule, CommonModule, MatDialogModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

constructor(private productService: ProductService, private matDialog : MatDialog, private toasterService: ToastrService){}
 

displayedColumns: string[] = ['id', 'name', 'description', 'price', 'status', 'action'];
dataSource! : MatTableDataSource<ProductsDTO>;
@ViewChild(MatPaginator) paginator !: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;


ngOnInit(): void {
    this.LoadProducts();
  }

productList : ProductsDTO []= []


LoadProducts(){
  return this.productService.GetProducts().subscribe(
    items =>
      { 
        this.productList = items
        this.dataSource = new MatTableDataSource(this.productList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

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


