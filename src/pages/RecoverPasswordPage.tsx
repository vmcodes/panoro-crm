//= Functions & Modules
// Others
import React, { useState } from 'react';
import LoginBase from '../components/LoginBase';

const FormSection = React.lazy(() => import('../components/recover_password/FormSection'));
const SuccessSection = React.lazy(() => import('../components/recover_password/SuccessSection'));

/**
 * The recover password page
 */
export default function RecoverPasswordPage() {
    const [tab, setTab] = useState<number>(0);
    // TODO
    return (
        <LoginBase>
            {tab === 0 && <FormSection setTab={setTab} />}
            {tab === 1 && <SuccessSection />}
        </LoginBase>
    );
}
