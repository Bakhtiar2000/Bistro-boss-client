import FoodCard from "../../../Components/FoodCard/FoodCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import slide1 from '../../../assets/home/slide2.jpg'
import slide2 from '../../../assets/home/slide4.jpg'
import slide3 from '../../../assets/home/slide5.jpg'
const ChefRecommends = () => {
    return (
        <div>
            <SectionTitle
                subHeading='Should Try'
                heading='CHEF RECOMMENDS'
            >
            </SectionTitle>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                <FoodCard item={{name: 'Pizzas', recipe: 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.' , image: slide1}}></FoodCard>
                
                <FoodCard item={{name: 'Deserts', recipe: 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.' , image: slide2}}></FoodCard>
                
                <FoodCard item={{name: 'Salads', recipe: 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.' , image: slide3}}></FoodCard>
            </div>

        </div>
    );
};

export default ChefRecommends;