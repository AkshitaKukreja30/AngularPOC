import { createReducer, on } from "@ngrx/store";
import { loadProductsFail, loadProductsSuccess } from "./Product.Action";
import { state } from "@angular/animations";
import { productState } from "./Product.State";

const _productReducer = createReducer(productState, 
    on (loadProductsSuccess, (state, action) => {
        return {
            ...state,
            list : action.list,
            errorMessage : ''
        }
    }),
    on (loadProductsFail, (state, action) => {
        return {
            ...state,
            list : [],
            errorMessage : action.errorMsg
        }
    })
)

export function ProductReducer(state: any, action: any){
    return _productReducer(state, action);
}

