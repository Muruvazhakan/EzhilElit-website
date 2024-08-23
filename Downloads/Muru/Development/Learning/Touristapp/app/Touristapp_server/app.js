const express = require('express');
const bodyParser = require('body-parser');
// const httperror = require("./m")


const placeRoute = require('./Routes/places-routes');
const userRoute = require('./Routes/user-routes');
const { default: mongoose } = require('mongoose');
// const mongo =require("./DatabaseConnection/Mongodb");
const app=express();

app.use(bodyParser.json());
app.use('/api/place',placeRoute);

app.use('/api/user',userRoute);

app.use((req,res,next) =>{
    res.status(400)
    res.json(("No data found"))
});

app.use((error,req,res,next) =>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500).json(message= error.message || "Not found");
});

mongoose.connect('mongodb+srv://murutestdb:Muru_1998@muru.ypd86.mongodb.net/Places?retryWrites=true&w=majority&appName=Muru')
.then(() =>{
    app.listen(5000);
}).
catch( err =>{
    console.log(err);
});
