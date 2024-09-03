import bannarImg from '../../assets/kindpng_789406.png'

const Banner = () => {
    return (
        <div className='flex bg-custom-gray px-32 py-16 rounded justify-between mb-24'>
            <div className="w-3/5 flex items-center">
                <div>
                    <h2 className="text-6xl font-bold text-black leading-normal mb-5">Books to freshen up your bookshelf</h2>
                    <button className="bg-[#23BE0A] px-5 py-3 text-white text-xl font-bold rounded-md">View the List</button>
                </div>
            </div>
            <div className="w-1/3">
                <img className='h-full' src={bannarImg} alt="" />
            </div>


        </div>
    );
};

export default Banner;