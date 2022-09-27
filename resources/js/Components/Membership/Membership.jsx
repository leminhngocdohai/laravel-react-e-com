import React from 'react';
import styles from './Membership.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Membership() {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('memberships')}>
                        <h4>Membership</h4>
                        <p>
                            Get that new clothes feeling every month with a monthly membership. We have a plan that's
                            right for you and your budget.
                        </p>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Membership;
