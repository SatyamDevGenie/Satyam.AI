import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"

dotenv.config();

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

//Routes
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});