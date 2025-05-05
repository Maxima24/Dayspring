<<<<<<< Updated upstream
import React from 'react'
import { motion } from 'motion/react'

function SignUp() {
=======
import React from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import store from "../../store";
import { signUp } from "../../feautures/userSlice";
import { CreateUser } from "../../services/apiAuth";

const SignUpForm = () => {
  
  const actionData = useActionData()
  const navigate= useNavigate()
>>>>>>> Stashed changes
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950">
    <div className="absolute inset-0 z-0">
      {/* Background with Conic Gradient */}
      <motion.div
        initial={{ opacity: 0.5, width: "15rem" }}
        whileInView={{ opacity: 1, width: "30rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto w-[30rem] h-56 bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
      >
        {/* Masking effects */}
        <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.5, width: "15rem" }}
        whileInView={{ opacity: 1, width: "30rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto left-1/2 w-[30rem] h-56 bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
      >
        <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
      </motion.div>

      {/* Blur effect */}
      <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl text-white-300"></div>
      <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
      <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
    </div>

<<<<<<< Updated upstream
    {/* Login Form Section */}
    <div className="relative z-50 flex flex-col items-center justify-center px-5 py-10 bg-white rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-5">Sign Up Now </h2>
      <form className="w-full">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
=======
          <div>
            <label className="block text-sm text-white mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full p-2 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Role</label>
            <select
              name="role"
              required
              className="w-full p-2 rounded-md bg-white/20 text-stone-300 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">Select a role</option>
              <option value="GUEST">Guest</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
          {actionData?.error && (
            <p className="text-red-400 text-sm mt-1">{actionData.error}</p>
          )}
            <div className="flex items-center justify-center gap-4 ">
            <button type="submit"
            
            className="w-fit px-12 py-2 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-semibold" 
          >
            Sign Up
          </button>
          <button type="button"
            onClick={()=> navigate("/newuser/login") }
            className="w-fit  py-2 px-12  rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
          >
            Log In
          </button>
            </div>

          
        </Form>
       
        <div className="flex items-center gap-2 text-white">
          <hr className="flex-grow border-white/30" />
          <span className="text-sm">or</span>
          <hr className="flex-grow border-white/30" />
>>>>>>> Stashed changes
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-cyan-400 transition ease-in-out duration-200"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
<<<<<<< Updated upstream
  </div>
  )
=======
  );
};
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log("Form Data:", data);
    const user = await CreateUser(data)
  // Optionally call an API
  console.log(user)
  // const newUser = await CreateUser(data);

  // Dispatch to Redux
  store.dispatch(signUp(user.data));
  const state = store.getState()
  const username = state.user.username
  console.log(username)

  localStorage.setItem("token",user?.token)
  const roles = state.user.role
  
 
  // Redirect or return something
  return redirect(`/home/${roles}/${username}`); // change as needed}
>>>>>>> Stashed changes
}

export default SignUp