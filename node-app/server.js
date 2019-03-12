 const express = require("express");
 const mongoose = require("mongoose");
 const bodyParser = require("body-parser"); 
 const app = express();
 const passport = require("passport");

 //引入users.js
 const users = require("./router/api/users");
 const profiles = require("./router/api/profiles");


//DB config
const db = require("./config/keys").mongoUrl

//使用body-porser中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());



//connect to mongodb
mongoose.connect(db)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

//passport初始化
app.use(passport.initialize());
require("./config/passport")(passport);


//  app.get("/",(req,res)=>{
//      res.send("hello world!")
//  })

 //使用router
 app.use("/api/users",users);
 app.use("/api/profiles",profiles);

 const port = process.env.PORT || 5000;

 app.listen(port,()=>{
     console.log(`Server running on port ${port}`)
 })