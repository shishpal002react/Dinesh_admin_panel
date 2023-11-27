import React, { useState } from 'react'
import Navbar2 from './PharmaComponents/Navbar';
import Sidebar2 from './PharmaComponents/Sidebar';
import MobileNav from './MyComponents/MobileNav/MobileNav';

const HOC2 = (Wcomponent) => {
  return function Component() {
    const [width, setWidth] = useState(false);
    return (
      <>
        <div>
          <div className="h-screen flex overflow-hidden">
            <Sidebar2 width={width} setWidth={setWidth} />
            <div className="w-full">
              <Navbar2 width={width} setWidth={setWidth} />
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

export default HOC2;
