import React from 'react';
import '../../styles/category.scss';
import Category from '../Category';

export default function OurProducts() {
    return (
        <div
            className='container
        '
        >
            <h1 className='fw-400 sectionTitle'>Our Products</h1>

            <div className='categoryContainer'>
                <Category title='Meditation Chairs' path='mediChairs' bg='medi-chairs' />

                <Category title='Meditation Cushions' path='mediCushions' bg='medi-cushions' />

                <Category title='Sleep Masks' path='sleepMasks' bg='sleep-masks' />

                <Category title='Restorative Yoga Chairs' path='yogaChairs' bg='yoga-chairs' />

                <Category path='yogaMats' title='Yoga Mats' bg='yoga-mats' />

                <Category title='Yoga Brick & Belts' path='yogaBricks' bg='yoga-bricks' />
            </div>
        </div>
    );
}
