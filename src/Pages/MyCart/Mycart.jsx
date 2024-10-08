import { FaTrash } from "react-icons/fa";
import UseCart from "../../Hooks/usecart/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom/CheckOutFrom";

const MyCart = () => {

    const axiosSecure= UseAxiosSecure();
    const [cart,refetch] = UseCart();

    const handleDeleteCart =(id)=>{


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

           
            axiosSecure.delete(`/addcarts/${id}`)
            .then(res=>{
               if(res.data.deletedCount > 0){
                    refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
    


               }
            })


            }
          });



    }

    // stripe related code
// TODO: PRIVATE KEY BOSATEHOBE
    const stripePromise = loadStripe('pk_test_51Q3IOXE68OleLO4OJ3QES2WhpPs4zyigclajeNoaY46xcLLta6vCu9gcuvnDP29amwFgeDaV7szBU940TnA8vwBC00sUwOYKAx')

    return (
        <div className="overflow-x-auto md:p-10">
            <table className="min-w-full bg-white border border-gray-200 my-20">
                <thead>
                    <tr className="bg-blue-400 text-white">
                        <th className="py-2 px-4 border border-gray-200 text-left">#</th>
                        <th className="py-2 px-4 border border-gray-200 text-left">Image</th>
                        <th className="py-2 px-4 border border-gray-200 text-left">Name</th>
                        <th className="py-2 px-4 border border-gray-200 text-left">Price</th>
                        <th className="py-2 px-4 border border-gray-200 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border border-gray-200">{index + 1}</td>
                            <td className="py-2 px-4 border border-gray-200">
                                <img className="w-20" src={item.img} alt={item.name} />
                            </td>
                            <td className="py-2 px-4 border border-gray-200">{item.name}</td>
                            <td className="py-2 px-4 border border-gray-200">${item.price}</td>
                            <td className="py-2 px-4 border border-gray-200">
                                <button onClick={()=>handleDeleteCart(item._id)} className="text-red-500">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


                        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-red-500 text-white outline-none" onClick={()=>document.getElementById('my_modal_1').showModal()}>Reserve</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-white ">



   <Elements stripe = {stripePromise}>

      <CheckOutFrom></CheckOutFrom>


   </Elements>


  
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-red-500 text-white">Close</button>
      </form>
    </div>
  </div>
</dialog>

        </div>
    );
};

export default MyCart;
