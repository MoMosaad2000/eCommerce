const { verifyTokenAndAutho, verifyTokenAndAdmin } = require("../router/verifyToken");
const router = require("express").Router();
const cryptoJS = require("crypto-js");
const Cart = require("../models/Cart");

router.post("/",verifyTokenAndAutho , async (req, res) => {
    const newCart= new Cart(req.body);
    try{
        const savedCart= await newCart.save();
        res.status(201).json({ message: "Cart Created Successfully", cart: savedCart });
    }
    catch(e){
        res.status(500).json(e);
    }
});

//Update
router.put("/:id", verifyTokenAndAutho, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (e) {
        res.status(500).json(e);
    }
});

//DELETE 

router.delete("/:id", verifyTokenAndAutho, async (req, res) => {
    try {
        const deletedCart = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart hsa been Deleted:"+deletedCart);
    } catch (e) {
        res.status(500).json(e);
    }
});
// //GET USER CART 

router.get("/find/:userId",verifyTokenAndAutho, async (req, res) => {
    try {
        const carts = await Cart.find({userId:req.params.userId});    
        res.status(200).json(carts);
    } catch (e) {
        res.status(500).json("Cart Not Found !"+e);
    }
});
// //GET ALL PRODUCT
router.get("/",verifyTokenAndAdmin, async (req, res) => {
  
    try {      
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (e) {
        res.status(500).json(e);
    }
});
module.exports = router;
