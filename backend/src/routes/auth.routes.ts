import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// 🔐 Fixed credentials
const USERNAME = "samako";
const PASSWORD = "samako@2804";

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    // ❌ Invalid
    if (username !== USERNAME || password !== PASSWORD) {
        return res.status(401).json({
            message: "Invalid credentials",
        });
    }

    // ✅ Generate token
    const token = jwt.sign(
        { role: "admin" },
        process.env.JWT_SECRET || "secret",
        { expiresIn: "1d" }
    );

    return res.json({ token });
});

export default router;