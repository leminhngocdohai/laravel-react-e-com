import React from 'react';

import styles from './ProductListing.module.scss';
import classNames from 'classnames/bind';

import image from '@/assets/images/productListing/product.jpg';
import image1 from '@/assets/images/productListing/product1.jpg';
import image2 from '@/assets/images/productListing/product2.jpg';
import image3 from '@/assets/images/productListing/product3.jpg';

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
                                        <span>Liên hệ: 0966861763</span>
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
