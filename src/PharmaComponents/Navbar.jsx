import React from "react";
import logo from "../MyComponents/Assets/logo.png";
import "../App.css";
import { RiMenu5Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoMdNotifications, IoMdChatbubbles } from "react-icons/io";
import doctor from "../MyComponents/Assets/doctor.png";
import { useNavigate } from "react-router-dom";

const Navbar2 = ({ width, setWidth }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-5 container-fluid justify-between flex items-center bg-[#089CAC] h-16">
        <div className="flex items-center space-x-10">
          <RiMenu5Fill
            onClick={() => {
              setWidth(!width);
            }}
            className="cursor-pointer text-3xl text-white"
          />
          <div className="md:flex hidden items-center bg-[#17008a18] border border-[#00000012]  py-2 w-72 px-4 rounded-lg ">
            <input
              placeholder="Search Here..."
              type="text"
              name=""
              id=""
              className="w-full bg-transparent placeholder:text-[#ffffff8b] placeholder:text-sm outline-none"
            />
            <IoSearch className="text-2xl cursor-pointer  text-[#fcfcfca2]" />
          </div>
        </div>
        {/*<div className="flex space-x-10">
          <div className="cursor-pointer">
            <span class="flex ">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <IoMdNotifications className="text-white text-2xl" />
          </div>
          <div className="cursor-pointer">
            <span class="flex">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <IoMdChatbubbles className="text-white text-2xl" />
          </div>

          <div class="flex justify-center">
            <div>
              <div class="dropdown relative">
                <button
                  class="
          dropdown-toggle
          leading-tight
          uppercase
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                  type="button"
                  id="dropdownMenuButton1d"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="cursor-pointer flex items-center space-x-3">
                    <img className="w-10 rounded-full" src={doctor} alt="" />
                    <h2 className="text-white font-medium stroke-black">
                      Hi, Pharmacist
                    </h2>
                  </div>
                </button>
                <ul
                  class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                  aria-labelledby="dropdownMenuButton1d"
                >
                  <li>
                    <a
                      onClick={() => {
                        navigate("/edit-profile");
                      }}
                      class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >
                      Edit Profile
                    </a>
                  </li>

                  <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                  <li>
                    <a
                      onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                      }}
                      class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      href="#"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          { <div className="cursor-pointer flex items-center space-x-3">
            <img className="w-10 rounded-full" src={doctor} alt="" />
            <h2 className="text-white font-medium stroke-black">Hi, Admin</h2>
          </div> }
                    </div>*/}
      </div>
    </>
  );
};

export default Navbar2;



