import React from "react";
import HOC2 from "../HOC2";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const PushNoti = () => {
  const navigate = useNavigate();
  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod ligula at lectus finibus, ut placerat elit tempor. Vestibulum sed velit at nunc laoreet luctus. Morbi vulputate sapien eu tincidunt volutpat. Duis vel lorem non leo cursus tincidunt. Proin fringilla arcu ac risus ultrices condimentum. Curabitur sollicitudin nisl vel scelerisque maximus. Sed laoreet dignissim enim, vitae tempus ipsum gravida sit amet. Nullam accumsan ligula sit amet augue bibendum, sed volutpat urna lacinia. Maecenas sit amet feugiat lacus. Fusce consectetur neque nisl, a aliquet mi bibendum non.",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur placerat elit tempor. Vestibulum  laoreet luctus. Morbi vulputate sapien eu tincidunt volutpat. Duis vel lorem non leo cursus tincidunt. Proin fringilla arcu ac risus ultrices condimentum. Curabitur sollicitudin nisl vel scelerisque maximus. Sed laoreet dignissim enim, vitae tempus ipsum gravida sit amet. Nullam accumsan ligula sit amet augue bibendum, sed volutpat urna lacinia. Maecenas sit amet feugiat lacus. Fusce consectetur neque nisl, a aliquet mi bibendum non.",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod ligula at lectus finibuuet mi bibendum non.",
    }
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
              <label>Notification Text</label>
              <input type="text" placeholder="type here....." />
            </div>
            <button className="bg-[#6e39eb] text-white p-2 rounded-lg text-sm">
              Add Notifications
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
          <h2 className="text-lg">Notifications</h2>
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
              Push Notifications
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
                    Notification Text
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
                      <td className="w-68">{ele?.text}</td>
                      <td class="flex  justify-center items-center space-x-4 h-16 w-18 py-3 text-gray-900">
                        <MdEdit
                          onClick={() => setModalShow(true)}
                          className="text-lg cursor-pointer text-black"
                        />
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

export default HOC2(PushNoti);
