import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure/UseAxiosSecure";
import UseCart from "../../../Hooks/usecart/UseCart";

const CheckOutForm = () => {

    const [error,setError]=useState('')
    const [clientsecret, setClientSecret]=useState('');

    const axiosSecure = UseAxiosSecure();

    const stripe = useStripe();
    const elements = useElements();
    const [cart]=UseCart();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    console.log("Total Price:", totalPrice); // Check the total price
    

    useEffect(()=>{

        axiosSecure.post('/create-payment-intent', {price : totalPrice})

        .then(res=>{

            console.log(res.data.clientsecret)
            setClientSecret(res.data.clientsecret)
        })





    },[axiosSecure,totalPrice])


    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if(card === null) {
            return;
        }

        // Further code for payment processing goes here

        const { error ,paymentMethod} = await stripe.createPaymentMethod({
            type : 'card',
            card
        })

        if(error){
            console.log('payment Errro ' ,error)
            setError(error.message)
        }
        else{
            console.log('payment Methis ', paymentMethod)
            setError('')
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'black',
                                '::placeholder': {
                                    color: 'black',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button disabled={!stripe } className="btn text-white btn-sm bg-green-300 mt-10 ml-10 px-10" type="submit">
                    Pay
                </button>
                <p className="text-red-500">{error}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;
