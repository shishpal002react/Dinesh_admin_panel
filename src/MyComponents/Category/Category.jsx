import React, { useState, useEffect } from "react";
import HOC from "../../HOC";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Category = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    const url =
      "https://mr-dinesh-doctor-patient-backend.vercel.app/api/v1/admin/category";
    try {
      const { data } = await axios.get(url);
      //console.log(data?.data);
      setCategory(data?.data);
    } catch (err) {
      console.log(err?.message);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const token = localStorage.getItem("token");
  const [ide, setIde] = useState("");

  const openUpdate = (id) => {
    setIde(id);
    setModalShow2(true);
  };

  const [query, setQuery] = useState("");
  const searchD = !query
    ? category
    : category?.filter((it, i) => {
        return it?.name?.toLowerCase()?.includes(query?.toLowerCase());
      });

  return (
    <>
      <div className="">
        <div className="flex mt-4 shadow justify-between m-2 bg-white items-center p-4 rounded-2xl">
          <h2 className="text-lg">Category List</h2>
          <div className="flex space-x-5">
            <div className="flex bg-[#ada9b31d] border border-[#0000001a] px-2 rounded-lg">
              <input
                className="bg-transparent outline-none w-full placeholder:text-sm placeholder:font-light"
                type="text"
                placeholder="Search Doctor..."
                name=""
                id=""
                onChange={(e) => setQuery(e.target.value)}
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
                </tr>
              </thead>
              <tbody className="table-body-hai ">
                {searchD?.map((ele, i) => (
                  <>
                    <tr className="divider" style={{ textAlign: "center" }}>
                      <td>
                        <img
                          style={{
                            display: "block",
                            margin: "auto",
                            width: "50px",
                            height: "50px",
                          }}
                          src={ele?.image}
                          alt=""
                        />
                      </td>
                      <td>{ele?.name}</td>
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

export default HOC(Category);
