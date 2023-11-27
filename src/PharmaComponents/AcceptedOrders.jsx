import React, { useState, useEffect } from "react";
import HOC2 from "../HOC2";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const AcceptedOrders = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("ptoken");
  const [order, setOrder] = useState([]);
  const getAcceptOrder = async () => {
    const url =
      "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/order/getAllvendorAcceptOrder";
    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data?.data);
      setOrder(data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getAcceptOrder();
  }, []);

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

  const searchD = !query ? order :
    order?.filter((ele,i)=>{
      return ele?.orderId?.toLowerCase()?.includes(query?.toLowerCase())
    })


  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="">
        <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">Accepted Orders</h2>
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
                    Order Id
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Customer Name
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Order Items
                  </th>
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Total Amount
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
              <tbody className="table-body-hai ">
                {searchD?.map((ele, i) => (
                  <>
                    <tr className="divider " style={{ textAlign: "center" }}>
                      <td className="w-68">{ele?.orderId}</td>
                      <td className="w-68">Patient Name</td>
                      <td className="w-68">
                        <ul>
                          {ele?.medicines?.map((it, i) => (
                            <>
                              <li>{it?.medicineId?.name}</li>
                            </>
                          ))}
                        </ul>
                      </td>
                      <td className="w-68">{ele?.totalAmount}</td>
                      <td>Paid</td>
                      <td class="flex  justify-center items-center space-x-4 h-16 w-18 py-3 text-gray-900">
                        <MdDelete className="text-lg cursor-pointer text-black" />
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

export default HOC2(AcceptedOrders);
