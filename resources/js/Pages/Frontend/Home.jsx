import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

import Default from '@/Components/Layouts/Default/Default';

export default function Home(props) {
    return (
        <>
            <Head title="Mantra" />

            <h1>Body {props.phpVersion}</h1>
            <Link href={route('/')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                Welcome
            </Link>
        </>
    );
}
