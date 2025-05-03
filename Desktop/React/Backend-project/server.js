const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./Routes/productRoutes"); // FIXED casing here
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
app.use(express.json());

// Logger middleware
const logger = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`  ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`);
  });
  next();
};

app.use(logger); // ✅ Add logger before routes

mongoose.connect("mongodb://localhost:27017/myproducts")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
