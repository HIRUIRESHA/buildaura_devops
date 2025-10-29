import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";

// Routes
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import clientRoutes from "./routes/clients.js";

const app = express();

// ✅ Enable CORS before routes
app.use(
  cors({
    origin: ["http://localhost:5173", "http://frontend:80"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


// ✅ Body parser
app.use(express.json());

// Connect to MongoDB
connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB connection error:", err));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/clients", clientRoutes);

// Test route
app.get("/", (req, res) => res.send("API Working"));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Server error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
