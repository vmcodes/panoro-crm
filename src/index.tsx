//= Functions & Modules
// Others
import ReactDOM from 'react-dom';
//= Style & Assets
// Own
import './index.css';
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
