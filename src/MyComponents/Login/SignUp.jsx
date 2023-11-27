import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../BaseUrl";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";


const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setName] = useState("");
  const [pharmacyName, setPharmacy] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setCode] = useState("");
  const [profilepic, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

const handleRegister = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/pharmacy/registration";
    try{
        const {data} = await axios.post(url,{
            fullName, pharmacyName, dob, email, phone, address, city, country, pinCode, profilepic,
            password
        })
        console.log(data);
        navigate("/login2");
    }catch(err){
        console.log(err.message);
    }
};

const postthumbImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dagqqok7o");
    fetch("https://api.cloudinary.com/v1_1/dagqqok7o/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const imgrl = data.url;
        setProfile(data.url);
        // console.log(image);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      <section class="flex justify-center shadow-2xl items-center  bg-[#e0e7e8]">
        <div class="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div class="mb-4">
            <p class="text-gray-600">Register</p>
            <h2 class="text-xl font-bold">Register as Pharmacist Panel</h2>
          </div>
          <div>
            <input
        
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Full Name"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div>
            <input
       
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Pharmacy Name"
              onChange={(e)=>setPharmacy(e.target.value)}
            />
          </div>
          <div>
            <input
   
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="DOB"
              onChange={(e)=>setDob(e.target.value)}
            />
          </div>
          <div>
            <input
    
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="email"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
 
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Phone"
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
    
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Address"
              onChange={(e)=>setAddress(e.target.value)}
            />
          </div>
          <div>
            <input
  
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="City"
              onChange={(e)=>setCity(e.target.value)}
            />
          </div>
          <div>
            <input
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Country"
              onChange={(e)=>setCountry(e.target.value)}
            />
          </div>
          <div>
            <input
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Pin Code"
              onChange={(e)=>setCode(e.target.value)}
            />
          </div>
          <div>
            <input
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="file"
              placeholder="Profile Picture"
              onChange={(e)=>postthumbImage(e)}
            />
          </div>
          <div>
            <input
              required
              class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="password"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={handleRegister}
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
                "Register"
              )}
            </button>

            
          </div>
          <div>
            <button
              onClick={()=>navigate("/")}
              class=" flex items-center justify-center w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
            >
                SignIn in Admin Panel
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

export default SignUp;
