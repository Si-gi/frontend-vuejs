import Axios from "./caller.service";

let getAllProduct = () => {
    return Axios.get('/admin/product/')
}

let getProductDetail = (id) => {
    return Axios.get('/admin/product/'+id +'/')
}

let createProduct = (product) => {
    return Axios.post('/admin/product/', product)
}
export const ProductService = {
    getAllProduct, getProductDetail, createProduct
}