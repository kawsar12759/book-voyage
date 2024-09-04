import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import './Root.css'

const Root = () => {
    return (
        <div className="parent-div max-w-7xl mx-auto min-h-screen px-16 xl:px-0 bg-white">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;