import React, {useState, useEffect} from "react";
import HOC from "../../HOC";
import { useNavigate } from 'react-router-dom'
import { MdEdit, MdDelete } from "react-icons/md";
import {AiFillEye} from 'react-icons/ai';
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Commision = ()=>{
    const navigate = useNavigate();
    const token = localStorage.getItem("ptoken");
    const [comission, setComission] = useState([]);
    const [isUp, setUp] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [id, setId] = useState("");
    const getComission = async()=>{
      const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/listCommission";
      try{
        const {data} = await axios.get(url, {
          headers:{Authorization : `Bearer ${token}`}
        })
        setComission(data?.service);
      }catch(err){
        console.log(err.message);
      }
    }
    useEffect(()=>{
      getComission();
    },[])


    function MyVerticallyCenteredModal(props) {
      const [minOrder, setMin] = useState("");
      const [maxOrder, setMax] = useState("");
      const [commission, setCommission] = useState("");
  
      const handleCreate = async()=>{
        const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/addCommission";
        try{
          const {data} = await axios.post(url,{
            minOrder, maxOrder, commission
          },{
            headers:{Authorization:`Bearer ${token}`}
          })
          console.log(data);
          getComission();
        }catch(err){
          console.log(err.message);
        }
      }
  
      const handleUpdate = async()=>{
        const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/Commission/${id}`;
        try{
          const {data} = await axios.patch(url,{
            minOrder, maxOrder, commission
          },{
            headers:{Authorization:`Bearer ${token}`}
          })
          getComission();
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
                <label>Minimum Order</label>
                <input type="text" placeholder="type here....." onChange={(e)=>setMin(e.target.value)}/>
              </div>
              <div className="terms2">
                <label>Maximum Order </label>
                <input type="text" placeholder="type here....." onChange={(e)=>setMax(e.target.value)}/>
              </div>
              <div className="terms2">
                <label>Commission</label>
                <input type="text" placeholder="type here....." onChange={(e)=>setCommission(e.target.value)} />
              </div>
              {
                isUp?
                <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
                onClick={handleUpdate}
              >
                Update Commission
              </button>
                :
              <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
                onClick={handleCreate}
              >
                Add Commission
              </button>
              }
            </div>
          </Modal.Body>
        </Modal>
      );
    }

    const handleDelete = async(id)=>{
      const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/Commission/${id}`;
      try{
        const {data} = await axios.delete(url,{
          headers:{Authorization : `Bearer ${token}`}
        })
        getComission();
      }catch(err){
        console.log(err.message);
      }
    }

    const [query, setQuery] = useState("");


    return (
        <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="">
      <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">Commission List</h2>
          <div className="flex space-x-5">
            <div className="flex bg-[#ada9b31d] border border-[#0000001a] px-2 rounded-lg">
              <input
                className="bg-transparent outline-none w-full placeholder:text-sm placeholder:font-light"
                type="text"
                placeholder="Search Commission..."
                name=""
                id=""
                onChange={(e)=>setQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => {setUp(false); setModalShow(true)}}
              className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
            >
              Add Commission
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
                      Minimum Order
                    </th>
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Maximum Order
                    </th>
                    <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                      Comission
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
                        comission?.map((ele,i)=>(
                            <>
                                <tr className="divider" style={{textAlign:"center"}}>
                                    <td>{ele?.minOrder}</td>
                                    <td>{ele?.maxOrder}</td>
                                    <td>{ele?.commission}%</td>
                                    <td class="flex  justify-center items-center space-x-4 h-16 w-68 py-3  text-gray-900">
                                        <MdEdit onClick={()=>{setId(ele?._id); setUp(true); setModalShow(true)}} 
                                          className="text-lg cursor-pointer text-black" />
                                        <MdDelete className="text-lg cursor-pointer text-black"
                                          onClick={()=>handleDelete(ele?._id)}
                                        />
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

export default HOC(Commision);