//import express module
const express=require('express')
//create router instance
const router=express.Router()
//import userApi
const userApi=require('../apis/userApis')
//fetch all records
router.get('/auth',userApi.authentication)
router.post('/register',userApi.new_user)
router.put('/update',userApi.update_user)
//export router
module.exports=router