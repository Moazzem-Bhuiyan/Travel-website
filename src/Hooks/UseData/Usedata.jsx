import { useEffect, useState } from "react";

const Usedata = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {

    fetch("https://travel-server-eight-rho.vercel.app/packege")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return { menu };
};

export default Usedata;
