import React from 'react';
import Header from './Header';
import HomePage from '../Home/index'
import Footer from './Footer';


export default function Layout() {
    return (
        <div>
            <Header/>
            <HomePage/>
            <Footer/>
        </div>
    )
}
