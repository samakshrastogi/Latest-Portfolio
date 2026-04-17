import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 5000;

// 🔥 Start Server Function (clean structure)
const startServer = async () => {
    try {
        // ✅ Connect Database
        await connectDB();
        console.log("✅ Database connected");

        // ✅ Start Server
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Server failed to start:", error);
        process.exit(1);
    }
};

startServer();