const express = require('express');
const cors = require('cors');
const { engine } = require('express-handlebars');
const { loginPage, dashboardPage, loginProcess, attendancePage } = require('./controllers/userControllers');
const path = require('path');

const app = express();
app.engine('hbs', engine({ extname: 'hbs', defaultLayout: false }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.get('/', loginPage);
app.get('/dashboard', dashboardPage);
app.post('/login', loginProcess);
app.get('/attendance', attendancePage);
console.log('Views directory:', path.join(__dirname, 'views'));

// For Vercel to handle the requests, export the app
module.exports = app;
