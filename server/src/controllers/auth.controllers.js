import { login, signIn } from "../service/auth.service.js";

const userRoles = ["GUEST", "ADMIN", "USER"];
export const signupControllers = async (req, res) => {
    const data = req.body;
    if (!data) {
        return res.json({
            message: "No data provided",
        });
    }
    if (!data.username || !data.email || !data.password || !data.role) {
        return res.json({
            message: "All fields are required",
        });
    }
    if (data.role && !userRoles.includes(data.role.toUpperCase())) {
        return res.json({
            message: "Invalid role",
        });
    }
    if (data.password.length < 6) {
        return res.json({
            message: "Password must be at least 6 characters",
        });
    }
    await signIn(data, res);
};
export const loginControllers = async (req, res) => {
    const data = req.body;
    if (!data) {
        return res.json({
            message: "No data provided",
        });
    }
    if (!data.email || !data.password) {
        return res.json({
            message: "All fields are required",
        });
    }
    if (data.password.length < 6) {
        return res.json({
            message: "Password must be at least 6 characters",
        });
    }
    await login(data, res);
};

// username
// email
// password
// guest -> admin -> user
