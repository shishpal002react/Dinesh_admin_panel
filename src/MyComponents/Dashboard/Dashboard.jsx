import React, {useEffect, useState} from "react";
import HOC from "../../HOC";
import pateint from "../Assets/pateint.png";
import doctornew from "../Assets/doctornew.png";
import pharma from "../Assets/pharma.png";
import lab from "../Assets/lab.png";
import { BsFillCameraFill } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios"

const Dashboard = () => {

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

  const [pharma, setPharma] = useState([]);
  const getPharmacist = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/getPharmacys";
    try{
      const {data} = await axios.get(url);
      console.log(data);
      setPharma(data);
    }catch(err){
      console.log(err.message);
    }
  }


  useEffect(()=>{
    getAllPatient();
    getAllDoctors();
    getPharmacist();
  },[])
  return (
    <>
      <div className="bg-[#089CAC] overflow-y-scroll h-screen w-full ">
        <div className="bg-[#ECF4F5]   w-full  rounded-2xl md:p-4">
          <div className="grid my-4 grid-cols-2 md:grid-cols-4">
            <div className="flex justify-between m-2 p-3 bg-white shadow items-center space-x-4  rounded-2xl ">
              <div className="space-y-1">
                <h2 className=" md:text-lg">Total Patient</h2>
                <hr />
                <h2>{patient.length}</h2>
              </div>
              <div className="">
                <img className="w-20" src={pateint} alt="" />
              </div>
            </div>
            <div className="flex justify-between m-2 p-3 bg-white shadow items-center space-x-4  rounded-2xl ">
              <div className="space-y-1">
                <h2 className="md:text-lg">Total Doctor</h2>
                <hr />
                <h2>{doctors?.length}</h2>
              </div>
              <div className="">
                <img className="w-20" src={doctornew} alt="" />
              </div>
            </div>
            <div className="flex justify-between m-2 p-3 bg-white shadow items-center space-x-4  rounded-2xl ">
              <div className="space-y-1">
                <h2 className="md:text-lg">Total Lab</h2>
                <hr />
                <h2>200</h2>
              </div>
              <div className="">
                <img className="w-20" src={lab} alt="" />
              </div>
            </div>
            <div className="flex justify-between m-2 p-3 bg-white shadow items-center space-x-4  rounded-2xl ">
              <div className="space-y-1">
                <h2 className="md:text-lg">Total Pharmacy</h2>
                <hr />
                <h2>{pharma?.length}</h2>
              </div>
              <div className="">
                <img className="w-20" src={pharma} alt="" />
              </div>
            </div>
          </div>
          {/* <div className="grid my-5 grid-cols-1 md:grid-cols-3">
            <div className="bg-white h-[50vh]  overflow-y-scroll space-y-2 p-3 rounded-2xl m-2 shadow">
              <div className="flex">
                <h2 className="font-semibold">Recent Orders</h2>
              </div>
              <hr />
              <div className="">
                <table class="w-full  text-left blackspace-no-wrap">
                  <thead>
                    { <tr className="">
                    <th className="text-left font-normal">Orders</th>
                    <th className="font-normal">Dates</th>
                  </tr> }
                  </thead>
                  <tbody>
                    {recentOrder.map((e) => {
                      return (
                        <tr className="divider">
                          <td class="px-4 py-2 font-extralight text-sm">
                            {e.name}
                          </td>
                          <td class="px-4 py-2 font-extralight text-right text-sm">
                            {e.date}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white h-[50vh]  overflow-y-scroll space-y-2 p-3 rounded-2xl m-2 shadow">
              <div className="flex">
                <h2 className="font-semibold">Recent Join Doctor</h2>
              </div>
              <hr />
              <div className="">
                <table class="w-full  text-left blackspace-no-wrap">
                  <thead>
                    <tr className="">
                    <th className="text-left font-normal">Orders</th>
                    <th className="font-normal">Dates</th>
                  </tr> 
                  </thead>
                  <tbody>
                    {recentOrder.map((e) => {
                      return (
                        <tr className="divider">
                          <td class="px-4 py-2 font-extralight text-sm">
                            {e.name}
                          </td>
                          <td class="px-4 py-2 font-extralight text-right text-sm">
                            {e.date}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
            </div>
            </div>
            <div className="bg-white h-[50vh]  overflow-y-scroll space-y-2 p-3 rounded-2xl m-2 shadow">
              <div className="flex">
                <h2 className="font-semibold">Recent Join Pharmacy</h2>
              </div>
              <hr />
              <div className="">
                <table class="w-full  text-left blackspace-no-wrap">
                  <thead>
                    { <tr className="">
                    <th className="text-left font-normal">Orders</th>
                    <th className="font-normal">Dates</th>
                  </tr> }
                  </thead>
                  <tbody>
                    {recentOrder.map((e) => {
                      return (
                        <tr className="divider">
                          <td class="px-4 py-2 font-extralight text-sm">
                            {e.name}
                          </td>
                          <td class="px-4 py-2 font-extralight text-right text-sm">
                            {e.date}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
{/* 
          <div className="bg-white h-[50vh]  overflow-y-scroll space-y-4 p-3 rounded-2xl m-2 shadow">
            <div className="flex">
              <h2 className="font-semibold">Recent Appointment</h2>
            </div>
            <hr />
            <div className="">
              <table class="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                     <th class=" px-4 py-3 title-font tracking-wider font-medium text-black text-base  rounded-tl rounded-bl">
                  Roll No.
                </th> }
                    <th class="  title-font tracking-wider font-medium text-black text-sm  rounded-tl rounded-bl">
                      <BsFillCameraFill />
                    </th>
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Patient Name
                    </th>
                    <th class="  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Gender
                    </th>
                    <th class="w-16   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Age
                    </th>
                    <th class=" w-48 text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Doctor Name
                    </th>
                    <th class="   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Department
                    </th>
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Appointment Date
                    </th>
                    <th class="w-48   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Appointment Time
                    </th>
                    <th class="   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Status
                    </th>
                    { <th class=" w-28 title-font text-center tracking-wider font-medium text-black text-sm bg-[] rounded-tr rounded-br/">
                      Action
                    </th> }
                  </tr>
                </thead>
                <tbody className="table-body-hai">
                  {appointmentData.map((e) => {
                    return (
                      <>
                        <tr className="divider ">
                          { <td class="px-4 py-3">{e.roll}</td> }
                          <td class="px-4 w-20 py-3">
                            <img
                              className="rounded-full w-10 "
                              src={e.pic}
                              alt=""
                            />
                          </td>
                          <td class="px-4 w-40 py-3 text-sm text-gray-600 ">
                            {e.name}
                          </td>
                          <td class="px-4 py-3 text-sm text-gray-600 ">
                            {e.gender}
                          </td>
                          <td class="px-4 w-40 py-3 text-sm  text-gray-600 ">
                            {e.age}
                          </td>
                          <td class="px-4  w-40 py-3 text-sm  text-gray-600 ">
                            {e.dName}
                          </td>
                          <td class="px-4 w-44 py-3 text-sm text-gray-600">
                            {e.department}
                          </td>
                          <td class="px-4 py-3 text-sm text-gray-600  ">
                            {e.aDate}
                          </td>
                          <td class="px-4 py-3 text-sm text-gray-600">
                            {e.aTime}
                          </td>
                          <td class="px-4 py-3 text-sm text-gray-600">
                            {e.status}
                          </td>

                          { <td class="flex justify-center items-center space-x-4 h-16 w-28 py-3  text-gray-900">
                            <MdEdit className="text-lg text-black" />{" "}
                            <AiFillEye className="text-lg text-black" />{" "}
                            <MdDelete className="text-lg text-black" />
                          </td> }
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div> */}
          {/* <div className="flex justify-between px-3 py-4 z-10 rounded-2xl fixed-bottom relative mt-10 mb-32 bg-white shadow">
          <h2 className="text-sm">Copyright 2022 | Flyweis Technology | All Rights Reserved.</h2>
        </div> */}
        </div>
        
      </div>
    </>
  );
};

