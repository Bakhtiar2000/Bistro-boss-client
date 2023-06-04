import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../hooks/useCart";
//PK= publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const [cart]= useCart()
    const total= cart.reduce(( sum, item ) => sum + item.price , 0)
    const price= parseFloat(total.toFixed(2))
    return (
        <div className="w-2/3 mx-auto">
            <SectionTitle subHeading="PLease process" heading="Payment"></SectionTitle>
            <h3 className="text-center text-2xl text-yellow-600 font-semibold mb-5">Payment gateway</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;