import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Component/Header'
import { Body } from './Component/Body'

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(<Header/>);

const body = ReactDOM.createRoot(document.getElementById('body'));
body.render(<Body/>);