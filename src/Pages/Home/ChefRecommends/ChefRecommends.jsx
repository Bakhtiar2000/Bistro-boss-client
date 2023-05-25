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
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={slide1} alt="" /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">Pizzas</h2>
                        <p className="mb-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="px-12 py-2 w-full bg-slate-200 hover:bg-slate-700 border-b-2 text-orange-500 rounded border-orange-500">Add to cart</button>
                        </div>
                    </div>
                </div>
                
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={slide2} alt="" /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">Deserts</h2>
                        <p className="mb-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="px-12 py-2 w-full bg-slate-200 hover:bg-slate-700 border-b-2 text-orange-500 rounded border-orange-500">Add to cart</button>
                        </div>
                    </div>
                </div>
                
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={slide3} alt="" /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">Salads</h2>
                        <p className="mb-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="px-12 py-2 w-full bg-slate-200 hover:bg-slate-700 border-b-2 text-orange-500 rounded border-orange-500">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefRecommends;