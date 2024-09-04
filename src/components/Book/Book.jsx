import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ bookData }) => {
    const { bookId, bookName, author, image, rating, category, tags } = bookData;
    return (
        <Link to={`/bookdetails/${bookId}`}>
            <div className="border rounded-lg p-4 flex flex-col h-full">
                <img className="h-80 w-full rounded-lg mb-4" src={image} alt="" />

                <div className="text-base font-medium text-[#23BE0A] flex mb-3">
                    {tags.map((tag, idx) => (
                        <p className="bg-custom-green w-fit  mr-3 px-4 py-1 rounded-full" key={idx}>
                            {tag}
                        </p>
                    ))}
                </div>

                <div className="mb-4 flex-grow">
                    <h3 className="font-bold text-2xl text-[#131313] mb-3">{bookName}</h3>
                    <p className="text-base font-medium text-custom-black">By: {author}</p>
                </div>

                <hr className="border-dashed border-hr-color mb-3" />

                <div className="flex justify-between text-base font-medium text-custom-black">
                    <p>{category}</p>
                    <div className="flex items-center">
                        <p className="mr-3">{rating}</p>
                        <FaRegStar />
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Book;