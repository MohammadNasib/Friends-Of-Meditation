import React from 'react';
import '../../styles/product.scss';
import Product from '../Product';
import products from '../../data/products.json';

export default function YogaMats() {
    const yogaMats = products['yogaMats'];

    return (
        <div className='container'>
            <h1 className='sectionTitle fw-400'>Yoga Mats</h1>

            <div className='productContainer'>
                {yogaMats.map((cushion, id) => (
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
