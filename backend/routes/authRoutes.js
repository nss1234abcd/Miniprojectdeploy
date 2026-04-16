// ================= IMPORTS =================
const express = require("express");
const router =express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/authMiddleware");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "uploads/",
    filename : (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({storage});

// ================= SIGNUP ROUTE =================
router.post("/signup", async (req, res) => {
    try{
         const { name, email, password } = req.body;

         const userExist = await User.findOne({email});

         if(userExist) return res.status(400).json("user already exists");

         const hashed = await bcrypt.hash(password, 10);

         const user = new User({name, email, password: hashed});
         await user.save();

         res.json("User Registered Successfully");
    }
    catch(err){
        res.status(500).json(err.message);
    }
});


// ================= LOGIN ROUTE =================
router.post("/login", async (req, res) => {

  try {
    // 1. Check user
    const user = await User.findOne({ email : req.body.email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // 2. Compare password
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // 3. Generate JWT token
    const token = jwt.sign(
      { id: user._id}, process.env.JWT_SECRET,{// ⚠️ Use .env in real project
       expiresIn: "1h"
  });

    res.json({ token });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});


// ================= PROTECTED ROUTE =================
router.get("/dashboard", auth, (req, res) => {
  res.json({
    message: "Welcome to dashboard",
    user: req.user
  });
});


// ================= profile=================
router.get("/profile", auth, async(req, res) => {
    const user = await User.findById(req.user.id);
    res.json(user);
  }
);

// ==========image upload =======//

router.post("/upload", auth, upload.single("image"), async (req, res)=>{
    try{
        const user = await User.findById(req.user.id);

        user.image = req.file.filename;
        await user.save();

        res.json({
            message: "Image uploaded",
            file: req.file.filename
        });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// ================= EXPORT =================
module.exports = router;