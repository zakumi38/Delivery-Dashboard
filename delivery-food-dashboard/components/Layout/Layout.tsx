import layoutStyle from "./layout.module.scss"

// Image
import Image from "next/image";
import Cat from "../../public/dashboard/cat.jpg"

import logo from "../../public/vercel.svg"

export default function Layout({name, children}) {
    return (
        <div className={layoutStyle.container}>
            <div className={layoutStyle.navBar}>
                <div>
                    <Image src={logo} width={100} alt="Logo"/>
                </div>
                <div className={layoutStyle.profileContainer}>
                    <div className={layoutStyle.profileName}>
                        <p>{name}</p>
                    </div>
                    <div className={layoutStyle.profileImageContainer}>
                        <Image src={Cat} height={50} width={50} className={layoutStyle.profileImage} alt="Profile Image"/>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}