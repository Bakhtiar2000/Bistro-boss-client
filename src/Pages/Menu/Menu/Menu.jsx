import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div className='mb-10'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImage} title='Our Menu'></Cover>

            {/* main cover */}
            <SectionTitle
                subHeading="Don't miss"
                heading="TODAY'S OFFER"
            ></SectionTitle>

            {/* offered menu items */}
            <MenuCategory items={offered}> </MenuCategory>

            {/* Desert menu items */}
            <MenuCategory items={desserts} title='dessert' img={dessertImage}
            ></MenuCategory>

            {/* Pizza menu items */}
            <MenuCategory items={pizza} title='pizza' img={pizzaImage}
            ></MenuCategory>

            {/* Salad menu items */}
            <MenuCategory items={salad} title='salad' img={saladImage}
            ></MenuCategory>

            {/* Pizza menu items */}
            <MenuCategory items={soup} title='soup' img={soupImage}
            ></MenuCategory>
        </div>
    );
};

export default Menu;