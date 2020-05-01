import React from 'react';
import BasketCounter  from '../../basket/counter.js';
import {BasketContextProvider}  from '../../basket/context.js';

export default function Navbar() {
    return (
    <BasketContextProvider>
        <nav className="navbar is-white">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item brand-text" href="#/welcome"> Anna-Veronica </a>
                    <div className="navbar-burger burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="navMenu" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="#/mission"> Our mission </a>
                        <a className="navbar-item" href="#/toplist"> Toplist </a>
                        <a className="navbar-item" href="#/instagram"> Instagram </a>
                        <a className="navbar-item" href="#/contacts"> Contacts </a>
                    </div>
                    <div className="navbar-end">
                        <BasketCounter />
                    </div>
                </div>
            </div>
        </nav>
    </BasketContextProvider>
    );
}

