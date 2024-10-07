import { FaTrash } from "react-icons/fa";
import UseCart from "../../Hooks/usecart/UseCart";

const MyCart = () => {
    const [cart] = UseCart();

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
                                <button className="text-red-500">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyCart;
