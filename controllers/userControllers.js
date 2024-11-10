const { getUser } = require("../models/userModels")


exports.loginPage = (req, res, next) => {
    res.render('login')
}

exports.dashboardPage = (req, res, next) => {
    const user = getUser(req.query.email)
    //console.log(req.query.email)
    res.render('dashboard',{
        user
    })
}

exports.attendancePage = (req,res,next) =>{
    const user = getUser(req.query.email)
    //console.log(req.query.email)
    res.render('attendance',{
        user
    })
}

exports.loginProcess = (req, res, next) => {
    //get user data 
    const user = getUser(req.body.email)
    if(user !==null && user.password === req.body.password ) {
        res.redirect('/dashboard?email='+req.body.email)
    }else if(user === null) {
        res.render('error', {
            message: 'No User exists with this Email'
        })
    }else{
        res.render('error', {
            message: 'Invalid Credentials'
        })
    }
}