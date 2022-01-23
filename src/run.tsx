//= Functions & Modules
// Others
import ReactDOM from 'react-dom';
import React from 'react';

//= React components
// Own
import App from './App';
// Others
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('main')
);
