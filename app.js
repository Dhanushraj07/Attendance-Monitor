const express = require('express');
const app = express();
const {engine} = require('express-handlebars')
const {loginPage,dashboardPage, loginProcess, attendancePage} = require('./controllers/userControllers')
const path = require('path')
const port = process.env.PORT || 8000;
app.engine('hbs',engine({extname:'hbs',defaultLayout:false}))
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded())
app.get('/',loginPage); 
app.get('/dashboard',dashboardPage); 
app.post('/login',loginProcess); 
app.get('/attendance',attendancePage)
app.listen(port,()=>{
    console.log(`Port is running on ${port}`);
})