import { loginSchema, registerSchema } from "../schema/zod.js";
import { login, signIn } from "../service/auth.service.js";


export const signupControllers = async (req, res) => {
    const data = registerSchema.parse(req.body);
    await signIn(data, res);
};
export const loginControllers = async (req, res) => {
    const data = req.body;
    if (!data) {
        return res.json({
            message: "No data provided",
        });
    }
    loginSchema.safeParse(data);
    await login(data, res);
};

// username
// email
// password
// guest -> admin -> user
export const createProduct = async () => {

};
