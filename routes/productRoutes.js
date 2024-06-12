//import express module
const express=require('express')
//create router instance
const router=express.Router()
//import productApi
const productApi=require('../apis/productApis')
//fetch all records
router.get('/fetch',productApi.products_all)
router.post('/insert',productApi.insert_product)
router.delete('/delete',productApi.delete_product)
router.put('/update',productApi.update_product)

//export router
module.exports=router