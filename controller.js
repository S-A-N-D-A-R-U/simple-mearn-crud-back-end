const User = require('./model');


const getUser = (req, res, next) => {
    User.find().then(response => {
        res.json({response})
    }).catch(e => {
        res.json({e})
    });
};

const addUser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
    .then(response => {
        res.json({response})
    }).catch(e => {
        res.json({e})
    });
};

const updateUser = (req, res, next) => {
    const {id,  name} =req.boby;
    User.updateOne({id: id}, { $set: {name: name}})
    .then(response => {
        res.json({response})
    }).catch(e => {
        res.json({e})
    });
};

const deleteUser = (req, res, next) => {
    const id =req.boby.id;
    User.deleteOne({id: id})
    .then(response => {
        res.json({response})
    }).catch(e => {
        res.json({e})
    });
};

// const getUsers = (cb) => {
//     cb(users);
// };

// const getUserById =(id, cb) =>{
// const user = users.find(user => user.id == id);
// cb(user);
// };

exports.getUser = getUser;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
