const { verifyTokenAndAutho, verifyTokenAndAdmin } = require("../router/verifyToken");
const router = require("express").Router();
const cryptoJS = require("crypto-js");
const Order = require("../models/Order");

router.post("/",verifyTokenAndAutho , async (req, res) => {
    const newOrder= new Order(req.body);
    try{
        const savedOrder= await newOrder.save();
        res.status(201).json({ message: "Order Created Successfully", cart: savedOrder });
    }
    catch(e){
        res.status(500).json(e);
    }
});

//Update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Cart.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (e) {
        res.status(500).json("Allready Updated"+e);
    }
});

//DELETE 

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order hsa been Deleted:"+deletedOrder);
    } catch (e) {
        res.status(500).json(e);
    }
});
// //GET USER CART 

router.get("/find/:userId",verifyTokenAndAutho, async (req, res) => {
    try {
        const orders = await Order.find({userId:req.params.userId});    
        res.status(200).json(orders);
    } catch (e) {
        res.status(500).json("Order Not Found !"+e);
    }
});
// //GET ALL PRODUCT
router.get("/",verifyTokenAndAdmin, async (req, res) => {
  
    try {      
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (e) {
        res.status(500).json(e);
    }
});
//GET MONTHLY INNCOME 
router.get("/income", verifyTokenAndAdmin, async (req, res)=>{
    const date = new Date(); 
    const lastMonth=new Date(date.setMonth(date.getMonth()-1));
    const perivousMonth=new Date(lastMonth.setMonth(lastMonth.getMonth()-1));
    try{
        const income=await Order.aggregate([
            {$match: {createdAt:{$gte:perivousMonth}}},
            {
                $project:{
                    month:{$month:"$createdAt"},
                    sales:"$amount",
                },
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"},
                },
            },
        ]);
        res.status(200).json(income);
    }catch (e) {
        res.status(500).json(e);
    };
});
module.exports = router;
