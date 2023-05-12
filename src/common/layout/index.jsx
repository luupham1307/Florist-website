import React from 'react'
import Navbar from './Navbar'
import Instagram from './Instagram/Instagram'
import Footer from './Footer/Footer';

function Layout({ children }) {
    return (
        <React.Fragment>
            <Navbar />
            {children}
            <Instagram />
            <Footer />
        </React.Fragment>
    )
}

export default Layout