let recentOrder = [
  {
    name: "Mask N95",
    date: "13/06/2022",
  },
  {
    name: "Disprin",
    date: "13/06/2022",
  },
  {
    name: "Glucose",
    date: "13/06/2022",
  },
  {
    name: "Mask N95",
    date: "13/06/2022",
  },
  {
    name: "Disprin",
    date: "13/06/2022",
  },
  {
    name: "Glucose",
    date: "13/06/2022",
  },
  {
    name: "Mask N95",
    date: "13/06/2022",
  },
  {
    name: "Disprin",
    date: "13/06/2022",
  },
  {
    name: "Glucose",
    date: "13/06/2022",
  },
  {
    name: "Glucose",
    date: "13/06/2022",
  },
];
export let appointmentData = [
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    name: "Deepak Rathor",
    gender: "Male",
    age: "24",
    dName: "Deepak Rathor",
    department: "Heart",
    aDate: "13/06/2022",
    aTime: "07:08 PM",
    status: "active",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    name: "Deepak Rathor",
    gender: "Male",
    age: "24",
    dName: "Deepak Rathor",
    department: "Heart",
    aDate: "13/06/2022",
    aTime: "07:08 PM",
    status: "active",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    name: "Deepak Rathor",
    gender: "Male",
    age: "24",
    dName: "Deepak Rathor",
    department: "Heart",
    aDate: "13/06/2022",
    aTime: "07:08 PM",
    status: "active",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    name: "Deepak Rathor",
    gender: "Male",
    age: "24",
    dName: "Deepak Rathor",
    department: "Heart",
    aDate: "13/06/2022",
    aTime: "07:08 PM",
    status: "active",
  },

  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    name: "Deepak Rathor",
    gender: "Male",
    age: "24",
    dName: "Deepak Rathor",
    department: "Heart",
    aDate: "13/06/2022",
    aTime: "07:08 PM",
    status: "active",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    name: "Deepak Rathor",
    gender: "Male",
    age: "24",
    dName: "Deepak Rathor",
    department: "Heart",
    aDate: "13/06/2022",
    aTime: "07:08 PM",
    status: "active",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    name: "Deepak Rathor",
    gender: "Male",
    age: "24",
    dName: "Deepak Rathor",
    department: "Heart",
    aDate: "13/06/2022",
    aTime: "07:08 PM",
    status: "active",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    name: "Deepak Rathor",
    gender: "Male",
    age: "24",
    dName: "Deepak Rathor",
    department: "Heart",
    aDate: "13/06/2022",
    aTime: "07:08 PM",
    status: "active",
  },
  {
    pic: "https://ik.imagekit.io/bpldfcr7nd/man-with-beard-avatar-character-isolated-icon-free-vector_Utok4UUTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654507743326",
    name: "Deepak Rathor",
    gender: "Male",
    age: "24",
    dName: "Deepak Rathor",
    department: "Heart",
    aDate: "13/06/2022",
    aTime: "07:08 PM",
    status: "active",
  },
];

export default HOC(Dashboard);
