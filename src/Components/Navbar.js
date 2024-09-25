import React from "react";
import style from "@/styles/navbar.module.css"
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}> 
        <Image src="/brokerbox.png" alt="logo" width={317} height={70} />
      </div>
      
    </div>
  );
};

export default Navbar;