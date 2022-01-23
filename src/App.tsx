//= Functions & Modules
// Others
import React from 'react';

//= React components
// Own
import Base from './components/Base';
// Others
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

//= Style & Assets
// Own
import './styles/global.scss';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const RecoverPasswordPage = React.lazy(() => import('./pages/RecoverPasswordPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));

/**
 * The main rendered React component
 */
export default function App() {
    return (
        <Base>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<RegisterPage />} />
                    <Route path="recover" element={<RecoverPasswordPage />} />
                </Routes>
            </Suspense>
        </Base>
    );
}
