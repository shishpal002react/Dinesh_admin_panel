import React from "react";
import HOC from "../../HOC";
import { useNavigate } from 'react-router-dom'
import { MdEdit, MdDelete } from "react-icons/md";
import {AiFillEye} from 'react-icons/ai'

const Invoice = ()=>{
    const navigate = useNavigate();
    const data = [
        {
            "name":"XYZ",
            "price":"123",
            "mode":"on-line",
            "status":"success"
        },
        {
            "name":"XYZ",
            "price":"123",
            "mode":"on-line",
            "status":"success"
        },
        {
            "name":"XYZ",
            "price":"123",
            "mode":"on-line",
            "status":"success"
        }
    ]
    return (
        <>
      <div className="">
      <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">All Invoices</h2>
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
                      Product Name
                    </th>
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Price
                    </th>
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Payment Mode
                    </th> 
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Payment Status
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
                                    <td>{ele?.price}</td>
                                    <td>{ele?.mode}</td>
                                    <td>{ele?.status}</td>
                                    <td class="flex border border-[#00000011] justify-center items-center space-x-4 h-16 w-28 py-3  text-gray-900">
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

export default HOC(Invoice);