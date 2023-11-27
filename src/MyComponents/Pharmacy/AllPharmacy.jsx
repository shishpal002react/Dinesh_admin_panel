import React, {useEffect, useState} from 'react'
import HOC from '../../HOC'
import { useNavigate } from 'react-router-dom'
import { BsFillCameraFill } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";
import {AiFillEye} from 'react-icons/ai'
import { labData } from '../Lab/AllLab';
import axios from "axios";

const AllPharmacy = () => {
    const navigate = useNavigate();
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
      getPharmacist();
    },[])

    const handleDelete = async(id)=>{
      const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/deleteUser/${id}`;
      try{
        const {data} = await axios.delete(url);
        getPharmacist();
      }catch(err){
        console.log(err.message);
      }
    }

    const [query, setQuery] = useState("");
    const searchD = !query ? pharma :
      pharma?.filter((it,i)=>{
        return it?.pharmacyName?.toLowerCase()?.includes(query?.toLowerCase()) ||
          it?.fullName?.toLowerCase()?.includes(query?.toLowerCase()) ||
            it?.email?.includes(query) || it?.phone?.includes(query)
      })

  return (
    <>
      <div className="">
      <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">Pharmacy List</h2>
          <div className="flex space-x-5">
            <div className="flex bg-[#ada9b31d] border border-[#0000001a] px-2 rounded-lg">
              <input
                className="bg-transparent outline-none w-full placeholder:text-sm placeholder:font-light"
                type="text"
                placeholder="Search Pharmacy..."
                name=""
                id=""
                onChange={(e)=>setQuery(e.target.value)}
              />
            </div>
            {/* <button onClick={()=>{navigate('/add-pharmacy')}} className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm">
              Add Pharmacy
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
                    {/* <th class="  title-font tracking-wider font-medium text-black text-sm  rounded-tl rounded-bl">
                      <BsFillCameraFill />
                    </th> */}
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Pharma Name
                    </th>
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Owner
                    </th>
                    <th class="w-16   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Join
                    </th>
                    <th class=" w-48 text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Address
                    </th>
                    <th class="   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Phone
                    </th>
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Email
                    </th>
                    {/* <th class="w-48   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Appointment Time
                    </th>
                    <th class="   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Status
                    </th> */}
                    <th class=" w-28 title-font text-center tracking-wider font-medium text-black text-sm bg-[] rounded-tr rounded-br/">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body-hai ">
                  {searchD?.map((e) => {
                    return (
                      <>
                        <tr className="divider  ">
                          {/* <td class="px-4 py-3">{e.roll}</td> */}
                          {/* <td class="px-4 w-20 py-3">
                            <img
                              className="rounded-full w-10 "
                              src={e.pic}
                              alt=""
                            />
                          </td> */}
                          <td class="px-4 w-40 py-3 border border-[#00000011] text-sm text-gray-600 ">
                            {e?.pharmacyName}
                          </td>
                          <td class="px-4 py-3 border border-[#00000011] text-sm text-gray-600 ">
                            {e?.fullName}
                          </td>
                          <td class="px-4 w-40 border border-[#00000011] py-3 text-sm  text-gray-600 ">
                            {e?.createdAt}
                          </td>
                          <td class="px-4 border border-[#00000011]  w-40 py-3 text-sm  text-gray-600 ">
                            {e?.address}
                          </td>
                          <td class="px-4 border border-[#00000011] w-44 py-3 text-sm text-gray-600">
                            {e?.phone}
                          </td>
                          <td class="px-4 border border-[#00000011] py-3 text-sm text-gray-600  ">
                            {e?.email}
                          </td>
                          {/* <td class="px-4 py-3 text-sm text-gray-600">
                            {e.aTime}
                          </td>
                          <td class="px-4 py-3 text-sm text-gray-600">
                            {e.status}
                          </td> */}

                          <td class="flex border border-[#00000011] justify-center items-center space-x-4 h-16 w-28 py-3  text-gray-900">
                            {/* <MdEdit onClick={()=>{navigate('/edit-pharmacy', {state : e})}} className="text-lg cursor-pointer text-black" />{" "} */}
                            <MdDelete className="text-lg cursor-pointer text-black" />
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </>
  )
}

export default HOC(AllPharmacy)
