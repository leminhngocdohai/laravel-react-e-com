import React from 'react';

import styles from './FeatureProduct.module.scss';
import classNames from 'classnames/bind';

import image from '@/assets/images/productListing/product.webp';
import banner from '@/assets/images/featureProduct/feature-product.webp';

const cx = classNames.bind(styles);

function FeatureProduct() {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('heading')}>
                        <h3>Feature Product</h3>
                        <a href="#">View detail</a>
                    </div>
                    <div className={cx('content')}>
                        <figure className={cx('background')}>
                            <img src={banner} alt="Banner" />
                        </figure>
                        <div className={cx('item-product')}>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeatureProduct;
