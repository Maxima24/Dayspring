import express from "express";
import { configDotenv } from "dotenv";
import auth from "./src/routes/auth.route.js";
import products from "./src/routes/products.route.js";
import { catchError } from "./src/handleerror/error.middleware.js";
import cors from "cors";
configDotenv();
const PORT = process.env.PORT || 8001;

console.log(process.env.PORT);
const app = express();
app.use(catchError);
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", auth);
app.use("/api/products", products);

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });
});

app.listen(PORT, () => {
    console.log("Server is running in PORT: " + PORT);
});
