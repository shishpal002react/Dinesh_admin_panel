import React, {useState, useEffect} from "react";
import HOC from "../../HOC";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Privacy = () => {
  const navigate = useNavigate();
  const [privacy, setPrivacy] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const token = localStorage.getItem("token");
  const [isUpdate, setUpdate] = useState(false);
  const [id, setId] = useState("");
  const getPrivacy = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/static/getPrivacy";
    try{
      const {data} = await axios.get(url);
      console.log(data?.data);
      setPrivacy(data?.data);
    }catch(err){
      console.log(err?.message);
    }
  }

  useEffect(()=>{
    getPrivacy();
  },[])



  function MyVerticallyCenteredModal(props) {
    const [privacy, setP] = useState("");
    const handleUpdate = async()=>{
      const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/static/privacy/${id}`;
      try{
        const {data} = await axios.put(url,{privacy},{
          headers : {Authorization : `Bearer ${token}`}
        })
        console.log(data?.data);
        getPrivacy();
      }catch(err){
        console.log(err?.message);
      }
    }
    const handleCreate = async()=>{
      const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/static/createPrivacy";
      try{
        const {data} = await axios.post(url, {privacy},{
          headers: {Authorization : `Bearer ${token}`}
        })
        getPrivacy();
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
              <label>Privacy Policy</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setP(e.target.value)} />
            </div>
            {isUpdate ? <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm" onClick={handleUpdate}>
              Update Privacy Policy
            </button> : <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
              onClick={handleCreate}
            >
              Add Privacy Policy
            </button>}
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  const handleDelete = async(id)=>{
    const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/static/privacy/${id}`;
    try{
      const {data} = await axios.delete(url, {
        headers : {Authorization : `Bearer ${token}`}
      })
     // console.log(data?.data);
      getPrivacy();
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
            <button
              onClick={() => {setUpdate(false); setModalShow(true)}}
              className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
            >
              Add Privacy Policy
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
                    Privacy Policy
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
                {privacy?.map((ele, i) => (
                  <>
                    <tr className="divider " style={{ textAlign: "center" }}>
                      <td className="w-68">{ele?.privacy}</td>
                      <td class="flex  justify-center items-center space-x-4 h-16 w-18 py-3 text-gray-900">
                        <MdEdit
                          onClick={() => {setId(ele?._id);setUpdate(true);  setModalShow(true)}}
                          className="text-lg cursor-pointer text-black"
                        />
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
  );
};

export default HOC(Privacy);
