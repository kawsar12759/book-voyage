import { Link, NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li>
            <NavLink to="/" className={({ isActive }) =>
                isActive ? "bg-white border border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white visited:text-[#23BE0A] visited:bg-white active:!bg-[#23BE0A] active:!text-white" : "text-[#131313] active:!bg-[#23BE0A] active:!text-white"} >
                Home
            </NavLink>
        </li>
        <li><NavLink to='/listedbooks' className={({ isActive }) =>
            isActive ? "bg-white border border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white visited:text-[#23BE0A] visited:bg-white active:!bg-[#23BE0A] active:!text-white" : "text-[#131313] active:!bg-[#23BE0A] active:!text-white"
        }>Listed Books</NavLink></li>
        <li><NavLink to='/pagestoread' className={({ isActive }) =>
            isActive ? "bg-white border border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white visited:text-[#23BE0A] visited:bg-white active:!bg-[#23BE0A] active:!text-white" : "text-[#131313] active:!bg-[#23BE0A] active:!text-white"
        }>Pages to Read</NavLink></li>
    </>

    return (

        <div className="navbar py-10">
            <div className="navbar-start w-full lg:w-1/2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu  menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#131313] text-lg">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to={'/'} className="text-2xl md:text-3xl font-bold text-black min-w-fit">Book Voyage</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#131313] text-lg">
                    {
                        links
                    }
                </ul>
            </div>
            {/* <div className="navbar-end flex justify-end text-white text-base sm:text-lg font-semibold">

                <div>               
                    <button className="bg-[#23BE0A] border border-[#23BE0A] px-3 py-2 sm:px-5 sm:py-3 rounded-lg mr-5 active:text-[#23BE0A] active:bg-white">Sign In</button>
                    <button className="bg-[#59C6D2] border border-[#59C6D2] px-3 py-2 sm:px-5 sm:py-3 rounded-lg active:bg-white active:text-[#59C6D2]">Sign Up</button>
                </div>
            </div> */}
        </div>
    );
};

export default Header;