import React from "react";
import HOC from "../../HOC";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn, MdCheckCircle } from "react-icons/md";
import { AiFillEye, AiOutlineUser } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { orderData } from "./AllOrders";

const Orderview = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <div className="m-4 mb-52 space-y-5 overflow-y-scroll">
        <div className="flex flex-col md:flex-row p-2 justify-between  rounded-lg shadow bg-white">
          <div className="flex items-center space-x-4">
            <img
              className="w-28 "
              src="https://ik.imagekit.io/bpldfcr7nd/Guy_hipster_jumper_man_teacher_sir-512_ct6o_XrNjC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654511186317"
              alt=""
            />
            <div className="space-y-2.5">
              <div className="flex items-center space-x-1">
                <h2 className="text-3xl text-gray-600">Deepak Rathor</h2>
                <MdCheckCircle className="text-blue-700 text-xl" />
              </div>
              <h2 className="text-sm ">Order Status : <span className="text-red-900">Processing</span> </h2>
              <h2 className="text-sm">Join Date : 15/06/2022</h2>
            </div>
          </div>
          <hr className="md:hidden my-5" />
          <div className="p-2 space-y-3">
            <div className="flex space-x-10">
              <h2 className="text-sm font-semibold">Phone :</h2>
              <h2 className="text-sm">+917723970629</h2>
            </div>
            <div className="flex space-x-10">
              <h2 className="text-sm font-semibold">Email :</h2>
              <h2 className="text-sm">deepakflyweis@gmail.com</h2>
            </div>
            <div className="flex space-x-10">
              <h2 className="text-sm font-semibold">Add :</h2>
              <h2 className="text-sm">{"Mayur Vihar Phase - 1," + " New Delhi," + " 110091"}</h2>
            </div>
          </div>
        </div>
        <div className="bg-white py-3 px-2 rounded-lg shadow space-y-4">
          {item.map((e) => {
            return (
              <div className="flex rounded-lg p-2 bg-[#af79fa24]  justify-between ">
                <div className="space-y-4">
                  <h2> Item Name</h2>
                  <h2 className="text-sm">{e.name}</h2>
                </div>
                <div className="space-y-4">
                  <h2>QTY</h2>
                  <h2 className="text-sm">{e.qty}</h2>
                </div>
                <div className="space-y-4">
                  <h2>Price</h2>
                  <h2 className="text-sm">Rs. {e.price}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

let item = [
  {
    name: "Disprin Tablet",
    price: "299",
    qty: "1",
  },
  {
    name: "Disprin Tablet",
    price: "2990",
    qty: "10",
  },
];

export default HOC(Orderview);
