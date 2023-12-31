import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Front.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import Loader from '../layout/Loader/Loader';
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const Front = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <Fragment>
      {loading ?  <Loader /> :(
      <Fragment>
        <MetaData title="UN-STOP" />
        <div className="banner">
          <p>Welcome to UN-STOP</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>
          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>
        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
          {products && products.map((product) => <Product product={product} />)}
        </div>
      </Fragment>
      )}
    </Fragment>
  )
};

export default Front;
