import NavBarStyle from "./navbar.module.scss"
import Image from "next/image";
import logo from "../../public/vercel.svg";
import Cat from "../../public/dashboard/cat.jpg";

export default function NavBar({name}: { name: string }) {
    return (
        <div className={NavBarStyle.navBar}>
            <div>
                <Image src={logo} width={100} alt="Logo"/>
            </div>
            <div className={NavBarStyle.profileContainer}>
                <div className={NavBarStyle.profileName}>
                    <p>{name}</p>
                </div>
                <div className={NavBarStyle.profileImageContainer}>
                    <Image src={Cat} height={50} width={50} className={NavBarStyle.profileImage} alt="Profile Image"/>
                </div>
            </div>
        </div>
    )
}