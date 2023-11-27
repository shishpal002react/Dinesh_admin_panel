import React from "react";
import { useNavigate } from "react-router-dom";
import HOC from "../../HOC";
import { BsArrowRight } from "react-icons/bs";

const AllItem = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="mb-40">
      <div className="md:hidden grid grid-cols-3 mt-6">
        <div
          onClick={() => {
            navigate("/all-patient");
          }}
          className="bg-white p-2 m-2 space-y-3 rounded-xl shadow-lg  border border-[#0000004e]"
        >
          <h2 className="font-medium">Patient</h2>
          <img 
            className="w-28 "
            src="https://ik.imagekit.io/bpldfcr7nd/pateint_od20-hp1d.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655215815729"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            navigate("/all-doctor");
          }}
          className="bg-white p-2 m-2 space-y-3 rounded-xl shadow-lg border border-[#0000004e]"
        >
          <h2 className="font-medium">Doctor</h2>
          <img
            className="w-28"
            src="https://ik.imagekit.io/bpldfcr7nd/doctornew_MI20RN1xLX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655215814722"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            navigate("/all-lab");
          }}
          className="bg-white p-2 m-2 space-y-3 rounded-xl shadow-lg border border-[#0000004e]"
        >
          <h2 className="font-medium">Lab</h2>
          <img
            className="w-28"
            src="https://ik.imagekit.io/bpldfcr7nd/lab_7WcA0yrX6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655215815047"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            navigate("/all-pharmacy");
          }}
          className="bg-white p-2 m-2 space-y-3 rounded-xl shadow-lg border border-[#0000004e]"
        >
          <h2 className="font-medium">Pharmacy</h2>
          <img
            className="w-28"
            src="https://ik.imagekit.io/bpldfcr7nd/pharma_x-wXyuQ9w.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655215816176"
            alt=""
          />
        </div>
        <div onClick={() => {
            navigate("/all-orders");
          }} className="bg-white p-2 m-2 space-y-3 rounded-xl shadow-lg border border-[#0000004e]">
          <h2 className="font-medium">Orders</h2>
          <img
            className="w-28"
            src="https://ik.imagekit.io/bpldfcr7nd/orders_TKf42vl4R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655216465519"
            alt=""
          />
        </div>
        <div onClick={() => {
            navigate("/all-medical-history");
          }} className="bg-white p-2 m-2 space-y-3 rounded-xl shadow-lg border border-[#0000004e]">
          <h2 className="font-medium">Medical</h2>
          <img
            className="w-28"
            src="https://ik.imagekit.io/bpldfcr7nd/medical__5__BRd2fGBbY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655216465255"
            alt=""
          />
        </div>
        <div onClick={() => {
            navigate("/all-prescription");
          }} className="bg-white p-2 m-2 space-y-3 rounded-xl shadow-lg border border-[#0000004e]">
          <h2 className="font-medium">Prescription</h2>
          <img
            className="w-28"
            src="https://ik.imagekit.io/bpldfcr7nd/pres_cRhkIHVhj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655216464803"
            alt=""
          />
        </div>
        <div onClick={() => {
            navigate("/all-payment");
          }} className="bg-white p-2 m-2 space-y-3 rounded-xl shadow-lg border border-[#0000004e]">
          <h2 className="font-medium">Payment</h2>
          <img
            className="w-28"
            src="https://ik.imagekit.io/bpldfcr7nd/pay_Eg_KDpAFu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655216464763"
            alt=""
          />
        </div>
        <div onClick={() => {
            navigate("/all-appointment");
          }} className="bg-white p-2 m-2 space-y-3 rounded-xl shadow-lg border border-[#0000004e]">
          <h2 className="font-medium">Appointment</h2>
          <img
            className="w-28"
            src="https://ik.imagekit.io/bpldfcr7nd/appoint_vy9HI_Q3u.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655216844262"
            alt=""
          />
        </div>
        <div onClick={() => {
            navigate("/lab-test");
          }} className="bg-white p-2 m-2 space-y-3 rounded-xl shadow-lg border border-[#0000004e]">
          <h2 className="font-medium">Lab Test</h2>
          <img
            className="w-28"
            src="https://ik.imagekit.io/bpldfcr7nd/lab_test_75tolU_Un.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655216843971"
            alt=""
          />
        </div>
        <div className="bg-white p-2 m-2 space-y-3 rounded-xl shadow-lg border border-[#0000004e]">
          <h2 className="font-medium">Services</h2>
          <img
            className="w-28"
            src="https://ik.imagekit.io/bpldfcr7nd/service_zxxT3Mv-Y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655216843527"
            alt=""
          />
        </div>
        <div className="bg-white p-2 m-1 space-y-3 rounded-xl shadow-lg border border-[#0000004e]">
          <h2 className="font-medium">Support</h2>
          <img
            className="w-28"
            src="https://ik.imagekit.io/bpldfcr7nd/Support_gXcpb9w56.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655216843428"
            alt=""
          />
        </div>
      </div>
      <div className="flex shadow mt-6 md:hidden justify-between m-2 bg-white p-2 px-4 rounded-xl items-center">
        <h2>Banner</h2>
        <BsArrowRight />
      </div>
      <div className="flex shadow mt-6 md:hidden justify-between m-2 bg-white p-2 px-4 rounded-xl items-center">
        <h2>Setting</h2>
        <BsArrowRight />
      </div>
      </div>
    </>
  );
};

export default HOC(AllItem);
