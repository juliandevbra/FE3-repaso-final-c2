import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const info = await res.json();
        setData(info);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      }
    };
    fetchData();
  }, []);

  return data;
};
export default useFetch;
