const express = require("express");
const cors = require('cors');
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");

console.log(process.argv);

mongoose.connect(process.argv[3], {useNewUrlParser: true}).then(()=>{
    const app = express();
    app.use(session({
        secret : "caAPISecret",
        saveUninitialized: false,
        resave: false
    }));
    app.use(express.json());
    app.use(cors({credentials: true, origin: process.argv[2]}));
    app.use("/api", routes);
    
    app.listen(3000, ()=>{
        console.log("CA API started on port 3000, test using http://localhost:3000");
    });
});

