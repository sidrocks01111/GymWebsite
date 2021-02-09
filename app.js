const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// Express related stuff 
// for serving static files

app.use('/static', express.static('static')); // app.use('/foldername', express.static('foldername'));
app.use(express.urlencoded()); // To get the data of form on webpage
// Pug specific stuff

app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

//Endpoints

app.get("/", (req, res) => {
    const con = "This is best materail online use it wisely";
    const params = {'title': 'PubG', "content": con};
    res.status(200).render('index.pug', params);
});

app.post("/", (req, res) => {
    
     let name = req.body.Name;
     let age = req.body.age;
     let dob = req.body.dob;
     let weight = req.body.weight;
     let email = req.body.email;
     let phone = req.body.phone;

    let outputToWrite = `The member is ${name}, ${age} is years old. His date of birth is ${dob} and has weight ${weight} kg. Contact details email ${email}, phone ${phone}`;
    fs.writeFileSync('output.txt', outputToWrite);
    const params = {'message': 'Your form has been submitted successfully'};
    res.status(200).render('index.pug', params);

});

// app.get("/", (req, res) => {
//     res.status(200).render('demo', { title: 'My pug file', message: 'Thanks for helping me understand pug' });
// });

// app.get handles get requests 

// app.get("/", (req, res) => {
//     // res.send("This is homepage of my first express app with harry");
//     res.status(200).send("This is homepage of my first express app with harry");
//     // to set status code like 404 200 
// });
// app.get("/about", (req, res) => {
//     res.send("This is about page of my first express app with harry");
// });

// app.get("/this", (req, res) => {
//     res.status(404).send("This page is not found");
// });

 // app.post handles post requests 

// app.post("/about", (req, res) => {
//     res.send("This is post request about page of my first express app with harry");
// });

// Start the server  

app.listen(port, () => {
    console.log(`This server is listened at port ${port}`);
});



// code . to open the folder in vs code 