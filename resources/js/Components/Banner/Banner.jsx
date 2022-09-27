import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner from '@/assets/images/banner/banner.webp';
import banner1 from '@/assets/images/banner/banner-1.webp';

import styles from './Banner.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Banner() {
    var setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div
                style={{
                    bottom: '25px',
                }}
            >
                <ul> {dots} </ul>
            </div>
        ),
    };

    var banners = [banner, banner1];

    return (
        <>
            <div className={cx('banner')}>
                <Slider {...setting}>
                    {banners.map((banner, index) => (
                        <div className={cx('banner-item')} key={index}>
                            <a href="#">
                                <figure>
                                    <img src={banner} alt="#" />
                                </figure>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
