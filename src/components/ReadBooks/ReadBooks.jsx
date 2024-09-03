import { useEffect, useState } from "react";
import { getReadBookId } from "../../Utility/localstorage";
import ReadBook from "../ReadBook/ReadBook";
import { useLoaderData } from "react-router-dom";

const ReadBooks = () => {
    const allBooks = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    useEffect(() => {

        if (allBooks.length > 0) {
            const readBooksId = getReadBookId();
            const allReadBooks = allBooks.filter(book => readBooksId.includes(book.bookId));
            setReadBooks(allReadBooks);
        }
    }, [])

    return (
        <div>
            <div className={readBooks.length===0? 'h-56 text-4xl font-semibold text-[#131313] flex items-center justify-center': 'hidden'}>
                <h2 className="text-center">You haven't added any books to your read list yet!</h2>
            </div>
            <div className="grid grid-cols-1 gap-5">
                {
                    readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;