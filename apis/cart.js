//import db schema
const Cart = require('../model/Cart')
//get all products
// const products_all = async (req, res) => {
//     try {
//         const products = await Product.find()
//         console.log('Data sent')
//         res.json(products)
//     }
//     catch (error) {
//         console.log('Fetch error :- ', error)
//         res.json({ 'message': error })
//     }
// }
//insert a product
const add_to_cart = async (req, res) => {
    const cart = new Cart({
        p_id: req.body.p_id,
        u_id: req.body.u_id,
        p_cost: req.body.p_cost,
        p_quan:1,
        p_img:req.body.p_img
    })
    try {
        const savedCart = await cart.save();
        console.log('Product inserted into cart')
        res.send(savedCart)
    }
    catch (error) {
        res.status(400).send(error)
    }
}
//update product
const update_cart = async (req, res) => {
    let p_id = req.body.p_id
    let u_id=req.body.u_id
    let p_quan=req.body.p_quan
        try {
            const updateCart = await Cart.updateOne(
              { p_id, u_id },
              { p_quan:p_quan }
            );
          
            if (updateCart.modifiedCount > 0) {
              console.log("Cart updated successfully");
            } else {
              console.log("No matching record found or no change made");
            }
          } catch (error) {
            res.status(400).send(error);
          }
   
    }

const delete_cart = async(req,res)=>{
    let p_id = req.body.p_id
    let u_id = req.body.u_id
    try{
        const deletedProduct = await Cart.deleteOne({p_id,u_id})
        console.log(`Deleted from Cart`)
        res.send({
            'deleted':'success'
        })
    }catch(err){
        res.status(400).send(error);
    }
}

module.exports = {
    add_to_cart,
    update_cart,
    delete_cart
}
