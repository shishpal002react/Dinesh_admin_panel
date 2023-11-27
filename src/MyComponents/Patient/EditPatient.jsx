import React, { useState, useSyncExternalStore } from "react";
import { useLocation } from "react-router-dom";
import HOC from "../../HOC";

const EditPatient = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const [email, setEmail] = useState(data?.email);
  const [fname, setFname] = useState(data?.fName);
  const [lname, setLname] = useState(data?.lName);
  const [dob, setDOB] = useState(data?.dob);
  const [mobile, setMobile] = useState(data?.mobile);
  const [gender, setGender] = useState(data?.gender);
  const [blood, setBlood] = useState(data?.blood);
  const [add, setAdd] = useState(data?.Add);
  const [city, setCity] = useState(data?.city);
  const [country, setCountry] = useState(data?.country);
  const [zip, setZip] = useState(data?.zip);


  return (
    <>
      <section class=" py-1 bg-blueGray-50 mb-32">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">
                  Edit Patient
                </h6>
                <button
                  class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Update
                </button>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Patient Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Email address
                      </label>
                      <input
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        value={fname}
                        onChange={(e) => {
                          setFname(e.target.value);
                        }}
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={lname}
                        onChange={(e) => {
                          setLname(e.target.value);
                        }}
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Date of Birth
                      </label>
                      <input
                        value={dob}
                        onChange={(e) => {
                          setDOB(e.target.value);
                        }}
                        type="date"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Phone
                      </label>
                      <input
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                        type="tel"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Gender
                      </label>
                      <select
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value={gender}>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Blood Group
                      </label>
                      <select
                        onChange={(e) => {
                          setBlood(e.target.value);
                        }}
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value={blood}>Select</option>

                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                      </select>
                    </div>
                  </div>
                </div>
                <input placeholder='Select Profile' type="file" name="" id="" />
                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Address
                      </label>
                      <input value={add} onChange={(e)=>{setAdd(e.target.value)}}
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        City
                      </label>
                      <input value={city} onChange={(e)=>{setCity(e.target.value)}}
                        type="email"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Country
                      </label>
                      <input value={country} onChange={(e)=>{setCountry(e.target.value)}}
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Postal Code
                      </label>
                      <input value={zip} onChange={(e)=>{setZip(e.target.value)}}
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HOC(EditPatient);
