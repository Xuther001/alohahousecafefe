import React, { useEffect, useState } from 'react';
import { getAllProducts } from './productService';
import './productList.css';

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
      <h2>Menu</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }}
              />
              <div>
                <strong>{product.name}</strong>
                <p>{product.description}</p>
                <p>Price: {formatCurrency(product.price)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
