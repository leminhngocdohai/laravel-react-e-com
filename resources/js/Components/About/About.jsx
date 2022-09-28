import React from 'react';

import styles from './About.module.scss';
import classNames from 'classnames/bind';

import mail from '@/assets/images/about/email.webp';
import phone from '@/assets/images/about/phone.webp';
import mess from '@/assets/images/about/mess.webp';

const cx = classNames.bind(styles);

function About() {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <h1>About</h1>
                    <p className={cx('detail')}>
                        Pellentesque sit amet porta purus. Aliquam quis elementum velit. Donec ipsum mi, auctor nec erat
                        eu, consequat semper justo. Nulla eros velit, semper eu mollis id, efficitur consectetur est.
                        Vestibulum lacus ex, facilisis sit amet mauris sit amet, tempus cursus felis. Curabitur nec
                        luctus lorem, at vehicula enim.
                    </p>
                    <div className={cx('contact')}>
                        <div className={cx('contact-item')}>
                            <figure>
                                <img src={mail} alt="alt" />
                            </figure>
                            <a href="#">Email Us</a>
                        </div>
                        <div className={cx('contact-item')}>
                            <figure>
                                <img src={phone} alt="alt" />
                            </figure>
                            <a href="#">03.89.84.77.55</a>
                        </div>
                        <div className={cx('contact-item')}>
                            <figure>
                                <img src={mess} alt="alt" />
                            </figure>
                            <a href="#">Live Chat</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
