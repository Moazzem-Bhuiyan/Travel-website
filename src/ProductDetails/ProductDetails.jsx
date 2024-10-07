import { Rating } from "@mui/material";
import { useLoaderData, useParams } from "react-router-dom";
import ConnectedUs from "../Home/ConectedUs/ConnectedUs";
import plan from '../assets/tour/plan.png'


const ProductDetails = () => {

    const loadedData = useLoaderData();
    const {id}= useParams();
    const idnt = parseInt(id);
    const product = loadedData.find((data)=> data.id === idnt);


    return (
        <div>

            <div className="w-[50%] m-auto space-y-4 pb-10 shadow-2xl my-20 rounded-xl ">

                <img className="w-full" src={product.img} alt="" />

                        <div className="flex justify-between text-2xl p-4 font-semibold"> 
                        <h1>{product.name}</h1>
                        <h1>${product.price}</h1>
                        </div>


                <p className="p-5">{product.description}</p>

                <div className=" flex justify-between p-4">
              {" "}
              <Rating
                className=""
                name="read-only"
                value={product.rating}
                readOnly
                precision={0.5} // Adjust this if you want half ratings
              />

              <button className=" bg-black p-1 px-3 rounded-md text-white ">Booking</button>
            </div>






            </div>
            
            <div>
                <img src={plan} alt="" />
            </div>

            <ConnectedUs></ConnectedUs>

           
            
        </div>
    );
};

export default ProductDetails;