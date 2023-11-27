import React, { useState } from 'react'
import Navbar from './MyComponents/Dashboard/Navbar/Navbar';
import Sidebar from './MyComponents/Dashboard/Sidebar/Sidebar';
import MobileNav from './MyComponents/MobileNav/MobileNav';

const HOC = (Wcomponent) => {
  return function Component() {
    const [width, setWidth] = useState(false);
    return (
      <>
        <div>
          <div className="h-screen flex overflow-hidden">
            <Sidebar width={width} setWidth={setWidth} />
            <div className="w-full">
              <Navbar width={width} setWidth={setWidth} />
              <div id="" className="bg-[#e0e7e8] h-screen overflow-y-scroll">
                <Wcomponent />
              </div>
              <div className="">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default HOC
