const User = require('../models/user');
const jwt = require('jsonwebtoken'); // Import the jwt library

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({ "message": "User Created Successfully." })
    } catch (error) {
        res.status(501).json({ error: error })
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

const updateUser = async (req, res) => {
    try {
        const { id } = req.params; // this id variable should be exactly same as the route param
        const updatedUser = await User.updateOne({ _id: id }, req.body, { new: true });
        res.status(203).send(updatedUser);
    } catch (error) {
        res.status(501).json({ "error": error });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndRemove({ _id: id });
        res.status(204);
    } catch (error) {
        res.status(501).json({ "error": error });
    }
}

const dashboard = async(req, res) =>{
    try{
        res.send({msg : "Hello in the token protected API."});
    }catch(err){
        res.status(501);
    }
}

const loginWithoutToken = async (req, res) => {
    try {
        /* console.log(req.body); */
        const { username, password } = req.body;

        const user = await User.findOne({ username, password });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({
            message: 'Logged in successfully',
            username: user.username,
            id: user._id
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Some internal error' });
    }
};
const login = async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: 'User not found' });
        if (user.password !== password) return res.status(401).json({ error: 'Invalid password, try again!!' });
        var token = GenerateToken(user);
        /* console.log(token) */

        return res.status(200).json({
            message: 'Logged in successfully',
            username: username,
            fullname: user.firstName + ' ' + user.lastName,
            userid: user._id,
            role: user.role,
            token: token,
        });
    } catch (err) {
        return res.status(500).json({ message: err });
    }

};
/*
    Helping functions
*/

const GenerateToken = (user) => {

    const payload = {

        role: user.role,

        id: user._id,

    };

    const token = jwt.sign(payload,'IWTGO26f2003');

    return token;

};

module.exports = { createUser, getUser, updateUser, deleteUser, loginWithoutToken, login, dashboard }