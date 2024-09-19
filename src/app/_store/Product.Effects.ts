import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ProductService } from "../Services/product.service";
import { LOAD_PRODUCTS_SUCCESS, loadProductsAction, loadProductsFail, loadProductsSuccess } from "./Product.Action";

@Injectable()
export class ProductEffect{
    constructor(private actions$: Actions, private productService: ProductService){}

    _loadproduct = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProductsAction),
            exhaustMap((action) => {
                return this.productService.GetProducts().pipe(
                    map((data) => {
                        return loadProductsSuccess({ list: data })
                    })
                )
            })
        )
    )




}