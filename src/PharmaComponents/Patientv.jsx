import React, {useState, useEffect} from "react";
import HOC2 from "../HOC2";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Patient = () => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState([]);
  const getPatient = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/getPatient";
    try{
      const {data} = await axios.get(url);
      console.log(data);
      setPatient(data);
    }catch(err){
      console.log(err.message);
    }
  }
  useEffect(()=>{
    getPatient();
  },[])

  console.log("Hello");
  const [modalShow, setModalShow] = React.useState(false);

 function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="terms1">
            <div className="terms2">
              <label>Patient Name</label>
              <input type="text" placeholder="type here....." />
            </div>
            <div className="terms2">
              <label>Gender</label>
              <input type="text" placeholder="type here....." />
            </div>
            <div className="terms2">
              <label>DOB</label>
              <input type="date" placeholder="type here....." />
            </div>
            <div className="terms2">
              <label>Email</label>
              <input type="text" placeholder="type here....." />
            </div>
            <div className="terms2">
              <label>Phone</label>
              <input type="text" placeholder="type here....." />
            </div>
            <div className="terms2">
              <label>Address</label>
              <input type="text" placeholder="type here....." />
            </div>
            <div className="terms2">
              <label>Blood Group</label>
              <input type="text" placeholder="type here....." />
            </div>
            <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm">
              Add Patient
            </button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  const [query, setQuery] = useState("");

  const searchD = !query ? patient :
    patient?.filter((it,i)=>{
      return it?.fullName?.toLowerCase()?.includes(query?.toLowerCase()) || 
        it?.phone?.includes(query) || it?.email?.includes(query)
    })

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="">
        <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">All Patient</h2>
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
            {/*<button
              onClick={() => setModalShow(true)}
              className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
            >
              Add Patient
  </button>*/}          
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
                    Phone
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Email
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Age
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Weight
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Height
                  </th>
                  {/* <th class="w-48   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Appointment Time
                    </th>
                    <th class="   text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Status
                    </th> */}
                  {/*<th class=" w-28 title-font text-center tracking-wider font-medium text-black text-sm bg-[] rounded-tr rounded-br/">
                    Action
                  </th>*/}
                </tr>
              </thead>
              <tbody className="table-body-hai ">
                {searchD?.map((ele, i) => (
                  <>
                    <tr className="divider " style={{ textAlign: "center" }}>
                      <td className="w-68">{ele?.fullName}</td>
                      <td className="w-68">{ele?.phone}</td>
                      <td className="w-68">{ele?.email}</td>
                      <td className="w-68">{ele?.age}</td>
                      <td className="w-68">{ele?.weight}</td>
                      <td className="w-68">{ele?.height}</td>
                      {/*<td class="flex  justify-center items-center space-x-4 h-16 w-18 py-3 text-gray-900">
                        <MdEdit
                          onClick={() => setModalShow(true)}
                          className="text-lg cursor-pointer text-black"
                        />
                        <MdDelete className="text-lg cursor-pointer text-black" />
                </td>*/}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC2(Patient);
