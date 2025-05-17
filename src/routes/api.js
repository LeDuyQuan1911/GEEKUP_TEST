const express = require('express'); 
const routerAPI = express.Router();

const {getAllCategories,getProductsByCategory} = require('../controller/categoryController');
const {searchProducts} = require('../controller/productController');
const {createOrder,confirmOrder} = require('../controller/orderController');

const apiRoutes = (app) => { 

    // CATEGORY
    routerAPI.get('/categories', getAllCategories);
    routerAPI.get('/categories/:id/products', getProductsByCategory);

    // PRODUCT
    routerAPI.get('/products/search', searchProducts);

    // ORDER
    routerAPI.post('/orders', createOrder);
    routerAPI.post('/orders/:id/confirm', confirmOrder);



    app.use("/v1/api/", routerAPI); 
}

module.exports = apiRoutes;