import Axios from "./caller.service";

let getAllArticle = () => {
    return Axios.get('/article/')
}

let getArticleDetail = (id) => {
    return Axios.get('/article/'+id + '/')
}

let createArticle = () => {
    return Axios.post('/article/')
}
export const ArticleService = {
    getAllArticle, getArticleDetail, createArticle
}