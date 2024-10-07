import { useEffect, useState } from "react";

const Usedata = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return { menu };
};

export default Usedata;
