import React from 'react';
import '../../styles/product.scss';
import Product from '../Product';
import products from '../../data/products.json';

export default function MediCushions() {
    const cushions = products['cushions'];

    return (
        <div className='container'>
            <h1 className='sectionTitle fw-400'>Meditation Cushions</h1>

            <div className='productContainer'>
                {cushions.map((cushion, id) => (
                    <Product key={id}
                        productImg={cushion.productImg}
                        productTitle={cushion.productTitle}
                        productPrice={cushion.productPrice}
                    />
                ))}
            </div>
        </div>
    );
}
