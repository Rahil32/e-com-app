import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading.....</>;
  };

  const ShowProduct = () => {
      return
  }

  return <div>
      <div className="container my-5 py-5 text-light bg-dark">
        <div className="row">
            <div className="col-12">
                <h1 className="display-4 fw-bold text-center">Current Trends</h1>
                <hr/>
            </div>
        </div>
        <div className="row row d-flex justify-content-center">
            {loading?<Loading/>:<ShowProduct/>}
        </div>
      </div>
  </div>;
};

export default Products;
