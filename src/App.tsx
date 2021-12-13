//= Functions & Modules
// Others
import React from 'react';

//= React components
// Own
import ExamplePage from './pages/ExamplePage';

//= Style & Assets
// Own
import './styles/global.scss';

/**
 * The main rendered React component
 */
export default class App extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Works</h1>
                <ExamplePage/>
            </div>
        );
    }
}

