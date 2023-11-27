import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../BaseUrl";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/login";
    try{
      const {data} = await axios.post(url,
        {email, password}
      );
      console.log(data);
      localStorage.setItem("token", data?.accessToken);
      navigate("/dashboard");
    }catch(err){
      console.log(err?.message);
      alert(err?.response?.data?.message);
    }
  }

  return (
    <>
      <section class="flex justify-center shadow-2xl items-center h-screen bg-[#e0e7e8]">
        <div class="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div class="mb-4">
            <p class="text-gray-600">Sign In</p>
            <h2 class="text-xl font-bold">to Admin Panel</h2>
          </div>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              onClick={handleLogin}
              class=" flex items-center justify-center w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
            >
            
              {loading ? (
                <Oval
                  ariaLabel="loading-indicator"
                  height={30}
                  width={30}
                  strokeWidth={5}
                  color="blue"
                  secondaryColor="white"
                />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <div>
            <button
              onClick={()=>navigate("/login2")}
              class=" flex items-center justify-center w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
            >
              SignIn in Pharmacist Panel
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex flex-row items-center">
              <input
                type="checkbox"
                class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label
                for="comments"
                class="ml-2 text-sm font-normal text-gray-600"
              >
                Remember me
              </label>
            </div>
            <div>
              <a
                onClick={() => {
                  navigate("/forgot-password");
                }}
                class="text-sm text-blue-600 hover:underline"
                href="#"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
