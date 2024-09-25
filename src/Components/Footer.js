import React from "react";
import style from "@/styles/footer.module.css"
import Image from "next/image";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.logo}>
            <Image src="/brokerbox.png" alt="logo" width={140} height={40} />
            </div>
            <div className={style.contact}>
            <Image src="/contacts.png" alt="socials" width= {105} height= {22} />

            </div>
            </div>

            <div className={style.copyright}>
                <p>© 2023 BrokerBox. All rights reserved.</p>

            </div>
            
             
        </div>
    )
}

export default Footer
