import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js";
import paymentRouter from "./routes/payment.route.js";

dotenv.config();

const app = express();
app.use(cors({
    origin: "https://satyam-ai-client.onrender.com",  // client URL
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

//Routes
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview", interviewRouter)
app.use("/api/payment", paymentRouter)

const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send("Satyam.AI api is running")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});