const express = require("express"); 
const app = express(); 

app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true }));

const router = require('./router');

app.set('view engine', 'ejs')

app.use('/', router);

app.listen(5000, () => {
    console.log("Servidor escuchando en http://localhost:5000");
});

