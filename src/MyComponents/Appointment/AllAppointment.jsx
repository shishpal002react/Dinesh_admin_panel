import React, {useState, useEffect} from "react";
import HOC from "../../HOC";
import { appointmentData } from "../Dashboard/Dashboard";
import { BsFillCameraFill } from "react-icons/bs";
import {MdEdit} from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllAppointment = () => {
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState([]);

    const token = localStorage.getItem("token");
    const getAppointments = async()=>{
      const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/booking/getallBooking";
      try{
        const {data} = await axios.get(url,{
          headers:{Authorization :`Bearer ${token}`}
        })
        console.log(data?.data);
        setAppointment(data?.data);
      }catch(err){
        console.log(err?.message);
      }
    }

    useEffect(()=>{
      getAppointments();
    },[])
    const [query, setQuery] = useState("");

    const searchD = !query ? appointment :
      appointment?.filter((it,i)=>{
        return it?.Patientname?.toLowerCase()?.includes(query?.toLowerCase()) ||
          it?.dob?.includes(query);
      })
  return (
    <>
      <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
        <h2 className="text-lg">Appointment List</h2>
        <div className="flex space-x-5">
          <div className="flex bg-[#ada9b31d] border border-[#0000001a] px-2 rounded-lg">
            <input
              className="bg-transparent py-1 outline-none w-full placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Search Appointment..."
              name=""
              id=""
              onChange={(e)=>setQuery(e.target.value)}
            />
          </div>
          {/* <button onClick={()=>{navigate('/add-appointment')}} className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm">
          Add Appointment
        </button> */}
        </div>
      </div>
      <div className="bg-white h-[90vh] mb-40  mt-6 overflow-y-scroll space-y-4 p-3 rounded-2xl m-2 shadow">
            <div className="">
              <table class="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    {/* <th class=" px-4 py-3 title-font tracking-wider font-medium text-black text-base  rounded-tl rounded-bl">
                  Roll No.
                </th> */}
                    <th class="  title-font tracking-wider font-medium text-black text-sm  rounded-tl rounded-bl">
                      {/*<BsFillCameraFill />*/}
                      Sr. No
                    </th>
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Patient Name
                    </th>
                    <th class="  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      DOB
                    </th>
                    <th class="w-16   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Age
                    </th>
                    <th class=" w-48 text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Doctor Name
                    </th>
                    <th class="   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Fees
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
                    {/* <th class=" w-28 title-font text-center tracking-wider font-medium text-black text-sm bg-[] rounded-tr rounded-br/">
                      Action
                    </th> */}
                  </tr>
                </thead>
                <tbody className="table-body-hai">
                  {searchD?.map((e,i) => {
                    return (
                      <>
                        <tr className="divider ">
                          {/* <td class="px-4 py-3">{e.roll}</td> */}
                          <td class="px-4 border border-[#00000011] w-20 py-3">
                            {i+1}
                          </td>
                          <td class="px-4 w-40 py-3 border border-[#00000011] text-sm text-gray-600 ">
                            {e.Patientname}
                          </td>
                          <td class="px-4 py-3 text-sm border border-[#00000011] text-gray-600 ">
                            {e.dob}
                          </td>
                          <td class="px-4 w-40 py-3 text-sm border border-[#00000011]  text-gray-600 ">
                            {e?.userId?.age}
                          </td>
                          <td class="px-4  w-40 py-3 text-sm border border-[#00000011]  text-gray-600 ">
                            {e?.doctorId?.fullName}
                          </td>
                          <td class="px-4 w-44 py-3 text-sm border border-[#00000011] text-gray-600">
                            {e?.fees}
                          </td>
                          <td class="px-4 py-3 text-sm border border-[#00000011] text-gray-600  ">
                            {e?.createdAt}
                          </td>
                          <td class="px-4 py-3 text-sm border border-[#00000011] text-gray-600">
                            {e?.available}
                          </td> 
                          <td class="px-4 py-3 text-sm border border-[#00000011] text-gray-600">
                            {e.status}
                          </td>

                          {/* <td class="flex border border-[#00000011] justify-center items-center space-x-4 h-16 w-28 py-3  text-gray-900">
                            <MdEdit className="text-lg text-black" />{" "}
                            <AiFillEye className="text-lg text-black" />{" "}
                            <MdDelete className="text-lg text-black" /> 
                          </td> */}
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
    </>
  );
};

export default HOC(AllAppointment);
