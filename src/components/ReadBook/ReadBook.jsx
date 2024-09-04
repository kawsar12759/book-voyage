import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const ReadBook = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags, publisher, yearOfPublishing, totalPages, review } = book;
    return (
        <div className="lg:flex border p-5 rounded-lg">
            <div className="w-full lg:w-1/4 lg:mr-7 mb-4 lg:mb-0">
                <img className="w-full h-80 md:h-96 lg:h-64 rounded-lg" src={image} alt="" />
            </div>
            <div className="lg:w-3/4 flex items-center">
                <div className="w-full">
                    <h3 className="text-2xl font-bold text-[#131313] mb-3">{bookName}</h3>
                    <p className="text-base font-medium text-custom-black mb-3">By : {author}</p>

                    <div className="md:flex md:items-center mb-3">
                        <div className="flex sm:items-center mb-3 md:mb-0">
                            <p className="text-base font-bold text-[#131313] mr-5">Tag</p>
                            <div className="flex">
                                {
                                    tags.map((tag, idx) => <p className="text-[#23BE0A] bg-custom-green mr-3 px-4 py-1 rounded-full font-medium" key={idx}>{tag}</p>)
                                }
                            </div>
                        </div>
                        <div className="flex items-center">
                            <IoLocationOutline className="text-base text-custom-black md:ml-3 mr-2" />
                            <p className="text-base text-custom-black font-normal">Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="sm:flex sm:items-center mb-4 font-normal">
                        <div className="flex items-center mb-3 sm:mb-0">
                            <IoPeopleOutline className="text-base text-black60 mr-2 font-medium" />
                            <p className="text-base text-black60 mr-7">Publisher: {publisher}</p>
                        </div>
                        <div className="flex items-center">
                            <RiPagesLine className="text-base text-black60 mr-2 font-medium" />
                            <p className="text-base text-black60">Page {totalPages}</p>
                        </div>
                    </div>
                    <hr className="border-hr-color mb-4" />
                    <div className="sm:flex items-center text-base font-normal">
                        <div className="mb-4 sm:mb-0 mr-3 bg-category-background px-4  py-2 rounded-full">
                            <p className="text-[#328EFF]">Category: {category}</p>
                        </div>
                        <div className="mb-4 sm:mb-0 mr-3 bg-rating-background px-4 py-2 rounded-full">
                            <p className="text-[#FFAC33]">Rating: {rating}</p>
                        </div>
                        <div className="flex justify-center">
                            <Link to={`/bookdetails/${bookId}`}><button className="bg-[#23BE0A] border border-[#23BE0A] text-white text-lg font-medium px-4 py-2 rounded-full active:text-[#23BE0A] active:bg-white hover:bg-[#1D9B08]">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;