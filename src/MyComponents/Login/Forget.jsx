import React from "react";
import { useNavigate } from "react-router-dom";

const Forget = () => {
    const navigate = useNavigate()
  return (
    <>
      <section class="flex justify-center shadow-2xl items-center h-screen bg-[#e0e7e8]">
        <div class="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div class="mb-4 flex justify-between">
            <div className="">
            {/* <p class="text-gray-600">Hi, Admin</p> */}
            <h2 class="text-xl font-bold">Forgot Password</h2>
            </div>
            <button onClick={()=>{navigate('/')}}>Back to Login</button>
          </div>
          <div>
            <input required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          
          <div>
            <button class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
              Send Password to Email
            </button>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Forget;
