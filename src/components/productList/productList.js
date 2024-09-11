import React, { useEffect, useState } from 'react';
import { getAllProducts } from './productService';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  return (
    <div className="product-list-container">
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <strong>{product.name}</strong>
                <p>{product.description}</p>
                <p className="price">Price: {formatCurrency(product.price)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
