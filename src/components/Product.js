import React, { useEffect } from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Product({ productImg, productTitle, productPrice }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const squareVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0.9 },
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={squareVariants}
            className='productBox pointer'
        >
            <div
                className='img'
                style={{ backgroundImage: `url(${require(`../assets/${productImg}.jpg`)})` }}
            ></div>

            <div className='description'>
                <h2 className='companyName fw-500'>Friends Of Meditation</h2>
                <h1 className='fw-400 productTitle'>{productTitle}</h1>

                <div>
                    <span className='productColor'>Red</span>{' '}
                    <span className='productColor'>Blue</span>{' '}
                    <span className='productColor'>Black</span>
                </div>
            </div>

            <span>
                <FaRupeeSign className='currencySign' />
                <span className='price'>{productPrice}</span>
            </span>

            <button className='btn pointer'>Add to cart</button>
        </motion.div>
    );
}
