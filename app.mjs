import express from "express";
import cors from "cors";
import "./loadenv.mjs";
import "express-async-errors";
import products from "./routes/product.mjs";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/product", products);

app.get("/", async (req, res) => {
  res.send("Welcome to Marketplace Application!!");
});

// Global error handling
app.use((err, _req, res, next) => {
  console.error(err);
  res.status(500).send("Uh oh! An unexpected error occurred.")
});

// Start the Express server
app.listen(8082, () => {
  console.log("Application is running on port 8082");
});
