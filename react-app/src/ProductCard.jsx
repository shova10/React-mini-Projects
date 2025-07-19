import React from 'react';

function ProductCard({ product }) { // Destructure product prop directly
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '15px',
      width: '250px',
      boxShadow: '0 2px 5px rgba(138, 39, 39, 0.1)',
      backgroundColor: '#fff',
      color:'black'
    }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>

      {product.inStock ? (
        <button
          style={{
            backgroundColor: 'green',
            color: 'blue',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={() => alert(`Added ${product.name} to cart!`)}
        >
          Add to Cart
        </button>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>Out of Stock</p>
      )}
    </div>
  );
}

export default ProductCard;