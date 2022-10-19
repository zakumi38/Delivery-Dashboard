import LayoutProps from "../../types/layout.type";
import layoutStyle from "./layout.module.scss"

// Image
import NavBar from "../NavBar/NavBar";


export default function Layout({name, children}: LayoutProps) {
    return (
        <div className={layoutStyle.container}>
            <NavBar name={name}/>
            {children}
        </div>
    )
}