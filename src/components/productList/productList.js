import React, { useEffect, useState } from 'react';
import { getAllProducts } from './productService';
import './productList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
        const initialQuantities = products.reduce((acc, product) => {
          acc[product.id] = 0;
          return acc;
        }, {});
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (productId, event) => {
    const value = Math.max(0, event.target.value);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: value,
    }));
  };

  const handleSubmit = (productId) => {
    console.log(`Submitting quantity ${quantities[productId]} for product ID ${productId}`);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  return (
    <div className="product-list-container">
      <h2></h2>
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
                <div className="quantity-container">
                  <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
                  <input
                    id={`quantity-${product.id}`}
                    type="number"
                    min="0"
                    value={quantities[product.id] || 0}
                    onChange={(event) => handleQuantityChange(product.id, event)}
                  />
                </div>
                <button
                  className="submit-button"
                  onClick={() => handleSubmit(product.id)}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
