import React from 'react';

import styles from './ProductListing.module.scss';
import classNames from 'classnames/bind';

import image from '@/assets/images/productListing/product.webp';
import image1 from '@/assets/images/productListing/product1.webp';
import image2 from '@/assets/images/productListing/product2.webp';
import image3 from '@/assets/images/productListing/product3.webp';

const cx = classNames.bind(styles);

function ProducListing() {
    var images = [image, image1, image2, image3];
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <h3>Best Selling</h3>
                    <div className={cx('list-product')}>
                        {images.map((image, index) => (
                            <div className={cx('item-product')} key={index}>
                                <figure className={cx('thumb-product')}>
                                    <img src={image} alt="Image" />
                                </figure>
                                <div className={cx('info-product')}>
                                    <h4>Name Product</h4>
                                    <div className={cx('price')}>
                                        <span>300$</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProducListing;
