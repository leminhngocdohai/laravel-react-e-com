import React from 'react';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer';

export default function Default({ children }) {
    return (
        <>
            <div className="container-fluid">
                <Header />
            </div>
            <main className="main-content">{children}</main>
            <Footer />
        </>
    );
}
