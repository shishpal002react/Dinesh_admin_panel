import React from "react";
import { FiHome, FiShoppingBag, FiUsers, FiCompass } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { FaCar, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { MdLabelOutline } from "react-icons/md";
import { BsPlusCircleFill } from "react-icons/bs";
import {RiHomeSmileFill, RiUserHeartFill} from 'react-icons/ri'
import {FaUserNurse} from 'react-icons/fa'
import {ImLab} from 'react-icons/im'

import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <>
      <div className="rounded-tr-3xl z-20 rounded-tl-3xl flex  bg-[#089CAC] text-white md:hidden fixed bottom-0 justify-between w-full h-14 items-center text-2xl px-6">
        <NavLink exact activeClassName="active" to="/dashboard">
          <RiHomeSmileFill />
        </NavLink>
        <NavLink activeClassName="active" to="/all-patient">
          <RiUserHeartFill />
        </NavLink>
        <NavLink activeClassName="active" to="/all-item">
          <BsPlusCircleFill className="text-4xl " />
        </NavLink>
        <NavLink activeClassName="active" to="/all-doctor">
          <FaUserNurse />
        </NavLink>
        <NavLink activeClassName="active" to="/all-lab">
          <ImLab />
        </NavLink>
      </div>
    </>
  );
};

export default MobileNav;
