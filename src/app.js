import React from 'react';
import ReactDOM from 'react-dom/client';
import { Hello } from './Hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('hello world');
root.render(<Hello/>);