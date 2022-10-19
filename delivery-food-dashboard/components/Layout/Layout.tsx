import layoutStyle from "./layout.module.scss"

// Image
import Image from "next/image";
import Cat from "../../public/dashboard/cat.jpg"

import logo from "../../public/vercel.svg"

export default function Layout({name, children}) {
    return (
        <div className={layoutStyle.container}>
            <NavBar name={name}/>
            {children}
        </div>
    )
}