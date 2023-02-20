import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

import GuestLayout from '@/Layouts/GuestLayout';

import Banner from '@/Components/Banner/Banner';
import Looking from '@/Components/Looking/Looking';
import ProductListing from '@/Components/ProductListing/ProductListing';
import Membership from '@/Components/Membership/Membership';
import FeatureProduct from '@/Components/FeatureProduct/FeatureProduct';
import About from '@/Components/About/About';

export default function Home(props) {
    return (
        <GuestLayout>
            <Head title="Mantra" />
            <Banner />
            <Looking />
            <ProductListing />
            <Membership />
            <FeatureProduct />
            <About />

            <Link href={route('/')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                Welcome
            </Link>
        </GuestLayout>
    );
}
