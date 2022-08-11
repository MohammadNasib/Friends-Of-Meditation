import React from 'react';
import '../../styles/product.scss';
import Product from '../Product';
import products from '../../data/products.json';

export default function YogaProps() {
    const yogaChairs = products['yogaChairs'];

    return (
        <div className='container'>
            <h1 className='sectionTitle fw-400'>Backless Yoga Chairs</h1>

            <div className='productContainer'>
                {yogaChairs.map((cushion, id) => (
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
