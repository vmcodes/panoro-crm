//= Functions & Modules
// Others
import React, { useState } from 'react';
import LoginBase from '../components/LoginBase';
// components
const BasicFieldsFormSection = React.lazy(() => import('../components/register/BasicFieldsFormSection'));
const BusinessFieldsFormSection = React.lazy(() => import('../components/register/BusinessFieldsFormSection'));
const ModulesSection = React.lazy(() => import('../components/register/ModulesSection'));
const SuccessRegisteredSection = React.lazy(() => import('../components/register/SuccessRegisteredSection'));
/**
 * The register page
 */
export default function RegisterPage() {
    const [tab, setTab] = useState<number>(0);

    return (
        <LoginBase>
            {tab === 0 && <BasicFieldsFormSection setTab={setTab} />}
            {tab === 1 && <BusinessFieldsFormSection setTab={setTab} />}
            {tab === 2 && <SuccessRegisteredSection />}
        </LoginBase>
    );
}
