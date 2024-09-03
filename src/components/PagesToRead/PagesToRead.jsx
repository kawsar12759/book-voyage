import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBookId } from "../../Utility/localstorage";



const PagesToRead = () => {

    const allBooks = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);


    useEffect(() => {

        if (allBooks.length > 0) {
            const readBooksId = getReadBookId();
            const allReadBooks = allBooks.filter(book => readBooksId.includes(book.bookId));
            setReadBooks(allReadBooks);
        }
    }, []);
    const colors = ["#4A90E2", "#50E3C2", "#F5A623", "#7ED321", "#9013FE", "#B8E986", "#D0021B", "#8B572A", "#F8E71C"];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <div className='bg-custom-gray rounded-lg px-12 py-24 w-full'>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={readBooks}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {readBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default PagesToRead;