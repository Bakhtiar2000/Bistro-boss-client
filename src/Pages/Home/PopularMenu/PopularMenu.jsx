import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu]= useMenu();
    const popular= menu.filter (item => item.category === 'popular')
    return (
        <section className="my-10">
            <SectionTitle 
                subHeading={'Check it out'}
                heading='FROM OUR MENU'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item=> <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="mt-4 flex justify-center items-center">
            <button className="btn bg-gray-200 border-0 border-b-4 text-yellow-500 border-yellow-500">Order Now</button>
            </div>
        </section>
    );
};

export default PopularMenu;