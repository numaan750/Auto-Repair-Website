import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaSun, FaMoon, FaSignOutAlt } from "react-icons/fa";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    // const [darkMode, setDarkMode] = useState(false);
    // const [editMode, setEditMode] = useState(false);
    const [updatedName, setUpdatedName] = useState("");
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (!loggedInUser) {
            navigate("/login");
        } else {
            setUser(loggedInUser);
            setUpdatedName(loggedInUser.name);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    };

    const handleUpdateProfile = () => {
        const updatedUser = { ...user, name: updatedName };
        setUser(updatedUser);
        localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
        setEditMode(false);
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
                localStorage.setItem("profilePic", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        const storedPic = localStorage.getItem("profilePic");
        if (storedPic) setProfilePic(storedPic);
    }, []);

    return (
        <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex items-center justify-center`}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                {/* <div className="flex justify-between">
                    <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">{darkMode ? <FaSun /> : <FaMoon />}</button>
                </div> */}

                <div className="mt-4 relative">
                    <label htmlFor="profile-pic-upload" className="cursor-pointer">
                        <img
                            src={profilePic || "https://via.placeholder.com/100"}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto border-4 border-gray-300 dark:border-gray-600"
                        />
                    </label>
                    <input id="profile-pic-upload" type="file" accept="image/*" className="hidden" onChange={handleProfilePicChange} />
                </div>

                {editMode ? (
                    <input
                        type="text"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md mt-4"
                    />
                ) : (
                    <h2 className="text-2xl font-bold mt-4">{user?.name}</h2>
                )}

                <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>

                {editMode ? (
                    <button onClick={handleUpdateProfile} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                        Save Changes
                    </button>
                ) : (
                    <button onClick={() => setEditMode(true)} className="mt-4 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                        <FaUserEdit /> Edit Profile
                    </button>
                )}

                <button onClick={handleLogout} className="mt-4 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
