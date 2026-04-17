import express from "express";
import Project from "../models/project.model";
import { verifyToken } from "../middleware/auth.middleware";

const router = express.Router();

/**
 * ➕ Create Project (Protected)
 * ✅ Auto-assign position if not provided
 */
router.post("/", verifyToken, async (req, res) => {
    try {
        let { position } = req.body;

        // 🔥 Auto position if not sent
        if (position === undefined) {
            const last = await Project.findOne().sort({ position: -1 });
            position = (last?.position ?? -1) + 1;
        }

        const project = await Project.create({
            ...req.body,
            position,
        });

        return res.status(201).json({
            success: true,
            data: project,
        });
    } catch (error) {
        console.error("Create Project Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to create project",
        });
    }
});

/**
 * 📥 Get All Projects (Public)
 * ✅ Sorted by position first, fallback to latest
 */
router.get("/", async (_req, res) => {
    try {
        const projects = await Project.find().sort({
            position: 1,
            createdAt: -1,
        });

        return res.status(200).json({
            success: true,
            data: projects,
        });
    } catch (error) {
        console.error("Fetch Projects Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch projects",
        });
    }
});

/**
 * ✏️ Update Project (Protected)
 * ✅ Allows updating position
 */
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const { id } = req.params;

        const updated = await Project.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Project not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: updated,
        });
    } catch (error) {
        console.error("Update Project Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update project",
        });
    }
});

/**
 * ❌ Delete Project (Protected)
 */
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await Project.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Project not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Project deleted successfully",
        });
    } catch (error) {
        console.error("Delete Project Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to delete project",
        });
    }
});

export default router;