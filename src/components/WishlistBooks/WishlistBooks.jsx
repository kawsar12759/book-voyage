import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishBookId } from "../../Utility/localstorage";
import WishlistBook from "../WishlistBook/WishlistBook";


const WishlistBooks = () => {
    const allBooks = useLoaderData();
    const [wishBooks, setWishBooks] = useState([]);
    useEffect(() => {

        if (allBooks.length > 0) {
            const wishBooksId = getWishBookId();
            const allWishBooks = allBooks.filter(book => wishBooksId.includes(book.bookId));
            setWishBooks(allWishBooks);
        }
    }, [])

    return (
        <div>
            <div className={wishBooks.length===0? 'h-56 text-4xl font-semibold text-[#131313] flex items-center justify-center': 'hidden'}>
                <h2 className="text-center">You haven't added any books to your wishlist yet!</h2>
            </div>
            <div className="grid grid-cols-1 gap-5">
                {
                    wishBooks.map(book => <WishlistBook key={book.bookId} book={book}></WishlistBook>)
                }
            </div>
        </div>
    );
};

export default WishlistBooks;