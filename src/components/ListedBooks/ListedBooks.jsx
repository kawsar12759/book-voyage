import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReadBookId, getWishBookId } from "../../Utility/localstorage";
import ReadBook from "../ReadBook/ReadBook";
import WishlistBook from "../WishlistBook/WishlistBook";
import { FaChevronDown } from "react-icons/fa6";

const ListedBooks = () => {

    // ReadBooks
    const allBooks = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    useEffect(() => {

        if (allBooks.length > 0) {
            const readBooksId = getReadBookId();
            const allReadBooks = allBooks.filter(book => readBooksId.includes(book.bookId));
            setReadBooks(allReadBooks);
        }
    }, []);


    //Wishlist Books
    const [wishBooks, setWishBooks] = useState([]);
    useEffect(() => {

        if (allBooks.length > 0) {
            const wishBooksId = getWishBookId();
            const allWishBooks = allBooks.filter(book => wishBooksId.includes(book.bookId));
            setWishBooks(allWishBooks);
        }
    }, [])

    const [sortOption, setSortOption] = useState('Sort By');


    //Filter
    const handleFilter = (filterBy, sortValue) => {
        setSortOption(sortValue);
        if (filterBy === 'rating') {

            allBooks.sort((a, b) => b.rating - a.rating);
            const readBooksId = getReadBookId();
            const allReadBooks = allBooks.filter(book => readBooksId.includes(book.bookId));
            setReadBooks(allReadBooks);
            const wishBooksId = getWishBookId();
            const allWishBooks = allBooks.filter(book => wishBooksId.includes(book.bookId));
            setWishBooks(allWishBooks);
        }
        else if (filterBy === 'pages') {
            allBooks.sort((a, b) => b.totalPages - a.totalPages);
            const readBooksId = getReadBookId();
            const allReadBooks = allBooks.filter(book => readBooksId.includes(book.bookId));
            setReadBooks(allReadBooks);
            const wishBooksId = getWishBookId();
            const allWishBooks = allBooks.filter(book => wishBooksId.includes(book.bookId));
            setWishBooks(allWishBooks);
        }
        else if (filterBy === 'year') {
            allBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            const readBooksId = getReadBookId();
            const allReadBooks = allBooks.filter(book => readBooksId.includes(book.bookId));
            setReadBooks(allReadBooks);
            const wishBooksId = getWishBookId();
            const allWishBooks = allBooks.filter(book => wishBooksId.includes(book.bookId));
            setWishBooks(allWishBooks);
        }
    };


    return (
        <div className="pb-24">
            <div className="h-28 bg-custom-gray rounded-xl flex items-center justify-center mb-5">
                <h4 className=" text-2xl font-bold text-[#131313]">Books</h4>
            </div>
            <div className="flex justify-center mb-5">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1 w-52 active:bg-white active:text-[#23BE0A] hover:bg-[#23BE0A] bg-[#23BE0A] border !border-[#23BE0A] text-white">{sortOption}<FaChevronDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu text-custom-black rounded-box z-[1] w-52 p-2 shadow bg-custom-gray">
                        <li onClick={() => handleFilter('rating','Rating')} className="active:!bg-[#23BE0A]"><a>Rating</a></li>
                        <li onClick={() => handleFilter('pages','Number of Pages')}><a>Number of Pages</a></li>
                        <li onClick={() => handleFilter('year','Publish Year')}><a>Publisher Year</a></li>
                    </ul>
                </div>
            </div>
            <div role="tablist" className="tabs tabs-lifted bg-white">
                <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Read" defaultChecked />
                <div role="tabpanel" className="tab-content bg-white border-hr-color rounded-box p-6">
                    <div>
                        <div className={readBooks.length === 0 ? 'h-56 text-4xl font-semibold text-[#131313] flex items-center justify-center' : 'hidden'}>
                            <h2 className="text-center">You haven't added any books to your read list yet!</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            {
                                readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                            }
                        </div>
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Wishlist"
                />
                <div role="tabpanel" className="tab-content bg-white border-hr-color rounded-box p-6">
                    <div>
                        <div className={wishBooks.length === 0 ? 'h-56 text-4xl font-semibold text-[#131313] flex items-center justify-center' : 'hidden'}>
                            <h2 className="text-center">You haven't added any books to your wishlist yet!</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            {
                                wishBooks.map(book => <WishlistBook key={book.bookId} book={book}></WishlistBook>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;