import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {

  const [active, setActive] = useState("")

  return (
    <nav classname={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          classname="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"></img>
          <p className="text-white text-[18px] font-bold cursor-pointer">Foster"s <span className= "sm:block hidden"> Amazing Portfolio</span></p>
        </Link>
        <p className = "text-red-500">aaa amo a la rata</p>
      </div>
    </nav>
  )
}

export default Navbar