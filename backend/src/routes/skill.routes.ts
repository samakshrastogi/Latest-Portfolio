import express from "express";
import Skill from "../models/skill.model";
import { verifyToken } from "../middleware/auth.middleware";

const router = express.Router();

/**
 * ➕ Add Skill Group (Protected)
 */
router.post("/", verifyToken, async (req, res) => {
    try {
        const { category, items, position } = req.body;

        if (!category || !Array.isArray(items)) {
            return res.status(400).json({
                success: false,
                message: "Category and items array are required",
            });
        }

        const skill = await Skill.create({
            category,
            items,
            position: position ?? 0,
        });

        return res.status(201).json({
            success: true,
            data: skill,
        });
    } catch (error) {
        console.error("Create Skill Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create skill",
        });
    }
});

/**
 * 📥 Get All Skills (Public) — SORTED BY POSITION
 */
router.get("/", async (_req, res) => {
    try {
        const skills = await Skill.find().sort({ position: 1, createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: skills,
        });
    } catch (error) {
        console.error("Fetch Skills Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch skills",
        });
    }
});

/**
 * ✏️ Update Skill (Position Included)
 */
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const { id } = req.params;

        const updated = await Skill.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Skill not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: updated,
        });
    } catch (error) {
        console.error("Update Skill Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to update skill",
        });
    }
});

/**
 * ❌ Delete Skill
 */
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await Skill.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Skill not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Skill deleted successfully",
        });
    } catch (error) {
        console.error("Delete Skill Error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete skill",
        });
    }
});

export default router;