import React, {useState, useEffect} from "react";
import HOC from "../../HOC";
import { useNavigate } from 'react-router-dom'
import { MdEdit, MdDelete } from "react-icons/md";
import {AiFillEye} from 'react-icons/ai';
import axios from "axios";


const Complaints = ()=>{
    const navigate = useNavigate();


    const [helps, setHelp] = useState([]);


    const getHelps = async()=>{
      const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/help";
      try{
        const {data} = await axios.get(url);
        setHelp(data?.message);
      }catch(err){
        console.log(err?.message);
      }
    }
  
    useEffect(()=>{
      getHelps();
    },[])

    const handleDelete = async(id)=>{
      const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/help`;
    }

    const [query, setQuery] = useState("");
    const searchD = !query ? helps :
      helps?.filter((it,i)=>{
        return it?.email?.includes(query) || it?.phone?.includes(query);
      })

    return (
        <>
      <div className="">
      <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">Complaints</h2>
          <div className="flex space-x-5">
            <div className="flex bg-[#ada9b31d] border border-[#0000001a] px-2 rounded-lg">
              <input
                className="bg-transparent outline-none w-full placeholder:text-sm placeholder:font-light"
                type="text"
                placeholder="Search User..."
                name=""
                id=""
                onChange={(e)=>setQuery(e.target.value)}
              />
            </div>
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
                    Name
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Mobile
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Email
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Query
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
                {searchD?.map((ele, i) => (
                  <>
                    <tr className="divider " style={{ textAlign: "center" }}>
                      <td className="w-68">{ele?.name}</td>
                      <td className="w-68">{ele?.email}</td>
                      <td className="w-68">{ele?.mobile}</td>
                      <td className="w-68">{ele?.query}</td>
                      <td class="flex  justify-center items-center space-x-4 h-16 w-18 py-3 text-gray-900">
                        <MdDelete className="text-lg cursor-pointer text-black" onClick={()=>handleDelete(ele?._id)} />
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </>
    )
}

export default HOC(Complaints);