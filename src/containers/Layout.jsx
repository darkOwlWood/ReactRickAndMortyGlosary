import React from 'react';
import '../assets/style/containers/Layout.scss';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <MainSection />
            <Footer />
        </>
    );
}

export default Layout;