import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = 
    "mongodb+srv://runthilakshika:fZUOYdZANyDCqOoC@financetrackerapp.xaim0tk.mongodb.net/";

mongoose.connect(mongoURI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
