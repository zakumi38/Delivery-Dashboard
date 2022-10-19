import LayoutProps from "../../types/layout.type";
import layoutStyle from "./layout.module.scss"

// Image
import NavBar from "../NavBar/NavBar";


export default function Layout({name, children}: LayoutProps) {
    return (
        <div className={layoutStyle.container}>
            <NavBar name={name}/>
            <div className={layoutStyle.entityContainer}>
                <h1>Entities</h1>
                <ul>
                    <li>Customers</li>
                    <li>Orders</li>
                    <li>Foods</li>
                    <li>Riders</li>
                    <li>Shops</li>
                </ul>
            </div>
            {children}
        </div>
    )
}