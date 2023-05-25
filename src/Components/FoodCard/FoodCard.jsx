

const FoodCard = ({ item }) => {
    const {name, recipe, image, price}= item
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            {price && <p className="bg-slate-800 text-white absolute right-0 mr-4 mt-4 px-3 py-1 rounded">${price}</p>}
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p className="mb-2">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="px-12 py-2 w-full bg-slate-200 hover:bg-slate-700 border-b-2 text-orange-500 rounded border-orange-500">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;