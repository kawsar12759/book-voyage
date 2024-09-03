import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";


const ListedBooks = () => {


    return (
        <div className="pb-24">
            <div className="h-28 bg-custom-gray rounded-xl flex items-center justify-center mb-5">
                <h4 className=" text-2xl font-bold text-[#131313]">Books</h4>
            </div>
            <div className="flex justify-center">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] border-none text-white active:bg-[#23BE0A] hover:bg-[#23BE0A]">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content menu text-custom-black rounded-box z-[1] w-52 p-2 shadow bg-custom-gray">
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </div>
            </div>
            <div role="tablist" className="tabs tabs-lifted bg-white">
                <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Read Books" defaultChecked />
                <div role="tabpanel" className="tab-content bg-white border-hr-color rounded-box p-6">
                    <ReadBooks></ReadBooks>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Wishlist Book"
                />
                <div role="tabpanel" className="tab-content bg-white border-hr-color rounded-box p-6">
                    <WishlistBooks></WishlistBooks>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;