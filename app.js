const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller')

app.use(cors());
app.use(
    express.urlencoded({extended: true})
);

app.use(express.json());


app.get("/users", (req, res) =>{
    controller.getUser((req, res, next) =>{
        res.send();
    });
});

// app.get("/user", (req, res) =>{
//     const id = req.query.id;
//     controller.getUserById(id, user =>{
//         res.send(user);
//     })
//     });

app.post('/createuser',(req, res) =>{
    controller.addUser(req.body, (callback) =>{
        res.send();
    });
});

app.post('/updateuser',(req, res) =>{
    controller.updateUser(req.body, (callback) =>{
        res.send(callback);
    });
});

app.post('/deleteuser',(req, res) =>{
     controller.deleteUser(req.body, (callback) =>{
        res.send(callback);
    });
});

module.exports = app;