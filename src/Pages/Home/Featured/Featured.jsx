import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle
                subHeading='check it out'
                heading={'Featured Item'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-50 pb-20 pt-12 px-36 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta perspiciatis molestiae voluptas officia eos facilis laboriosam fugiat culpa voluptatum quis, temporibus tempore quibusdam amet qui, asperiores recusandae dolorum cumque quisquam modi delectus est autem nulla veritatis rerum? Tempore, velit excepturi.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;