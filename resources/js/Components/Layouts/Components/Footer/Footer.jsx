import React from 'react';

import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

import ApplicationLogo from '@/Components/ApplicationLogo';

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <>
            <footer>
                <div className={cx('container')}>
                    <div className={cx('footer-wrapper')}>
                        <div className={cx('footer-top')}>
                            <div className={cx('footer-column', 'logo')}>
                                <ApplicationLogo />
                            </div>
                            <div className={cx('footer-column')}>
                                <h3>Shop</h3>
                                <a href="#">Bibendumetos</a>
                                <a href="#">Pellentes Habitanto</a>
                                <a href="#">Loremouticas</a>
                            </div>
                            <div className={cx('footer-column')}>
                                <h3>INFORMATION</h3>
                                <a href="#">Blog</a>
                                <a href="#">About</a>
                                <a href="#">Reward Program</a>
                                <a href="#">Shipping & Returns</a>
                            </div>
                            <div className={cx('footer-column', 'social')}>
                                <h3>Shop</h3>
                                <a href="#">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        aria-hidden="true"
                                        focusable="false"
                                        role="presentation"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        class="icon icon-facebook"
                                    >
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        aria-hidden="true"
                                        focusable="false"
                                        role="presentation"
                                        class="icon icon-pinterest"
                                        viewBox="0 0 17 18"
                                    >
                                        <path d="M8.48.58a8.42 8.42 0 015.9 2.45 8.42 8.42 0 011.33 10.08 8.28 8.28 0 01-7.23 4.16 8.5 8.5 0 01-2.37-.32c.42-.68.7-1.29.85-1.8l.59-2.29c.14.28.41.52.8.73.4.2.8.31 1.24.31.87 0 1.65-.25 2.34-.75a4.87 4.87 0 001.6-2.05 7.3 7.3 0 00.56-2.93c0-1.3-.5-2.41-1.49-3.36a5.27 5.27 0 00-3.8-1.43c-.93 0-1.8.16-2.58.48A5.23 5.23 0 002.85 8.6c0 .75.14 1.41.43 1.98.28.56.7.96 1.27 1.2.1.04.19.04.26 0 .07-.03.12-.1.15-.2l.18-.68c.05-.15.02-.3-.11-.45a2.35 2.35 0 01-.57-1.63A3.96 3.96 0 018.6 4.8c1.09 0 1.94.3 2.54.89.61.6.92 1.37.92 2.32 0 .8-.11 1.54-.33 2.21a3.97 3.97 0 01-.93 1.62c-.4.4-.87.6-1.4.6-.43 0-.78-.15-1.06-.47-.27-.32-.36-.7-.26-1.13a111.14 111.14 0 01.47-1.6l.18-.73c.06-.26.09-.47.09-.65 0-.36-.1-.66-.28-.89-.2-.23-.47-.35-.83-.35-.45 0-.83.2-1.13.62-.3.41-.46.93-.46 1.56a4.1 4.1 0 00.18 1.15l.06.15c-.6 2.58-.95 4.1-1.08 4.54-.12.55-.16 1.2-.13 1.94a8.4 8.4 0 01-5-7.65c0-2.3.81-4.28 2.44-5.9A8.04 8.04 0 018.48.57z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className={cx('footer-bottom')}>
                            <small className={cx('copyright')}>
                                <div>
                                    © 2022 Me Demo. Powered by Me. Me Themes Templates by <br />
                                    <a href="#">Me.BoDoi</a>
                                </div>
                            </small>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
