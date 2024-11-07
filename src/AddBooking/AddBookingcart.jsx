import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../Hooks/UseAxiosSecure/UseAxiosSecure";
import Swal from "sweetalert2";
import UseCart from "../Hooks/usecart/UseCart";

const AddBookingcart = ({ product }) => {
  const navigate = useNavigate();
  const [, refetch] = UseCart();
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const { id, name, img, price } = product;

  const handleAddcart = () => {
    if (user && user.email) {
      // Create the cart item object
      const cartItem = {
        menuId: id,
        email: user.email,
        name,
        img,
        price,
      };

      // Send the cart item to the database
      axiosSecure.post('/addcarts', cartItem).then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Added Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch(); // Refetch the cart items
        }
      });
    } else {
      // Navigate to the sign-in page if the user is not logged in
      navigate('/signup');
    }
  };

  return (
    <div>
      <button
        onClick={handleAddcart}
        className="btn text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-600 bg-blue-500 py-2 px-4 rounded"
      >
        Add To Book
      </button>
    </div>
  );
};

export default AddBookingcart;
