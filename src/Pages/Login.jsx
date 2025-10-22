import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return false;
        }
        setError("");
        return true;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = registeredUsers.find(user => user.email === email && user.password === password);

        if (!user) {
            setError("User not found. Please sign up first.");
            return;
        }

        if (validateForm()) {
            // ✅ Save logged-in user to localStorage
            localStorage.setItem("loggedInUser", JSON.stringify(user));

            alert("Login Successful!");
            navigate("/profile"); // ✅ Redirect to Profile Page
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-300 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
                    Login to Your Account
                </h2>

                {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

                <form className="mt-6" onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-gray-700 dark:text-gray-300">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-10 text-gray-500 dark:text-gray-300"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <label className="flex items-center text-gray-600 dark:text-gray-300">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                className="mr-2"
                            />
                            Remember Me
                        </label>
                        <Link to="/forgot-password" className="text-blue-500 text-sm hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-gray-600 dark:text-gray-400">Or sign in with</p>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                            <FaGoogle /> Google
                        </button>
                        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                            <FaFacebook /> Facebook
                        </button>
                    </div>
                </div>

                <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
