import React from 'react';
import "./Dashboard.css";

const Dashboard = () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$1000', img: 'path/to/Device1.jpg' },
        { id: 2, name: 'Product 2', price: '$1500', img: 'path/to/Device2.jpg' },
        { id: 3, name: 'Product 3', price: '$2999', img: 'path/to/image3.jpg' },
        { id: 4, name: 'Product 4', price: '$2000', img: 'path/to/image4.jpg' },
        { id: 5, name: 'Product 5', price: '$1155', img: 'path/to/image5.jpg' },
        { id: 6, name: 'Product 6', price: '$1115', img: 'path/to/image6.jpg' },
        { id: 7, name: 'Product 7', price: '$1100', img: 'path/to/image7.jpg' },
        { id: 8, name: 'Product 8', price: '$12555', img: 'path/to/image8.jpg' },
        { id: 9, name: 'Product 9', price: '$155', img: 'path/to/image9.jpg' },
        { id: 10, name: 'Product 10', price: '$1999', img: 'path/to/image10.jpg' },
        { id: 11, name: 'Product 11', price: '$2999', img: 'path/to/image11.jpg' },
        { id: 12, name: 'Product 12', price: '$1225', img: 'path/to/image12.jpg' },
    ];

    return (
        <div className="container">
            <h1>Welcome to Crimson</h1>
            <p>Welcome to Crimson, where cutting-edge technology meets timeless luxry.we are thrilled to have you here as part of our community. At 
                Crimson, we believe that your devices should be more than just function-they should inspire, elevate and complement yor lifestyle. Whether
                you are seeking the latest in smartphones, smart home gadgets, or premium accessories, we offer a curated selection designed to bring both
                performance and style. Explore our world of innovation and let us help you stay ahead in the digital age with sophistication and ease.
            </p>
            <p>If you need more information about us, kindly click the button below.</p>
            <p className='learn_more'>Learn more!</p>
            <div className="product-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;