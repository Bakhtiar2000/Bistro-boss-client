import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItem = () => {
    const img_hosting_token= import.meta.env.VITE_Image_Upload_Token
    const img_hosting_url= `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const [axiosSecure]= useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const formData= new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(imageResponse => {
            if(imageResponse.success){
                const imgURL= imageResponse.data.display_url
                const {name, price, category, recipe}= data
                const newItem= {name, price: parseFloat(price), category, recipe, image:imgURL}
                console.log(newItem)
                
                axiosSecure.post('/menu', newItem)
                .then(data=> {
                    console.log('after posting new menu item', data.data)

                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    }

    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="What's new" heading="Add an item"></SectionTitle>

            <form className="bg-gray-100 p-8 rounded-md" onSubmit={handleSubmit(onSubmit)}>

                {/* Recipe name */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name here" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                </div>

                <div className="flex gap-5 my-5">
                    {/* Category */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select defaultValue={"Pick one"} {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>

                {/* Recipe details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe details*</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>

                {/* Item image */}
                <div className="form-control w-full my-5">
                    <label className="label">
                        <span className="label-text font-semibold">Item image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>

                <input className="btn btn-sm mt-3 bg-[#D1A054] border-0 rounded-sm" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;