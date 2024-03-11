import axios from '../axios';
const getAllCategories = async () => {

    return await axios.get('/getAllCategories');

};
const getAllUsers = async (id) => {
    return await axios.get(`/api/getInfoUser?id=${id}`);
}
const getAllProducts = async () => {
    return await axios.get('/getAllProducts')
}
const get10NewestProduct = async () => {
    return await axios.get('/get10NewestProduct')
}
const get10BestSelling = async () => {
    return await axios.get('/get10BestSellingProduct')
}
const get10Promotion = async () => {
    return await axios.get('/get10NewestPromotionProduct')
}
const createNewUser = (data) => {
    return axios.post('/api/create-new-user', data)
}
export {
    getAllCategories, getAllProducts, get10NewestProduct, get10BestSelling,
    get10Promotion, getAllUsers, createNewUser
}