import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";



const FoodCard = ({ item }) => {
    const {user}= useContext(AuthContext)
    const { _id, name, recipe, image, price }= item
    const navigate= useNavigate()
    const location= useLocation()

    const handleAddToCart= menuItem=> {
        console.log(menuItem)
        if(user && user.email){
            const cartItem= {menuItemId: _id, name, image, email: user.email, price}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res=> res.json())
            .then(data=> {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'PLease login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            {price && <p className="bg-slate-800 text-white absolute right-0 mr-4 mt-4 px-3 py-1 rounded">${price}</p>}
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p className="mb-2">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=> handleAddToCart(item)} className="px-12 py-2 w-full bg-slate-200 hover:bg-slate-700 border-b-2 text-orange-500 rounded border-orange-500">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;