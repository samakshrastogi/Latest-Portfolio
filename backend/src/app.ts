import express from "express";
import cors from "cors";

// 🔥 Routes (we will create these next)
import projectRoutes from "./routes/project.routes";
import skillRoutes from "./routes/skill.routes";
import featureRoutes from "./routes/feature.routes";
import authRoutes from "./routes/auth.routes";


const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Health Check
app.get("/", (_req, res) => {
    res.send("🚀 Portfolio API Running");
});

// ✅ API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/feature", featureRoutes);
app.use("/api/auth", authRoutes);

// ❌ 404 Handler
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});

export default app;