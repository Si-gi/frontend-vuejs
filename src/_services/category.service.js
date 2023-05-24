import Axios from "./caller.service";

let getAllCategory = () => {
    return Axios.get('/category/')
}

let getCategoryDetail = (id) => {
    return Axios.get('/admin/category/'+id+ '/')
}

let updateCategory = (category) => {
    return Axios.patch('/admin/category/' + category.id +'/', { "category": category })
}
let createCategory = (category) => {
    return Axios.post('/admin/category/', category)
}

let deleteCategory = (id) => {
    return Axios.delete('/admin/category/' + id + '/')
}
export const categoryService = {
    getAllCategory, getCategoryDetail, createCategory, updateCategory, deleteCategory
}