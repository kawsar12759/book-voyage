import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [booksData, setBooksData] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooksData(data));
    }, [])
    return (
        <div className="pb-24">
            <h4 className="text-center text-5xl font-bold text-black mb-12">Books</h4>
            <div className="grid grid-cols-3 gap-6">
                {
                    booksData.map(bookData => <Book key={bookData.bookId} bookData={bookData}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;