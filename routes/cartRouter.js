//import express module
const express=require('express')
//create router instance
const router=express.Router()
//import productApi
const cartApi=require('../apis/cart')
//fetch all records
// router.get('/fetch',productApi.products_all)
router.post('/add',cartApi.add_to_cart);
router.put('/update',cartApi.update_cart);
router.delete('/delete',cartApi.delete_cart);
// router.delete('/delete',productApi.delete_product)
// router.put('/update',productApi.update_product)

//export router
module.exports=router