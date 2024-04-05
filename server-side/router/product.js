const { verifyTokenAndAutho, verifyTokenAndAdmin } = require("../router/verifyToken");
const router = require("express").Router();
const cryptoJS = require("crypto-js");
const Product = require("../models/Product");

router.post("/",verifyTokenAndAdmin , async (req, res) => {
    const newProduct= new Product(req.body);
    try{
        const savedProduct = await newProduct.save();
        res.status(201).json({ message: "Product Created Successfully", product: savedProduct });
    }
    catch(e){
        res.status(500).json(e);
    }
});
//Update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (e) {
        res.status(500).json(e);
    }
});

//DELETE 

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product hsa been Deleted:"+deletedProduct);
    } catch (e) {
        res.status(500).json(e);
    }
});
//GET

router.get("/find/:id", async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);    
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json(e);
    }
});
//GET ALL PRODUCT
router.get("/", async (req, res) => {
    const qNew =req.query.new;
    const qCategory =req.query.category;

    try {
       let products;
       if (qNew){
        products = await Product.find().sort({createdAt:-1}).limit(4);
       }else if (qCategory){
        products = await Product.find({categories:{$in:[qCategory],},
                                    }); 
       }else {
        products = await Product.find();
       }
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json(e);
    }
});
module.exports = router;
