import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center text-4xl font-bold text-[#131313]">
                <h2 className="mb-7">Oppss!!Page not found!</h2>
                <Link to={'/'}> <button className="bg-[#23BE0A] text-white font-medium rounded-lg px-5 py-2 active:text-[#23BE0A] active:bg-white active:border active:border-[#23BE0A]">Back to home</button> </Link>
            </div>
        </div>
    );
};

export default ErrorPage;