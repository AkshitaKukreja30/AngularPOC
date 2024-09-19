import { ProductsDTO } from "../DTO/ProductsDTO";

export interface ProductStateModel{
    list: ProductsDTO[],
    errorMessage: string
}