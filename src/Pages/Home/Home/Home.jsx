import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Description from "../Description/Description";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Description></Description>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;