import React, {useState, useEffect} from "react";
import HOC from "../../HOC";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Coupon = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  const [coupons, setCoupons] = useState([]);
  const getCoupons = async()=>{
    const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/listCoupan";
    try{
      const {data} = await axios.get(url,{
        headers:{Authorization : `Bearer ${token}`}
      });
      setCoupons(data?.service);
    }catch(err){
      console.log(err.message);
    }
  }
  useEffect(()=>{
    getCoupons();
  },[])

  const [isUp, setUp] = useState(false);
  const [id, setId] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    const [couponCode, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [minOrder, setMin] = useState("");
    const [discount, setDiscount] = useState("");
    const [couponType, setCouponType] = useState("");
    const [expirationDate, setExpdate] = useState("");
    const [activationDate, setActdate] = useState("");

    const handleCreate = async()=>{
      const url = "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/addCoupan";
      try{
        const {data} = await axios.post(url,{
          couponCode, description, minOrder, discount, couponType,
          expirationDate, activationDate
        },{
          headers:{Authorization:`Bearer ${token}`}
        })
        console.log(data);
        getCoupons();
      }catch(err){
        console.log(err.message);
      }
    }

    const handleUpdate = async()=>{
      const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/Coupan/${id}`;
      try{
        const {data} = await axios.patch(url,{
          couponCode, description, minOrder, discount, couponType,
          expirationDate, activationDate
        },{
          headers:{Authorization:`Bearer ${token}`}
        })
        getCoupons();
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
              <label>Coupon Code</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setCode(e.target.value)}/>
            </div>
            <div className="terms2">
              <label>Description </label>
              <input type="text" placeholder="type here....." onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="terms2">
              <label>Minimum Order</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setMin(e.target.value)} />
            </div>
            <div className="terms2">
              <label>Discount</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setDiscount(e.target.value)}/>
            </div>
            <div className="terms2">
              <label>Coupon Type</label>
              <input type="text" placeholder="type here....." onChange={(e)=>setCouponType(e.target.value)}/>
            </div>
            <div className="terms2">
              <label>Activation Date</label>
              <input type="date" placeholder="type here....." onChange={(e)=>setActdate(e.target.value)}/>
            </div>
            <div className="terms2">
              <label>Expiration Date</label>
              <input type="date" placeholder="type here....." onChange={(e)=>setExpdate(e.target.value)}/>
            </div>
            {
              isUp?
              <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
              onClick={handleUpdate}
            >
              Update Coupon 
            </button>
              :
            <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
              onClick={handleCreate}
            >
              Add Coupon 
            </button>
            }
          </div>
        </Modal.Body>
      </Modal>
    );
  }


  const handleDelete = async(id)=>{
    const url = `https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/Coupan/${id}`;
    try{
      const {data} = await axios.delete(url,{
        headers:{Authorization : `Bearer ${token}`}
      })
      getCoupons();
    }catch(err){
      console.log(err.message);
    }
  }

  const [query, setQuery] = useState("");
  const searchD = !query ? coupons :
    coupons?.filter((it,i)=>{
      return it?.couponCode?.toLowerCase()?.includes(query?.toLowerCase());
    })


  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="">
        <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">Coupon Code</h2>
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
              Add Coupon
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
                    Coupon Code
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Description
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Minimum Order
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Discount
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Coupon Type
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Activation Date
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Expiration Date
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
                    <tr className="divider" style={{ textAlign: "center" }}>
                      <td>{ele?.couponCode}</td>
                      <td>{ele?.description}</td>
                      <td>{ele?.minOrder}</td>
                      <td>{ele?.discount}%</td>
                      <td>{ele?.couponType}</td>
                      <td>{ele?.expirationDate}</td>
                      <td>{ele?.activationDate}</td>
                      <td class="flex  justify-center items-center space-x-4 h-16 w-18 py-3  text-gray-900">
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

export default HOC(Coupon);
