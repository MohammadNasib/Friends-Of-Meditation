import React from 'react';
import '../../styles/product.scss';
import Product from '../Product';
import products from '../../data/products.json';

export default function MediChairs() {
    const chairs = products['chairs'];

    return (
        <div className='container'>
            <h1 className='sectionTitle fw-400'>Meditation Chairs</h1>

            <div className='productContainer'>
                {chairs.map((cushion, id) => (
                    <Product
                        key={id}
                        productImg={cushion.productImg}
                        productTitle={cushion.productTitle}
                        productPrice={cushion.productPrice}
                    />
                ))}
            </div>
        </div>
    );
}
