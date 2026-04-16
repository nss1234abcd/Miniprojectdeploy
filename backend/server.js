const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app=express();

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));
app.use("/api/auth", require("./routes/authRoutes"));

app.listen(process.env.PORT,()=> console.log(`Server is running on port ${process.env.PORT}`));