import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      setLoading(true);

      const result = await signIn(email, password, rememberMe);
      const loggedInUser = result.user;

      const jwtResponse = await axios.post("https://nineamshop-server.onrender.com/jwt", {
        email: loggedInUser.email,
      });

      const token = jwtResponse.data.token;

      console.log(token);

      //Stores the token depending on "remember me")
      if (rememberMe) {
        localStorage.setItem("jwt-token", token);
      } else {
        sessionStorage.setItem("jwt-token", token);
      }

      setMessage("Login successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage(
        error?.message || "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center gap-[30px] justify-evenly bg-[#0A0D17] p-[40px]">
      <form
        onSubmit={handleSubmit}
        className="lg:w-[40%] xl:w-[30%] 2xl:w-[25%] md:w-5/12 w-8/12 bg-[#161823] p-6 rounded-lg shadow-xl"
      >
        <div className="text-white mb-6">
          <h1 className="text-3xl font-bold pb-2">Sign In to Your Account</h1>
          <p className="text-gray-400 text-sm">
            Welcome back! Please enter your credentials.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-700 rounded-md px-4 py-3 bg-[#22222f] text-white placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-700 rounded-md px-4 py-3 bg-[#22222f] text-white placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {message && (
            <p
              className={`text-sm ${
                message.includes("success") ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          <div>
            <Link to='/signup'><p className="text-sm">Or <span className="text-sky-400">Create an Account</span></p></Link>
          </div>

          <div className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label>Remember Me</label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="py-3 px-6 bg-gradient-to-r from-[#763AF5] to-[#A604F2] text-white rounded-md text-lg font-semibold transition-all hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </div>
      </form>

      <div className="hidden lg:block">
        <img
          src="https://i.ibb.co/h7rjVJS/Image.png"
          alt="Sign in visual"
          className="w-[500px]"
        />
      </div>
    </section>
  );
}
