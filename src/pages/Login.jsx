import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="grid place-items-center min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-[#00f050]/20 rounded-full blur-3xl animate-pulse top-10 left-10" />
      <div className="absolute w-[300px] h-[300px] bg-[#00f050]/10 rounded-full blur-3xl animate-ping bottom-10 right-10" />

      <form className="z-10 w-[90%] max-w-md backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl space-y-4 animate-fadeIn">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00f050] focus:ring-2 focus:ring-[#00f050] outline-none"
        />

        <input
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00f050] focus:ring-2 focus:ring-[#00f050] outline-none"
        />

        <button className="w-full p-3 rounded-lg bg-[#00f050] text-black font-bold hover:scale-105 hover:shadow-[0_0_20px_#00f050] transition">
          Login
        </button>

        {/* Forgot Password */}
        <Link to="/ForgotPassword">
          <p className="text-sm text-center text-gray-300 hover:text-[#00f050] cursor-pointer">
            Forgot Password?
          </p>
        </Link>

        {/* Register Button */}
        <Link
          to="/Register"
          className="block text-center w-full p-3 rounded-lg border border-[#00f050] text-[#00f050] font-bold hover:bg-[#00f050] hover:text-black transition"
        >
          Create New Account
        </Link>
      </form>
    </div>
  );
};

export default Login;