import express, { Express } from "express";
import mongoose from "mongoose";

const app: Express = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = 
    "mongodb+srv://runthilakshika:fZUOYdZANyDCqOoC@financetrackerapp.xaim0tk.mongodb.net/";

mongoose.connect(mongoURI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to connect to MongoDB:", err));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
