import React from "react";
import HOC from "../../HOC";
import { useNavigate } from 'react-router-dom'
import { MdEdit, MdDelete } from "react-icons/md";
import {AiFillEye} from 'react-icons/ai'

const OPD = ()=>{
    const navigate = useNavigate();
    const data = [
        {
            "name":"XYZ",
            "doctorList":["abc","wer","def"],
            "time":"08:30 am - 07:30 pm"
        },
        {
            "name":"XYZ",
            "doctorList":["abc","wer","def"],
            "time":"08:30 am - 07:30 pm"
        },
        {
            "name":"XYZ",
            "doctorList":["abc","wer","def"],
            "time":"08:30 am - 07:30 pm"
        }
    ]
    return (
        <>
      <div className="">
      <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">New Users</h2>
          <div className="flex space-x-5">
            <div className="flex bg-[#ada9b31d] border border-[#0000001a] px-2 rounded-lg">
              <input
                className="bg-transparent outline-none w-full placeholder:text-sm placeholder:font-light"
                type="text"
                placeholder="Search User..."
                name=""
                id=""
              />
            </div>
            <button onClick={()=>{navigate('/add-lab')}} className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm">
              Add OPD
            </button>
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
                      OPD Name
                    </th>
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Doctor's List
                    </th>   
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Timing
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
                <tbody className="table-body-hai " >
                    {
                        data?.map((ele,i)=>(
                            <>
                                <tr className="divider" style={{textAlign:"center"}}>
                                    <td>{ele?.name}</td>
                                    <td><ul>
                                            {
                                                ele?.doctorList?.map((it,i)=>(
                                                    <li>{it}</li>
                                                ))
                                            }
                                        </ul>
                                    </td>
                                    <td >{ele?.time}</td>
                                    <td class="flex border border-[#00000011] justify-center items-center space-x-4 h-16 w-28 py-3  text-gray-900">
                                        <MdEdit onClick={()=>{navigate('/edit-lab', {state : i})}} className="text-lg cursor-pointer text-black" />
                                        <AiFillEye className="text-lg cursor-pointer text-black" />
                                        <MdDelete className="text-lg cursor-pointer text-black" />
                                    </td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
              </table>
            </div>
          </div>
      </div>
        </>
    )
}

export default HOC(OPD);