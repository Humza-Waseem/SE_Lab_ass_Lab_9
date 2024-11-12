import React, { useEffect, useState } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-list">
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product._id} className="product">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
}

export default ProductList;
