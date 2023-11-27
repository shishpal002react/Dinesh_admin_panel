import React, { useState, useEffect } from "react";
import HOC from "../../HOC";
import {
  MdAddCircle,
  MdEdit,
  MdSearch,
  MdOutlineBloodtype,
  MdDelete,
  MdOutlineLocalPhone,
  MdCheckCircle,
  MdOutlineMarkEmailUnread
} from "react-icons/md";
import {
  BsFillCameraFill,
  BsTelephone,
  BsPlusCircleFill,
} from "react-icons/bs";
import {GiMarrowDrain} from 'react-icons/gi'
import { FiMapPin } from "react-icons/fi";

import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllPatient = () => {
  const navigate = useNavigate();
  const [patientSearch, setPatientSearch] = useState("");
  const [patient, setAllPatient] = useState([]);

  const getAllPatient = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/getPatient";
    try{
      const {data} = await axios.get(url);
      console.log(data);
      setAllPatient(data);
    }catch(err){
      console.log(err?.message);
    }
  }

  useEffect(()=>{
    getAllPatient();
  },[])

  const [query, setQuery] = useState("");
  const searchD = !query? patient : 
    patient?.filter((ele,i)=>{
      return ele?.fullName?.toLowerCase()?.includes(query?.toLowerCase()) || 
        ele?.phone?.includes(query) || ele?.email?.includes(query)
    })


  return (
    <>
      <div className="">
        <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <div className="flex items-center space-x-4">
          <h2 className="text-lg">Patient List</h2>
          <h2 className="hidden md:flex">(Total {searchD?.length})</h2>
          </div>
          <div className="flex space-x-5">
            <div className="flex bg-[#ada9b31d] border border-[#0000001a] px-2 rounded-lg">
              <input onChange={(e)=>{setQuery(e.target.value)}}
                className="bg-transparent outline-none w-full placeholder:text-sm placeholder:font-light"
                type="text"
                placeholder="Search Patient..."
                name=""
                id=""
              />
            </div>
            {/*<button onClick={()=>{navigate('/add-patient')}} className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm">
              Add Patient
  </button>*/}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5  overflow-y-scroll pb-52">
            {searchD?.map((e,i)=>{
                
                return(<div className="bg-white shadow-2xl m-2 rounded-2xl p-2">
                <div className="flex items-center space-x-3">
                  <img
                    className="w-20 rounded-full"
                    src={e?.pic}
                    alt=""
                  />
                  <div className="">
                    <div className="flex items-center space-x-1">
                      <h2 className="font-semibold">{e?.fullName}</h2>
                      <MdCheckCircle className="text-blue-700" />
                    </div>
                    <div className="flex text-gray-500 items-center space-x-2">
                      <h2>{e?.gender}</h2>
                      <h3 className="text-xs">({e?.dob})</h3>
                    </div>
                  </div>
                </div>
                <hr className="mt-2 border border-[#0000000e]" />
                <div className="space-y-3 mt-5">
                  <div className="flex text-sm bg-gray-100 p-1 rounded-md items-center space-x-3">
                    <FiMapPin />
                    <h2 >{e?.Add?.slice(0,20) + "..."}</h2>
                  </div>
                  <div className="flex text-sm bg-gray-100 p-1 rounded-md items-center space-x-1">
                    <MdOutlineMarkEmailUnread />
                    <h2>{e?.email}</h2>
                  </div>
                  <div className="flex text-sm bg-gray-100 p-1 rounded-md items-center space-x-3">
                    <BsTelephone />
                    <h2>{e?.phone}</h2>
                  </div>
                  <div className="flex text-sm bg-gray-100 p-1 rounded-md items-center space-x-3">
                    <MdOutlineBloodtype />
                    <h2>{e?.blood}</h2>
                  </div>
                  <div className="flex text-sm bg-gray-100 p-1 rounded-md items-center  space-x-16">
                    <h2>{e?.height}</h2>
                    <h2>{e?.weight}</h2>
                  </div>
                  <div className="flex text-sm bg-gray-100 p-1 rounded-md items-center  space-x-16">
                    <h2>Age</h2>
                    <h4>{e?.age}</h4>
                  </div>
                  {/* <div className="flex text-sm bg-gray-100 p-1 rounded-md items-center space-x-3">
                    <GiMarrowDrain />
                    <h2>{e?.marry}</h2>
                  </div> */}
                  <div className="flex  justify-center text-sm  p-1 rounded-md items-center space-x-3">
                    <button className="w-full bg-blue-700 py-1 rounded-md text-white">View </button>
                    <button onClick={()=>{navigate('/edit-patient', {state : e})}} className="w-full bg-blue-700 py-1 rounded-md text-white">Edit</button>
                    <button className="w-full bg-blue-700  py-1 rounded-md text-white">Delete</button>
                  </div>
                </div>
              </div>)
            })}
          
        </div>
      </div>
    </>
  );
};

let patientList = [
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Rahul",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    fName: "Deepak",
    lName: "Rathor",
    mobile: 7723970629,
    gender: "Male",
    email : "deepakflyweis@gmail.com",
    dob : "09/02/1998",
    Add: "Gole Ka Mandir",
    city : "Gwalior",
    zip : "474005",
    country : "India",
    blood: "O+",
    marry : "Single"
  },
 
 
 
 
 
 
 
 
 
  
  
  
  
  
  

  
  

  
  
  
  
  
  
];

export default HOC(AllPatient);
