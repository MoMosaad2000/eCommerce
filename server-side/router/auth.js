const router = require("express").Router();
const User = require("../models/User");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const encryptedPassword = cryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();
    try {
        const newUser = new User({ username, email, password: encryptedPassword });
        const saveUser = await newUser.save();
        res.status(201).json({ message: "User Created Successfully", user: saveUser });
    } catch (err) {
        console.error("Error in registration:", err);
        res.status(500).json({ message: "Allready Registerd" });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }
        const decryptedPassword = cryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(cryptoJS.enc.Utf8);
        if (password === decryptedPassword) {
            const accesstoken=jwt.sign({
                id:user._id,
                isAdmin:user.isAdmin,
            },
            process.env.JWT_SEC,
            {expiresIn:"3d"}
            );
            const {password,...others}=user._doc;
            res.status(200).json({ message: "User Logged In Successfully", ...others,accesstoken });
        } else {
            res.status(401).json({ message: "Invalid Credentials" });
        }
    } catch (e) {
        console.error("Error in login:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
