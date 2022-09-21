import React from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import ApplicationLogo from '@/Components/ApplicationLogo';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import NavLink from '@/Components/NavLink';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <>
            <header>
                <div className={cx('header-container')}>
                    <div className={cx('header-wrapper')}>
                        <div className={cx('logo')}>
                            <ApplicationLogo />
                        </div>
                        <div className={cx('nav-bar')}>
                            <NavLink href="#a">Home</NavLink>
                            <NavLink href="#a">Product</NavLink>
                            <NavLink href="#a">About Us</NavLink>
                            <NavLink href="#a">Contact</NavLink>
                        </div>
                        <div className={cx('search')}>
                            <TextInput
                                name="q-search"
                                value=""
                                autoComplete="on"
                                required="required"
                                placeholder="Search"
                            />
                            <button>search</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
