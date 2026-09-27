const express = require('express')
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


let userDetails = []

app.post('/signup', function(req,res){
    const newUser = {
        'username':req.body.username,
        'email':req.body.email,
        'password':req.body.password
    }

    userDetails.push(newUser)

    res.json({
        success:true,
        alert:'Account created successful'
    })
})

app.post('/',function(req,res){
    const user = userDetails.find(function(user){
        return user.email === req.body.email && user.password === req.body.password
    })

    if(user){
        return res.json({
            success:true,
            message:'Login Successful',
            username:user.username
        })
    }

    return res.json({
        success:false,
        message:'Invalid email or password'
    })
})

app.listen(process.env.PORT || 5000, function()
{
    console.log('started....')
})
