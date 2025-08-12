import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../ContextApi/Store';
import { Link, useParams } from 'react-router-dom';
import Header from './Navbar';
import Footer from './footer';

function ProductView() {
  const myContext = useContext(AppContext);
  const { products } = myContext;
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    if (products.length > 0) {
      const filteredProduct = products.find((data) => data.id == id);
      if (filteredProduct) {
        setProductInfo(filteredProduct);
      }
    }
  }, [products, id]);

  return (
    <>
    <Header/>
      <div className="card-container">
        <div className="product-card">
          <div className="product-image">
            <img src={productInfo.image} alt={productInfo.title} />
          </div>
          <div className="product-details">
            <h2>{productInfo.title}</h2>
            <p className="description">{productInfo.description}</p>
            <h3 className="price">${productInfo.price}</h3>
            <Link to="/product" className='btn btn-primary' >Back to Products</Link>
          </div>
        </div>  
      </div>
        <Footer/>

      <style>
        {`
          .card-container {
            display: flex;
            justify-content: center;
            margin-top: 40px;
            align-iyem : center
          }
          .product-card {
            background: #fff;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            overflow: hidden;
            width: 320px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
          }
          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
          .product-image {
            background: #fff;
            padding: 15px;
          }
          .product-image img {
            max-width: 100%;
            height: 250px;
            object-fit: contain;
            border-radius: 10px;
            background: #fff;
          }
          .product-details {
            padding: 15px;
          }
          .product-details h2 {
            font-size: 1.1rem;
            color: #007bff;
            font-weight: bold;
          }
          .description {
            font-size: 0.9rem;
            color: #6c757d;
            margin: 10px 0;
          }
          .price {
            color: #28a745;
            font-size: 1.4rem;
            font-weight: bold;
          }
          .btn-buy {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 10px;
            transition: background 0.3s ease;
          }
          .btn-buy:hover {
            background: #0056b3;
          }
        `}
      </style>
    </>
  );
}

export default ProductView;
