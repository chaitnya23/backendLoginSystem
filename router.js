const express = require('express');
const router = new express.Router();
const users = require('../database/models/users');



//GET requests
router.get('/' ,(req ,res)=>{
    
    res.render('index');

})

router.get('/register' ,(req ,res)=>{
    
    res.render('register');
})

router.get('/login' ,(req ,res)=>{

    res.render('login');
})

router.get('/home' ,(req ,res)=>{
    res.send("its a home page")
})

//POST requests
router.post('/home' ,async (req ,res)=>{
    
    try{


        if(req.body.userPass === req.body.confirmpass){
            
            const newUser = new users({
                
                name:req.body.Name,
                email:req.body.userEmail,
                password:req.body.userPass,
                confirmpass:req.body.confirmpass, 
                userName:req.body.userName,
                phone:req.body.userPhone
                
            })
            const user = await newUser.save();
            res.render("home" ,{
                name:user.name
            });
            
        }
        
        else{
            res.send("cheak the password again")
        }
    }catch(e){
        res.status(404).send(e);
    }
})

router.post('/home' ,async (req ,res)=>{
    try{

        const username = req.body.username;
        const password = req.body.password;

        const user = await users.findOne({userName:username});

        if(user.password === password){
            res.render("home" ,{
                name:user.userName,
            });
        }
        else{
        res.status(400).send("invalid username or password");

        }

    }catch(e){
        res.status(400).send("invalid username or password");
    }
})
module.exports = router;