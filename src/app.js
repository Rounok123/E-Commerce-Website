// INCLUDING THE MODULES
const express = require("express");
const app = express();
const path = require('path');
const hbs = require('hbs');
const { url } = require("inspector");
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cont', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 80;


//MONGOOSE RELATED STUFF
const crowdSchema = new mongoose.Schema({  // Creating instance of Schema and defining it
    names : String,
    phones : Number,
    emails : String,
    passwords : String
});

const Crowd = new mongoose.model("Crowd",crowdSchema); // Creating collections or model


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('../static')) // For serving static files (Like CSS & JS)
app.use(express.urlencoded()); // This middleware helps us to fetch the from form to backend express


// HBS SPECIFIC STUFF
app.set('view engine', 'hbs'); // Set the template engine as hbs
app.set('views', path.join(__dirname, '../templates/views')); // Setting the views directory
hbs.registerPartials(path.join(__dirname,'../templates/partials')); // Registering the partials


// Configuring our backend
// Our hbs demo endpoint
app.get("/", (req, res)=>{ 
    res.status(200).render('index.hbs');
});

app.post("/", (req, res)=>{ 
    let form = new Crowd(req.body);
    form.save().then(()=>{
        res.render('index.hbs');
    }).catch(()=>{
        res.status(400).send("<h1>The data is not stored<h1>");
    })
});

app.get("/about", (req, res)=>{ 
    res.status(200).render('about.hbs');
});

app.get("/account", (req, res)=>{ 
    res.status(200).render('account.hbs');
});

app.get("/cart", (req, res)=>{ 
    res.status(200).render('cart.hbs');
});

app.get('/order',(req,res)=>{
    res.status(200).render('order.hbs');
})

app.get('/redmi-prd-detail',(req,res)=>{
    res.status(200).render('redmi-prd-detail.hbs');
})

app.get('/samsung-prd-detail',(req,res)=>{
    res.status(200).render('samsung-prd-detail.hbs');
})

// Starting the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
