import { Outlet } from "react-router-dom";

import { Header } from "../layout/header";
import { Footer } from "../layout/footer";
import { NavigationBar } from "../layout/navigation";

import "./rootLayout.module.css";

export const RootLayout = () => {
    return (
        <div className="App">
            <Header/>
            <NavigationBar/>
            <main><Outlet/></main>
            <Footer/>
        </div>
    );
}