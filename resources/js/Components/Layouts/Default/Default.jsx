import React from 'react';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

export default function Default({ children }) {
    return (
        <>
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
        </>
    );
}
