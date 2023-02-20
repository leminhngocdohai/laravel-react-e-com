import './bootstrap';
import './assets/css/app.css';

import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import Default from '@/Components/Layouts/Default/Default';
import Styleguide from '@/Components/Layouts/Components/Styleguide/Styleguide';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        return render(
            <>
                <Styleguide>
                    <>
                        <App {...props} />
                    </>
                </Styleguide>
            </>,
            el,
        );
    },
});

InertiaProgress.init({ color: '#4B5563' });
