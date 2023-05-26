import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {img && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <div className="mt-4 flex justify-center items-center">
            <button className="btn bg-gray-200 border-0 border-b-4 text-yellow-500 border-yellow-500">Order Now</button>
            </div>
            </Link>
        </div>
    );
};

export default MenuCategory;