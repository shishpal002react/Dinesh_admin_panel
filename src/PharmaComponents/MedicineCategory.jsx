import React, {useEffect, useState} from "react";
import HOC2 from "../HOC2";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const MedicineCategory = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("ptoken");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [isUp, setUp] = useState(false);
  const getCategory = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/pharmacy/Category/category";
    try{
      const {data} = await axios.get(url,{
        headers:{Authorization : `Bearer ${token}`}
      });
      setData(data?.data);
    }catch(err){
      console.log(err.message);
    }
  }


  useEffect(()=>{
    getCategory();
  },[])

  const handleDelete = async(id)=>{
    const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/pharmacy/Category/category/${id}`;
    try{
      const {data} = await axios.delete(url,{
        headers:{Authorization : `Bearer ${token}`}
      })
      getCategory();
    }catch(err){
      console.log(err.message);
    }
  }

  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const handleUpdate = async()=>{
      const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/pharmacy/Category/udateCategory/${id}`;
      try{
        const {data} = await axios.patch(url, {name, image}, {
          headers : {Authorization : `Bearer ${token}`}
        })
        getCategory();
      }catch(err){
        console.log(err.message);
      }
    }
    const handleCreate = async()=>{
      const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/pharmacy/Category/createCategory";
      try{
        const {data} = await axios.post(url, {name, image},{
          headers:{Authorization : `Bearer ${token}`}
        })
        getCategory();
      }catch(err){
        console.log(err.message);
      }
    }

    const postthumbImage = (e) => {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dagqqok7o");
      fetch("https://api.cloudinary.com/v1_1/dagqqok7o/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          const imgrl = data.url;
          setImage(data.url);
          // console.log(image);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  

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
              <label>Category Image</label>
              <input type="file" placeholder="type here....." onChange={(e)=>postthumbImage(e)} />
            </div>
            <div className="terms2">
              <label>Category Name</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setName(e.target.value)}/>
            </div>
            {isUp ?
              <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
                onClick={handleUpdate}
              >
              Update Category
            </button>
            : <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
              onClick={handleCreate}
            >
              Add Category
            </button>}
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  const [query, setQuery] = useState("");

  const searchD = !query ? data :
    data?.filter((it,i)=>{
      return it?.name?.toLowerCase()?.includes(query?.toLowerCase());
    })

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="">
        <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">Medicine Categories</h2>
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
              onClick={() => { setUp(false); setModalShow(true)}}
              className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
            >
              Add Medicine Category
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
                    Category Image
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Category Name
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
                      <td className="w-68"><img src={ele?.image} alt="" style={{display:"block", margin:"auto"}}/></td>
                      <td className="w-68">{ele?.name}</td>
                      <td class="flex  justify-center items-center space-x-4 h-16 w-18 py-3 text-gray-900">
                        <MdEdit
                          onClick={() => {setId(ele?._id); setUp(true); setModalShow(true)}}
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

export default HOC2(MedicineCategory);
