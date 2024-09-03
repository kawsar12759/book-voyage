import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;