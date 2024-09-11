import React from 'react';
import ProductList from './components/productList/productList';
import Contact from './components/contact/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact />
      <h1>Menu</h1>
      <ProductList />
    </div>
  );
}

export default App;
