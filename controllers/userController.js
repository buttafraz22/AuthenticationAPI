const User = require('../models/user');

const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);

        res.status(201).json({"message" : "User Created Successfully."})
    }catch(error){
        res.status(501).json({error : error})
    }
}

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users).status(202);
    } catch (error) {
        res.status(501);
    }
}

const updateUser = async (req, res) =>{
    try {
        const { id } = req.params; // this id variable should be exactly same as the route param
        console.log(id); 
    } catch (error) {
        res.status(501).json({"error" : error})
    }
}

module.exports = {createUser, getUser, updateUser}