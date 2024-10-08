import axios from "axios";




const axiosSecure = axios.create({
    baseURL:"https://travel-server-eight-rho.vercel.app/"
})

const UseAxiosSecure = () => {

    return axiosSecure
   
};

export default UseAxiosSecure;