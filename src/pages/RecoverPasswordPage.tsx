//= Functions & Modules
// Others
import React, { useState } from 'react';
import LoginBase from '../components/LoginBase';

const FormSection = React.lazy(() => import('../components/recover_password/FormSection'));
const SuccessSection = React.lazy(() => import('../components/recover_password/SuccessSection'));

/**
 * The recover password page
 */
export enum RecoverStep {
    BASIC_FIELDS = 0,
    SUCCESS = 1,
}

export default function RecoverPasswordPage() {
    const [currentStep, setCurrentStep] = useState<RecoverStep>(RecoverStep.BASIC_FIELDS);
    // TODO
    return (
        <LoginBase>
            {currentStep === RecoverStep.BASIC_FIELDS && <FormSection setCurrentStep={setCurrentStep} />}
            {currentStep === RecoverStep.SUCCESS && <SuccessSection />}
        </LoginBase>
    );
}
