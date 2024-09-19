import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductStateModel } from "../Models/ProductStateModel";

const getProductState = createFeatureSelector<ProductStateModel>('product');

export const getProductList = createSelector(getProductState, (state) => {
    return state.list;
})

