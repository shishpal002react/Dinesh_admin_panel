import React, { useState, useEffect } from "react";
import HOC from "../../HOC";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Help = () => {
  const navigate = useNavigate();
  const [helps, setHelp] = useState([]);
  const [id, setId] = useState("");

  const [modalShow, setModalShow] = useState(false);

  const getHelps = async () => {
    const url =
      "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/getcontact";
    try {
      const { data } = await axios.get(url);
      setHelp(data?.data);
      console.log(data?.data);
    } catch (err) {
      console.log(err?.message);
    }
  };

  useEffect(() => {
    getHelps();
  }, []);

  const token = localStorage.getItem("token");

  const [isUpdate, setUpdate] = useState(false);

  function MyVerticallyCenteredModal(props) {
    const [companyname, setCompanyname] = useState("");
    const [email, setEmail] = useState("");
    const [contactnumber, setContactnumber] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async()=>{
      const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/addContact";
      try{
        const {data} = await axios.post(url, {
          companyname, email, contactnumber, address
        },{
          headers:{Authorization : `Bearer ${token}`}
        })
        console.log(data);
        getHelps();
      }catch(err){
        console.log(err?.message);
      }
    }

    const handleUpdate = async()=>{
      const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/editContact/${id}`;
      try{
        const {data} = await axios.put(url, {
          companyname, email, contactnumber, address
        },{
          headers:{Authorization : `Bearer ${token}`}
        })
        console.log(data);
        getHelps();
      }catch(err){
        console.log(err.message);
      }
    }

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
              <label>Company Name</label>
              <input
                type="text"
                placeholder="type here....."
                onChange={(e) => setCompanyname(e.target.value)}
              />
            </div>
            <div className="terms2">
              <label>Email</label>
              <input
                type="text"
                placeholder="type here....."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="terms2">
              <label>Contact Number</label>
              <input
                type="text"
                placeholder="type here....."
                onChange={(e) => setContactnumber(e.target.value)}
              />
            </div>
            <div className="terms2">
              <label>Address</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            {!isUpdate ? <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm" onClick={handleSubmit}>
              Add Contact
            </button> : <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm" onClick={handleUpdate}>
              Update Contact
            </button>}
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  const handleDelete = async(id)=>{
    const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/deleteContact/${id}`;
    try{
      const {data} = await axios.delete(url,{
        headers:{Authorization: `Bearer ${token}`}
      });
      console.log(data);
      getHelps();
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
            {helps?.length <= 0 ? <button
              onClick={() => {setUpdate(false); setModalShow(true)}}
              className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
            >
              Add Contact
            </button> : "" }
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
                    Company Name
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Mobile
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Email
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Address
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
                {helps?.map((ele, i) => (
                  <>
                    <tr className="divider " style={{ textAlign: "center" }}>
                      <td className="w-68">{ele?.companyname}</td>
                      <td className="w-68">{ele?.email}</td>
                      <td className="w-68">{ele?.contactnumber}</td>
                      <td className="w-68">{ele?.address}</td>
                      <td class="flex  justify-center items-center space-x-4 h-16 w-18 py-3 text-gray-900">
                        <MdEdit
                            onClick={()=>{
                              setUpdate(true);
                              setId(ele?._id);
                              setModalShow(true);
                            }}
                            className="text-lg cursor-pointer text-black"
                          />
                        <MdDelete className="text-lg cursor-pointer text-black" 
                          onClick = {()=>handleDelete(ele?._id)}
                        />
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
  );
};

export default HOC(Help);
