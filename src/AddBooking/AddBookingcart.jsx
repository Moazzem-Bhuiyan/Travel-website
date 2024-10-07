import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../Hooks/UseAxiosSecure/UseAxiosSecure";
import Swal from "sweetalert2";
import UseCart from "../Hooks/usecart/UseCart";

const AddBookingcart = ({ product }) => {
    const navigate = useNavigate()
    const [,refetch]=UseCart();

    const {user}=useContext(AuthContext)
    const axiosSecure =UseAxiosSecure()
    const {id,name,img,price}=product


    const handleAddcart = () => {
      

      if(user && user.email){
        // send cart to database
        console.log(product,user.email); 
        const cartItem = {
                    menuId :id,
                    email :user.email,
                    name,
                    img,
                    price,
        }

        axiosSecure.post('/addcarts',cartItem)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} Added SuccecFully `,
                    showConfirmButton: false,
                    timer: 1500
                  });

                  refetch();
            }
        })


      }
      else{

        navigate('/singin')
      }
    };
  
    return (
      <div>
        <button onClick={handleAddcart} className="btn text-white">
          Booking
        </button>
      </div>
    );
  };
  
  export default AddBookingcart;
  