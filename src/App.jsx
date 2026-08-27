import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="App">
      {!showProductList ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;