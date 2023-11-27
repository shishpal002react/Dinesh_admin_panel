import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import logo from "../MyComponents/Assets/logo.png";
import {
  RiUserHeartFill,
  RiFileList3Fill,
  RiHeartPulseFill,
  RiSettings5Fill,
  RiCustomerService2Fill,
  RiHomeSmileFill
} from "react-icons/ri";
import { FaUserNurse, FaRupeeSign } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import {
  MdLocalPharmacy,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { TbReportMedical } from "react-icons/tb";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { SiSlideshare } from "react-icons/si";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar2 = ({ width, setWidth }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={
          width
            ? "w-20 overflow-y-scroll h-screen z-50 absolute md:relative left-0 bg-[#089CAC] transition-all duration-400"
            : "w-60 overflow-y-auto h-screen bg-[#089CAC] md:flex-col md:flex hidden transition-all duration-400"
        }
      >
        <div className="flex justify-center mx-auto text-white font-semibold text-2xl mt-4">
          <MdClose
            className="cursor-pointer md:hidden"
            onClick={() => {
              setWidth(!width);
            }}
          />
          <h2
            onClick={() => {
              navigate("/dashboard");
            }}
            className={
              width ? "hidden md:flex cursor-pointer" : "cursor-pointer"
            }
          >
            Logo
          </h2>
        </div>
        <div
          className={
            width
              ? "space-y-5  m-3 mt-10 sid-col p-3 rounded-xl"
              : " space-y-3 m-3 mt-10 sid-col p-3 rounded-xl"
          }
        >
          <NavLink
            exact
            activeClassName="active"
            to="/total-medicine"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <RiHomeSmileFill className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Total Medicine
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />
          <NavLink
            exact
            activeClassName="active"
            to="/medicine-category"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <RiUserHeartFill className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Medicine Category
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />
          <NavLink
            exact
            activeClassName="active"
            to="/sub-category"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <FaUserNurse className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Sub Category
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />
          <NavLink
            exact
            activeClassName="active"
            to="/patient"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <ImLab className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Patient
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/pending-order"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <ImLab className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Pending Orders
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/accepted-orders"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <MdLocalPharmacy className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Accepted Orders
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/rejected-orders"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <MdLocalPharmacy className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Rejected Orders
            </h2>
          </NavLink>
          
        </div>
        <div
          className={
            width
              ? "space-y-5  m-3 mt-10 sid-col p-3 rounded-xl"
              : " space-y-3 m-3 mt-4 sid-col p-3 rounded-xl"
          }
        >
          <NavLink
            exact
            activeClassName="active"
            to="/deliver-medicines"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <IoBagAdd className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Deliver Medicines
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/pharma-payment"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <FaRupeeSign className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Payment
            </h2>
          </NavLink>
        </div>
        <div
          className={
            width
              ? "space-y-5  m-3 mt-10 sid-col p-3 rounded-xl"
              : " space-y-3 m-3 mt-4 sid-col p-3 rounded-xl"
          }
        >
          <NavLink
            exact
            activeClassName="active"
            to="/push-noti"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <BsFillCalendarCheckFill className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Push Notifications
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />

          <NavLink
            exact
            activeClassName="active"
            to="/pharma-invoice"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <MdOutlineMiscellaneousServices className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Invoice
            </h2>
          </NavLink>

          <hr className="border-1 border-gray-500" />
          <NavLink
            exact
            activeClassName="active"
            to="/"
            className="flex cursor-pointer py-1 px-1 items-center space-x-2 "
          >
            <MdOutlineMiscellaneousServices className="text-xl text-white " />

            <h2 className={width ? "hidden" : "text-sm text-white font-normal"}>
              Logout
            </h2>
          </NavLink>

        </div>
      </div>
    </>
  );
};

export default Sidebar2;
