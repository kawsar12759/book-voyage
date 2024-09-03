
import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBookId, saveWishBookId } from "../../Utility/localstorage";

const BookDetails = () => {
    const booksDetails = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const book = booksDetails.find(bookDetails => bookDetails.bookId === parseInt(id));
    const { bookName, author, image, rating, category, tags, publisher, yearOfPublishing, totalPages, review } = book;

    const handleReadBtn = id => {
        const readFlag = saveReadBookId(id);
        if (readFlag === 0) {
            toast.success(`"${bookName}" added to your read list`);
        }
        else if (readFlag === 1) {
            toast.warning(`${bookName} is already in your read list.`);
        }
    }

    const handleWishlistBtn = id =>{
        const wishFlag = saveWishBookId(id);
        if(wishFlag===0)
        {
            toast.success(`"${bookName}" added to your wish list`);
        }
        else if(wishFlag===1){
            toast.warning(`${bookName} is already in your read list.`)
        }
        else if(wishFlag===2){
            toast.error(`You've already finished reading "${bookName}"`);
        }
    }

    return (
        <div className="grid grid-cols-2 gap-10 pb-24">
            <div>
                <img className="rounded-xl h-full" src={image} alt="" />
            </div>
            <div>
                <h1 className="font-bold text-4xl text-[#131313] mb-4">{bookName}</h1>
                <h5 className="font-medium text-xl text-custom-black mb-5">By : {author}</h5>
                <hr className="border-hr-color mb-3" />
                <h6 className="font-medium text-xl text-custom-black mb-3">{category}</h6>
                <hr className="border-hr-color mb-5" />
                <p className="text-custom-black text-base leading-relaxed mb-5"><span className="text-[#131313] font-bold">Review : </span>{review
                }</p>
                <div className="flex items-center mb-5">
                    <p className="text-base font-bold text-[#131313] mr-5">Tag</p>
                    {
                        tags.map((tag, idx) => <p className="text-[#23BE0A] bg-custom-green mr-3 px-4 py-1 rounded-full" key={idx}>{tag}</p>)
                    }
                </div>
                <hr className="border-hr-color mb-5" />
                <div className="grid grid-cols-2 w-2/3 gap-4 text-base mb-8">
                    <div>
                        <p className="text-custom-black">Number of Pages:</p>
                    </div>
                    <div>
                        <p className="font-semibold text-[#131313]">{totalPages}</p>
                    </div>
                    <div>
                        <p className="text-custom-black">Publisher:</p>
                    </div>
                    <div>
                        <p className="font-semibold text-[#131313]">{publisher}</p>
                    </div>
                    <div>
                        <p className="text-custom-black">Year of Publishing:</p>
                    </div>
                    <div>
                        <p className="font-semibold text-[#131313]">{yearOfPublishing}</p>
                    </div>
                    <div>
                        <p className="text-custom-black">Rating</p>
                    </div>
                    <div>
                        <p className="font-semibold text-[#131313]">{rating}</p>
                    </div>
                </div>

                <div className=" text-lg font-semibold">
                    <button onClick={() => handleReadBtn(idInt)} className="bg-white border border-hr-color px-6 py-3 rounded-lg mr-5 text-black">Read</button>
                    <button onClick={() => handleWishlistBtn(idInt)} className="bg-[#50B1C9] px-6 py-3 rounded-lg text-white">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;