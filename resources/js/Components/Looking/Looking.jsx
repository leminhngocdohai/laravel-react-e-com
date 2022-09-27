import React from 'react';

import styles from './Looking.module.scss';
import classNames from 'classnames/bind';

import looking from '@/assets/images/looking/looking.webp';
import looking1 from '@/assets/images/looking/looking-2.webp';
import looking2 from '@/assets/images/looking/looking-1.avif';
import looking3 from '@/assets/images/looking/looking.avif';

const cx = classNames.bind(styles);

function Looking() {
    var lookings = [looking, looking1, looking2, looking3];

    return (
        <>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <h3>Looking for :</h3>
                    <div className={cx('list-looking')}>
                        {lookings.map((looking, index) => (
                            <div className={cx('item-looking')}>
                                <figure key={index}>
                                    <img src={looking} alt="Looking" />
                                </figure>
                                <h5>Category</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Looking;
