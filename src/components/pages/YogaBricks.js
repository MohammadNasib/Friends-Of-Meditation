import React from 'react';
import '../../styles/product.scss';
import Product from '../Product';
import products from '../../data/products.json';

export default function YogaBricks() {
    const yogaBricks = products['yogaBricks'];

    return (
        <div className='container'>
            <h1 className='sectionTitle fw-400'>Yoga Brick and Belts</h1>

            <div className='productContainer'>
                {yogaBricks.map((cushion, id) => (
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
