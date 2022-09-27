import React from 'react';

import styles from './FeatureProduct.module.scss';
import classNames from 'classnames/bind';

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
                        <div className={cx('product')}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeatureProduct;
