import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import '../styles/Nav.css';

function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Mathew Lopez</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About Me</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Portfolio' className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Contact' className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Resume' className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resumé</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;