import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/style.scss'
import { Header } from './Component/Header';
import { Body } from './Component/Body';
import { Footer } from './Component/Footer';

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(<Header/>);

const body = ReactDOM.createRoot(document.getElementById('body'));
body.render(<Body/>);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(<Footer/>);
