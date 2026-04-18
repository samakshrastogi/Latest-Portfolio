import { useState } from "react";
import { api } from "../api/axios";
import axios from "axios";
import { motion } from "framer-motion";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const login = async () => {
        try {
            setLoading(true);

            const res = await api.post("/auth/login", {
                username,
                password,
            });

            localStorage.setItem("token", res.data.token);
            window.location.href = "/software";

        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                alert(err.response?.data?.message || "Invalid credentials");
            } else {
                alert("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[#02040a] text-white">

            {/* 🌌 Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 blur-3xl" />

            {/* 🔵 Top Glow */}
            <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px]" />

            {/* 🟣 Bottom Glow */}
            <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]" />

            {/* ================= CARD ================= */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl opacity-40" />

                <div className="relative bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

                    {/* ================= HEADER ================= */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Admin Login
                        </h2>
                        <p className="text-gray-400 text-sm mt-2">
                            Access your dashboard securely
                        </p>
                    </div>

                    {/* ================= FORM ================= */}
                    <div className="space-y-5">

                        {/* Username */}
                        <div className="relative">
                            <input
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition"
                            />
                        </div>

                        {/* Button */}
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            onClick={login}
                            disabled={loading}
                            className="w-full py-3 rounded-xl font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] transition shadow-lg shadow-indigo-500/30 disabled:opacity-50"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </motion.button>
                    </div>

                    {/* ================= FOOTER ================= */}
                    <div className="mt-6 text-center text-xs text-gray-500">
                        Secure admin access • JWT Protected
                    </div>
                </div>
            </motion.div>
        </div>
    );
}