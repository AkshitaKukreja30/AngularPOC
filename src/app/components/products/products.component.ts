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
import { AddproductdailogComponent } from '../../addproductdailog/addproductdailog.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSort, MatButtonModule, MatInputModule, CommonModule, MatDialogModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

constructor(private productService: ProductService, private matDialog : MatDialog){}
 

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


EditProduct(id: number){

}

DeleteProduct(id: number){

}

AddProduct(): void{
this.OpenPopUp();
}

OpenPopUp(){
this.matDialog.open(AddproductdailogComponent,
  {
    width: '40%',
    height: '60%'
  }).afterClosed().subscribe(item => {
    this.LoadProducts();
  });
}

}


