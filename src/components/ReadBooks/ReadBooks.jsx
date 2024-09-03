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
    console.log(readBooks);

    return (
        <div className="grid grid-cols-1 gap-5">
            {
                readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;