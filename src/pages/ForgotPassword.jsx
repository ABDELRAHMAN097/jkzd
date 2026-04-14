import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="grid place-items-center min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-[#00f050]/20 rounded-full blur-3xl animate-pulse top-0 right-0" />

      <form className="z-10 w-[90%] max-w-md backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl space-y-4 animate-fadeIn">
        <h2 className="text-2xl font-bold text-center">Reset Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00f050] focus:ring-2 focus:ring-[#00f050] outline-none"
        />

        <button className="w-full p-3 rounded-lg bg-[#00f050] text-black font-bold hover:scale-105 hover:shadow-[0_0_20px_#00f050] transition">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;