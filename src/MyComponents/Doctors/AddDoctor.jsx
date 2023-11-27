import React from "react";
import { useState } from "react";
import BaseUrl from "../../BaseUrl";
import HOC from "../../HOC";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState();
  const [image, setImage] = useState("");

  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const addDoctor = async () => {
    setLoading(true);
    const url = BaseUrl() + "doctor/addDoctor";

    const auth = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const fd = new FormData();
    fd.append("firsname", fName);
    fd.append("lastname", lName);
    fd.append("dob", birth);
    fd.append("gender", gender);
    fd.append("email", email);
    fd.append("city", city);
    fd.append("country", country);
    fd.append("postalcode", code);
    fd.append("address", address);
    fd.append("phonenumber", phone);
    fd.append("doctorspicture", image);

    try {
      const res = await axios.post(url, fd, auth);
      console.log("res", res);
      setLoading(false);
      toast.success("Added Successfully");
    } catch (err) {
      console.log("err", err);
      setLoading(false);
      toast.error("Please try again");
    }
  };
  return (
    <>
      <section class=" py-1 bg-blueGray-50 mb-32">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">Add Doctor</h6>
                <button
                  class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={addDoctor}
                >
                  {loading ? (
                    <Oval
                      ariaLabel="loading-indicator"
                      height={30}
                      width={30}
                      strokeWidth={5}
                      color="blue"
                      secondaryColor="white"
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Doctor Information
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                        type="text"
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
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                        type="text"
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
                        value={birth}
                        onChange={(e) => setBirth(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        onChange={(e) => setGender(e.target.value)}
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                </div>
                <input
                  placeholder="Select Profile"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />

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
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
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
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
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
                      <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
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
                      <input
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
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

export default HOC(AddDoctor);
