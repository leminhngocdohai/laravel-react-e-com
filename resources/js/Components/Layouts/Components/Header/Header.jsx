import React from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import ApplicationLogo from '@/Components/ApplicationLogo';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className={cx('header-wrapper')}>
                        <div className={cx('logo')}>
                            <ApplicationLogo />
                        </div>
                        <h1 className={cx('header')}>Header Default</h1>
                    </div>
                </div>
            </header>
        </>
    );
}
