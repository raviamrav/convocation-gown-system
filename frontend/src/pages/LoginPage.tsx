import {useState} from "react";
import {login} from "../services/authService";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedUsername = username.trim();
        const trimmedPassword = password.trim();
        if (!trimmedUsername || !trimmedPassword) {
            setError("⚠️ Please enter both username and password.");
            return;
        }
        setError(""); // Clear any previous error        

        try {
            const response = await login(trimmedUsername, trimmedPassword);

            if (response.isSuccess) {
                // Handle successful login, e.g., store token, redirect, etc.
                sessionStorage.setItem("authToken", response.token);
                console.log("Login successful:", response);
                navigate("/admin"); // Redirect to admin dashboard
            } else {
                setError("⚠️ " + response.message);
            }
        }
        catch (err) {
            console.error("Login error:", err);
            setError("⚠️ An error occurred during login. Please try again.");
        }
    };

    return (
        <div>
            {/* <h1>Login Page</h1> */}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block mb-1">Username: </label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">Password: </label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="admin"/>
                </div>
                {error && <p className="mb-4 text-red-600">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;