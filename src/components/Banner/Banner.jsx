import { Link } from 'react-router-dom';
import bannarImg from '../../assets/kindpng_789406.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex lg:flex-row  bg-custom-gray px-32 py-16 rounded justify-between mb-24'>
            <div className="mt-4 lg:mt-0 lg:w-3/5 flex items-center">
                <div>
                    <h2 className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-normal mb-5">Books to freshen up your bookshelf</h2>
                    <div className='flex justify-center lg:justify-start'>
                        <Link to={`/listedbooks`}><button className="bg-[#23BE0A] border border-[#23BE0A]  px-5 py-3 text-white text-xl font-bold rounded-md active:text-[#23BE0A] active:bg-white active:border-[#23BE0A] hover:bg-[#1D9B08]">View the List</button></Link>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3">
                <img className='h-full' src={bannarImg} alt="" />
            </div>


        </div>
    );
};

export default Banner;