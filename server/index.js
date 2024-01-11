const express = require("express")
const cors = require("cors");
const connectDB = require("./db.js")
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoute.js")
const contactRoutes = require("./routes/contactRoute.js")
//middlewares
const app = express()
app.use(express.json())
app.use(cors())
//CONFIG
dotenv.config()

//DATABASE
connectDB()

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/contact",contactRoutes);
app.listen(process.env.PORT,() => {
    console.log(`BE started at port ${process.env.PORT}`);
})
