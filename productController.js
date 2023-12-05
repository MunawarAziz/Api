const products = require("../models/index")
module.exports = {
    addproduct : (req,res)=>{
        const {name, price} = req.body;

        products.push({name, price});

        res.status(201).send("products add successfully")
    },
    getSingleProduct : (req,res)=>{
        let {productIndex} = req.params
        productIndex = Number(productIndex);
        if(!products[productIndex]){
            return res.status(404).send("product not found")
        }
        res.status(200).send(products[productIndex])
    },
    get : (req,res,next)=>{
        res.status(200).send(products)
    },
    changeProduct : (req,res)=>{
        let {productIndex} = req.params
        const {name, price} = req.body
        productIndex = Number(productIndex);
        if(!products[productIndex]){
            return res.status(404).send("product not found")
        }
        products[productIndex].name = name;
        products[productIndex].price = price;
        res.status(200).send(products[productIndex])
    },
    deleteProduct : (req,res)=>{
        let {productIndex} = req.params;
        productIndex = Number(productIndex);
        if(!products[productIndex]){
            return res.status(404).send("product not found")
        }
        products.splice(productIndex, 1)
        res.status(200).send("product deleted successfully")
    },

}