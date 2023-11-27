import React from 'react'
import { useNavigate } from 'react-router-dom'
import HOC from '../../HOC'
import { BsFillCameraFill } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";
import {AiFillEye} from 'react-icons/ai'

const AllLab = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="">
      <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">Lab List</h2>
          <div className="flex space-x-5">
            <div className="flex bg-[#ada9b31d] border border-[#0000001a] px-2 rounded-lg">
              <input
                className="bg-transparent outline-none w-full placeholder:text-sm placeholder:font-light"
                type="text"
                placeholder="Search Doctor..."
                name=""
                id=""
              />
            </div>
            <button onClick={()=>{navigate('/add-lab')}} className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm">
              Add Lab
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
                      Lab Name
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
                  {labData.map((e) => {
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
                            {e.name}
                          </td>
                          <td class="px-4 py-3 border border-[#00000011] text-sm text-gray-600 ">
                            {e.owName}
                          </td>
                          <td class="px-4 w-40 border border-[#00000011] py-3 text-sm  text-gray-600 ">
                            {e.date}
                          </td>
                          <td class="px-4 border border-[#00000011]  w-40 py-3 text-sm  text-gray-600 ">
                            {e.add.slice(0,15) + "..."}
                          </td>
                          <td class="px-4 border border-[#00000011] w-44 py-3 text-sm text-gray-600">
                            {e.phone}
                          </td>
                          <td class="px-4 border border-[#00000011] py-3 text-sm text-gray-600  ">
                            {e.email}
                          </td>
                          {/* <td class="px-4 py-3 text-sm text-gray-600">
                            {e.aTime}
                          </td>
                          <td class="px-4 py-3 text-sm text-gray-600">
                            {e.status}
                          </td> */}

                          <td class="flex border border-[#00000011] justify-center items-center space-x-4 h-16 w-28 py-3  text-gray-900">
                            <MdEdit onClick={()=>{navigate('/edit-lab', {state : e})}} className="text-lg cursor-pointer text-black" />{" "}
                            {/* <AiFillEye className="text-lg cursor-pointer text-black" />{" "} */}
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

export let labData = [
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },

  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
  {
    name  :"Flyweis Laboratory",
    date : "14/06/2022",
    owName : "Deepak Rathor",
    add :"Mayur Vihar Phase -1",
    phone : "9876543210",
    email  : "flyweis@gmail.com",
    city : "New Delhi",
    zip : "110091",
    country : "India"
  },
]

export default HOC(AllLab)
