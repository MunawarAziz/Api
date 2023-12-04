const express = require("express");
const path = require("path");
const products = require("./models/index");  //models
const productRouter = require("./Routes/productRoutes");
const port = 1000;
const app = express();
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({
    extended:true,
}));
app.use(express.json());


app.get("/",(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"views/index.html"))
});

app.route("/showProduct").get(function(req,res){
    res.status(200).render("product",{products})
});

app.use("/api",productRouter);

app.listen(port, ()=>console.log(`server is running on port no : ${port}`));