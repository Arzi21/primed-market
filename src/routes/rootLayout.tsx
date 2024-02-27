import { Outlet } from "react-router-dom";

import { Header } from "../layout/header";
import { Main } from "../layout/main";
import { Footer } from "../layout/footer";

export const RootLayout = () => {
    return (
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}