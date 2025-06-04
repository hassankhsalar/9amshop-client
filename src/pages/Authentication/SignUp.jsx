import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

export default function SignUp() {
  const { createUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shopNames, setShopNames] = useState(["", "", ""]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShopChange = (index, value) => {
    const updated = [...shopNames];
    updated[index] = value;
    setShopNames(updated);
  };

  const addShopField = () => {
    if (shopNames.length < 4) {
      setShopNames([...shopNames, ""]);
    }
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validatePassword(password)) {
      setMessage(
        "Password must be 8+ characters, include a number & special character."
      );
      return;
    }

    const filteredShops = shopNames.filter((s) => s.trim() !== "");
    if (filteredShops.length < 3) {
      setMessage("Please enter at least 3 shop names.");
      return;
    }

    try {
      setLoading(true);

      await createUser(email, password); 

      const response = await axios.post("https://nineamshop-server.onrender.com/signup", {
        email,
        username,
        shopNames: filteredShops,
      });

      setMessage(response.data.message);
      setEmail("");
      setUsername("");
      setPassword("");
      setShopNames(["", "", ""]);
    } catch (error) {
      console.error(error);
      setMessage(
        error?.message ||
          error?.response?.data?.message ||
          "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center gap-[30px] justify-evenly bg-[#0A0D17] p-[40px]">
     
      <form
        onSubmit={handleSubmit}
        className="lg:w-[40%] xl:w-[35%] 2xl:w-[30%]  w-8/12 bg-[#161823] p-6 rounded-lg shadow-xl"
      >
        <div className="text-white mb-6">
          <h1 className="text-3xl font-bold pb-2">Create Your Account</h1>
          <p className="text-gray-400 text-sm">
            Sign up to register your unique shop names.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-700 rounded-md px-4 py-3 bg-[#22222f] text-white placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-700 rounded-md px-4 py-3 bg-[#22222f] text-white placeholder-gray-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

          {/* Shop Names */}
          <div>
            <p className="text-white font-medium mb-2">
              Shop Names (min 3, max 4):
            </p>
            {shopNames.map((shop, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Shop ${index + 1}`}
                className="mb-2 border border-gray-700 rounded-md px-4 py-3 w-full bg-[#22222f] text-white placeholder-gray-400"
                value={shop}
                onChange={(e) => handleShopChange(index, e.target.value)}
                required
              />
            ))}
            {shopNames.length < 4 && (
              <button
                type="button"
                onClick={addShopField}
                className="text-blue-400 text-sm mt-1 hover:underline"
              >
                + Add another shop
              </button>
            )}
          </div>

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
            <p className="text-sm">Already have an account? <Link className="text-sky-400 text-base font-semibold" to='/signin'>Login</Link></p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="py-3 px-6 bg-gradient-to-r from-[#763AF5] to-[#A604F2] text-white rounded-md text-lg font-semibold transition-all hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Signup"}
          </button>
        </div>
      </form>

      <div className="hidden lg:block">
        <img
          src="https://i.ibb.co/h7rjVJS/Image.png"
          alt="Signup visual"
          className="w-[500px]"
        />
      </div>
    </section>
  );
}
