// backend/src/routes/feature.routes.ts
import express from "express";
import Feature from "../models/feature.model";
import { verifyToken } from "../middleware/auth.middleware";

const router = express.Router();

/**
 * ✅ Check if /software is enabled (Public)
 */
router.get("/software-enabled", async (_req, res) => {
    try {
        const feature = await Feature.findOne({ name: "software" });

        return res.status(200).json({
            success: true,
            enabled: feature?.enabled ?? false,
        });
    } catch (error) {
        console.error("Fetch Feature Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch feature toggle",
        });
    }
});

/**
 * 🔐 Toggle /software access (Protected)
 */
router.post("/toggle", verifyToken, async (req, res) => {
    try {
        const { enabled } = req.body;

        // 🛑 Validate input
        if (typeof enabled !== "boolean") {
            return res.status(400).json({
                success: false,
                message: "Invalid 'enabled' value. Must be boolean.",
            });
        }

        const feature = await Feature.findOneAndUpdate(
            { name: "software" },
            { enabled },
            {
                new: true,
                upsert: true, // create if not exists
            }
        );

        return res.status(200).json({
            success: true,
            data: feature,
            message: `Software panel ${enabled ? "enabled" : "disabled"}`,
        });
    } catch (error) {
        console.error("Toggle Feature Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update feature toggle",
        });
    }
});

export default router;