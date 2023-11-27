import React from "react";
import HOC2 from "../HOC2";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const PharmaInvoice = () => {
  const navigate = useNavigate();
  const data = [
    {
      name: "Radhe",
      price: "1199",
      mode: "on-line",
      status: "success",
      date: "07/07/2023",
    },
  ];

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
              <label>Product Name</label>
              <input type="text" placeholder="type here....." />
            </div>
            <div className="terms2">
              <label>Price</label>
              <input type="text" placeholder="type here....." />
            </div>
            <div className="terms2">
              <label>Total Amount</label>
              <input type="date" placeholder="type here....." />
            </div>
            <div className="terms2">
              <label>Payment Status</label>
              <input type="text" placeholder="type here....." />
            </div>
            <div className="terms2">
              <label>Created At</label>
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

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="">
        <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">Invoices</h2>
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
              onClick={() => setModalShow(true)}
              className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm"
            >
              Generate Invoice
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
                  <th class=" w-48  text-center title-font tracking-wider font-medium text-black text-sm bg-[]">
                    Date
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
                {data?.map((ele, i) => (
                  <>
                    <tr className="divider " style={{ textAlign: "center" }}>
                      <td className="w-68">{ele?.name}</td>
                      <td className="w-68">{ele?.price}</td>
                      <td className="w-68">{ele?.mode}</td>
                      <td className="w-68">{ele?.status}</td>
                      <td className="w-68">{ele?.date}</td>
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

export default HOC2(PharmaInvoice);
