import React, {useEffect, useState} from "react";
import HOC2 from "../HOC2";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const TotalMedicine = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [subcat, setSubCat] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const token = localStorage.getItem("ptoken");
  const [isUp, setUp] = useState(false);
  const [id, setId] = useState("");
  const [query, setQuery] = useState("");

  const getMedicine = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/Med/medicine";
    try{
      const {data} = await axios.get(url,{
        headers : {Authorization : `Bearer ${token}`}
      })
      console.log(data?.data);
      setMedicines(data?.data);
    }catch(err){
      console.log(err.message);
    }
  }

  const getCategory = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/pharmacy/Category/category";
    try{
      const {data} = await axios.get(url,{
        headers:{Authorization : `Bearer ${token}`}
      });
      setCategory(data?.data);
    }catch(err){
      console.log(err.message);
    }
  }

  const getSubCat = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/pharmacy/Sub/subcategory";
    try{
      const {data} = await axios.get(url,{
        headers:{Authorization : `Bearer ${token}`}
      })
      setSubCat(data?.data);
    }catch(err){
      console.log(err.message);
    }
  }

  useEffect(()=>{
    getMedicine();
    getCategory();
    getSubCat();
  },[]);


  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [batchNumber, setBatch] = useState("");
    const [quantity, setQuantity] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [subcategoryId, setSubId] = useState("");

    const handleCreate = async()=>{
      const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/Med/createMedicine";
      try{
        const {data} = await axios.post(url,{
          name, price, batchNumber, quantity, companyName,
          description, categoryId, subcategoryId
        },{
          headers:{Authorization :`Bearer ${token}`}
        })
        getMedicine();
      }catch(err){
        console.log(err.message);
      }
    }

    const handleUpdate = async()=>{
      const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/Med/medicine/${id}`;
      try{
        const {data} = await axios.patch(url,{
          name, price, batchNumber, quantity, companyName,
             categoryId, subcategoryId   
        },{
          headers:{Authorization:`Bearer ${token}`}
        })
        getMedicine();
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
              <label>Medicine Name</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="terms2">
              <label>Company Name</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setCompanyName(e.target.value)} />
            </div>
            <div className="terms2">
              <label>Quantity</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setQuantity(e.target.value)} />
            </div>
            <div className="terms2">
              <label>Batch No</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setBatch(e.target.value)}/>
            </div>
            <div className="terms2">
              <label>Price</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setPrice(e.target.value)} />
            </div>
            <div className="terms2">
              <label>Category</label>
              <select onChange={(e)=>setCategoryId(e.target.value)}>
                <option value="">Select</option>
                {
                  category?.map((ele,i)=>(
                    <option value={ele?._id}>{ele?.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="terms2">
              <label>Sub Category</label>
              <select onChange={(e)=>setSubId(e.target.value)}>
                <option value="">Select</option>
                {
                  subcat?.map((ele,i)=>(
                    <option value={ele?._id}>{ele?.name}</option>
                  ))
                }
              </select>
            </div>
            {
              isUp? 
              <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
              onClick={handleUpdate}
            >
              Update Medicine
            </button>
              :
              <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
              onClick={handleCreate}
            >
              Add Medicine
            </button>}
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  const handleDelete = async(id)=>{
    const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/Med/medicine/${id}`;
    try{
      const {data} = await axios.delete(url,{
        headers:{Authorization:`Bearer ${token}`}
      })
      console.log(data)
      getMedicine();
    }catch(err){
      console.log(err.message);
    }
  }

  const searchD = !query ? medicines : 
    medicines?.filter((it,i)=>{
      return it.name?.toLowerCase()?.includes(query?.toLowerCase()) || 
        it?.companyName?.toLowerCase()?.includes(query?.toLowerCase()) ||
        it?.batchNumber?.includes(query);
    })

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="">
        <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">Total Medicine</h2>
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
            <button
              onClick={() => {setUp(false); setModalShow(true)}}
              className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
            >
              Add medicines
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
                    Medicine name
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Company name
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Quantity
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Batch No
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Category
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Sub-Category
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Price
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
                      <td className="w-68">{ele?.companyName}</td>
                      <td className="w-68">{ele?.quantity}</td>
                      <td className="w-68">{ele?.batchNumber}</td>
                      <td className="w-68">{ele?.categoryId?.name}</td>
                      <td className="w-68">{ele?.subcategoryId?.name}</td>
                      <td className="w-68">{ele?.price}</td>
                      <td class="flex  justify-center items-center space-x-4 h-16 w-18 py-3 text-gray-900">
                        <MdEdit
                          onClick={() => {setId(ele?._id); setUp(true); setModalShow(true)}}
                          className="text-lg cursor-pointer text-black"
                        />
                        <MdDelete className="text-lg cursor-pointer text-black"
                          onClick={()=>handleDelete(ele?._id)}
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

export default HOC2(TotalMedicine);
