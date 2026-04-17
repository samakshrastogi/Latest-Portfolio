import { useState } from "react";
import { api } from "../api/axios"; // ✅ use central axios
import axios from "axios";

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

            // ✅ redirect properly
            window.location.href = "/software";

        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                alert(err.response?.data?.message || "Invalid credentials");
            } else {
                alert("Something went wrong");
            }
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-[var(--bg)] px-4">

            <div className="bg-[var(--card)] p-6 sm:p-8 rounded-2xl border border-[var(--border)] w-full max-w-sm">

                <h2 className="text-xl sm:text-2xl mb-6 text-center font-semibold">
                    Admin Login
                </h2>

                <div className="space-y-4">

                    <input
                        placeholder="Username"
                        value={username}
                        className="input w-full"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        className="input w-full"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        onClick={login}
                        disabled={loading}
                        className="btn-primary w-full disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </div>

            </div>
        </div>
    );
}