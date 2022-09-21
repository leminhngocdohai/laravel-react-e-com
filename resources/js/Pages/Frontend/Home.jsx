import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

import Banner from '@/Components/Banner/Banner';

export default function Home(props) {
    return (
        <>
            <Head title="Mantra" />
            <Banner />

            <Link href={route('/')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                Welcome
            </Link>
        </>
    );
}
