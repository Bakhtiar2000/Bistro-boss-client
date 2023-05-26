import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    }
    
    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-4" >
                    {
                        items.map(item => <FoodCard
                            key={item._id}
                            item={item}
                        ></FoodCard>)
                    }
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default OrderTab;