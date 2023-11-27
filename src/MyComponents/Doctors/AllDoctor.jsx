import React, { useState } from "react";
import HOC from "../../HOC";
import {
  MdAddCircle,
  MdEdit,
  MdSearch,
  MdOutlineBloodtype,
  MdDelete,
  MdOutlineLocalPhone,
  MdCheckCircle,
  MdOutlineMarkEmailUnread,
} from "react-icons/md";
import {
  BsFillCameraFill,
  BsTelephone,
  BsPlusCircleFill,
} from "react-icons/bs";
import { GiMarrowDrain } from "react-icons/gi";
import { FiMapPin } from "react-icons/fi";

import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import { useEffect } from "react";
import { Oval } from "react-loader-spinner";

const AllDoctor = () => {
  const navigate = useNavigate();
  const [custSearch, setCustSearch] = useState("");
  //const [doctors, setDoctors] = useState([]);
  //const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const [doctors, setDoctors] = useState([]);

  const getAllDoctors = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/getApprovedDoctor";
    try{
      const {data} = await axios.get(url);
      console.log(data);
      setDoctors(data);
    }catch(err){
      console.log(err?.message);
    }
  }

  useEffect(() => {
    getAllDoctors();
  }, []);

  const [query, setQuery] = useState("");
  
  const searchD = !query ? doctors :
    doctors?.filter((it,i)=>{
      return it?.fullName?.toLowerCase()?.includes(query?.toLowerCase()) ||
        it?.email?.includes(query) || it?.phone?.includes(query);
    })

  return (
    <>
      <div className="">
        <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">Doctor List</h2>
          <div className="flex space-x-5">
            <div className="flex bg-[#ada9b31d] border border-[#0000001a] px-2 rounded-lg">
              <input
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
                className="bg-transparent outline-none w-full placeholder:text-sm placeholder:font-light"
                type="text"
                placeholder="Search Doctor..."
                name=""
                id=""
              />
            </div>
            {/*<button
              onClick={() => {
                navigate("/add-doctor");
              }}
              className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
            >
              Add Doctor
            </button>*/}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 h-screen overflow-y-scroll pb-52">
          {loading ? (
            <div className="flex justify-center items-center">
              <Oval color="white" secondaryColor="blue" />
            </div>
          ) : (
            searchD?.map((e) => {
                return (
                  <div className="bg-white shadow-2xl m-2 rounded-2xl p-2">
                    <div className="flex  items-center space-x-3">
                      <img
                        className="w-16 rounded-full"
                        src={e?.doctorspicture}
                        alt=""
                      />
                      <div className="">
                        <div className="flex items-center space-x-1">
                          <h2 className="font-semibold">
                            {e?.fullName}
                          </h2>
                          <MdCheckCircle className="text-blue-700" />
                        </div>
                        <div className="flex 2xl:flex-wrap text-gray-500 items-center space-x-2">
                          <h3 className="text-xs">{e.dob}</h3>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-2 border border-[#0000000e]" />
                    <div className="space-y-3 mt-5">
                      <div className="flex text-sm bg-gray-100 p-1 rounded-md items-center space-x-3">
                        <FiMapPin />
                        <h2>
                          {e?.registrationNumber}
                        </h2>
                      </div>
                      <div className="flex text-sm bg-gray-100 p-1 rounded-md items-center space-x-3">
                        <MdOutlineMarkEmailUnread />
                        <h2>{e?.email}</h2>
                      </div>
                      <div className="flex text-sm bg-gray-100 p-1 rounded-md items-center space-x-3">
                        <BsTelephone />
                        <h2>{e?.phone}</h2>
                      </div>
                      <div className="flex text-sm bg-gray-100 p-1 rounded-md items-center space-x-3" 
                        style={{display:"flex", justifyContent:"space-between"}}
                      >
                        <h2>Age</h2>
                        <h4>{e?.age}</h4>
                      </div>

                      {/*<div className="flex  justify-center text-sm  p-1 rounded-md items-center space-x-3">
                        <button className="w-full bg-blue-700 py-1 rounded-md text-white">
                          View{" "}
                        </button>
                        <button
                          onClick={() => {
                            navigate("/edit-doctor", { state: e });
                          }}
                          className="w-full bg-blue-700 py-1 rounded-md text-white"
                        >
                          Edit
                        </button>
                        <button className="w-full bg-blue-700  py-1 rounded-md text-white">
                          Delete
                        </button>
                        </div>*/}
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </div>
    </>
  );
};

let patientList = [
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email: "deepakflyweis@gmail.com",
    cat: "Cardiology",
    join: "09/02/1998",
    Add: "Gole Ka Mandir",
    city: "Gwalior",
    zip: "474005",
    country: "India",
  },
];

export default HOC(AllDoctor);
