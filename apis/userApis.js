//import db schema
const User = require('../model/User')
//Authentication
const authentication = async (req, res) => {
    let u_id = req.body.u_id
	let u_pwd = req.body.u_pwd
	let obj = { u_id, u_pwd }
    console.log(obj);
	try{
        const user = await User.find(obj);
        console.log(user);
        if(user.length>0){
            console.log('Authenticated');
            res.send({
                'Authentication':'Success'
            })
        }
        else{
            console.log('Invalid Credentials');
            res.send({
                'Authentication':'Failed'
            })
        }
    }
    catch(err){
        res.status(400).send(err);
    }

}

const new_user=async(req,res)=>{
    const user = new User({
        u_id: req.body.u_id,
        u_name: req.body.u_name,
        u_pwd: req.body.u_pwd,
        u_u_contact:req.body.u_u_contact,
        u_u_email:req.body.u_u_email,
        u_addr:req.body.u_addr
    })
    try {
        const savedUser = await user.save()
        console.log('User inserted')
        res.send(savedUser);
    }
    catch (error) {
        res.status(400).send(error)
    }
}

const update_user = async (req, res) => {
    let u_id = req.body.u_id
    const user = {
        u_name: req.body.u_name,
        u_u_contact:req.body.u_u_contact,
        u_addr:req.body.u_addr,
        u_u_email:req.body.u_u_email,
    }
    try {
        const updateUser = await User.updateOne(
            { u_id }, user
        )
        if (updateProduct.modifiedCount != 0) {
            console.log('Product Updated', updateUser)
            res.send({ 'update': 'success' })
        }
        else {
            console.log('Product not updated')
            res.send({ 'update': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    authentication,
    new_user,
    update_user
}