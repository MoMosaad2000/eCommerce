const { verifyTokenAndAutho, verifyTokenAndAdmin } = require("../router/verifyToken");
const router = require("express").Router();
const cryptoJS = require("crypto-js");
const User = require("../models/User");

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    if (req.body.password) {
        req.body.password = cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (e) {
        res.status(500).json("Allready Updated"+e);
    }
});

//DELETE 

router.delete("/:id", verifyTokenAndAutho, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User hsa been Deleted:"+deletedUser);
    } catch (e) {
        res.status(500).json(e);
    }
});
//GET
router.get("/find/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const{password, ...others}=user._doc;
        res.status(200).json(others);
    } catch (e) {
        res.status(500).json(e);
    }
});
//GET ALL USER

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query =req.query.new;

    try {
        const users =query? await User.find().sort({_id:-1}).limit(4):
        await User.find();
        
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json(e);
    }
});
//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res)=>{
    const date = new Date(); 
    const lastYear=new Date(date.setFullYear(date.getFullYear()-1));
    try{
        const date=await User.aggregate([
            {$match: {createdAt:{$gte:lastYear}}},
            {
                $project:{
                    month:{$month:"$createdAt"},
                },
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:1},
                },
            },
        ]);
        res.status(200).json(date);
    }catch (e) {
        res.status(500).json(e);
    };
});
module.exports = router;
