import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Category({ path, element, title, bg }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const squareVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0.95 },
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <NavLink to={path}>
            <motion.div
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={squareVariants}
                className='categoryBox'
                style={{ backgroundImage: `url(${require(`../assets/category-bg/${bg}.jpg`)})` }}
            >
                <h2 className='fw-400'>{title}</h2>
            </motion.div>
        </NavLink>
    );
}
