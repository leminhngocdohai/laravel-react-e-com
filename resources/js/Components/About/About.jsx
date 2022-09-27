import React from 'react';

import styles from './About.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function About() {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <h1>About</h1>
                    <p>
                        Pellentesque sit amet porta purus. Aliquam quis elementum velit. Donec ipsum mi, auctor nec erat
                        eu, consequat semper justo. Nulla eros velit, semper eu mollis id, efficitur consectetur est.
                        Vestibulum lacus ex, facilisis sit amet mauris sit amet, tempus cursus felis. Curabitur nec
                        luctus lorem, at vehicula enim.
                    </p>
                    <div className={cx('contact')}></div>
                </div>
            </div>
        </>
    );
}

export default About;
