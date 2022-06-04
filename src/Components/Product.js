import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Showloading = () => {
    return <div className="text-light">Loading....</div>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-6 p-4">
          <img
            src={product.image}
            alt={product.title}
            height="380px"
            width="380px"
          />
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50 p-3">
                {product.category}
            </h4>
            <h1 className="display-6">{product.title}</h1>
            <p className="lead">Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">
                  ${product.price}
            </h3>
            <p className="lead">{product.description}</p>
            <button className="btn btn-outline-dark me-2">Add To Cart</button>
            <NavLink to ="/cart" className="btn btn-outline-dark">Go To Cart</NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? <Showloading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Product;
