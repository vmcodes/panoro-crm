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
export enum RegisterStep {
    BASIC_FIELDS = 0,
    BUSINESS_FIELDS = 1,
    MODULES = 2,
    SUCCESS = 3,
}

export default function RegisterPage() {
    const [currentStep, setCurrentStep] = useState<RegisterStep>(RegisterStep.MODULES);

    return (
        <LoginBase>
            {currentStep === RegisterStep.BASIC_FIELDS && <BasicFieldsFormSection setCurrentStep={setCurrentStep} />}
            {currentStep === RegisterStep.BUSINESS_FIELDS && <BusinessFieldsFormSection setCurrentStep={setCurrentStep} />}
            {currentStep === RegisterStep.MODULES && <ModulesSection setCurrentStep={setCurrentStep} />}
            {currentStep === RegisterStep.SUCCESS && <SuccessRegisteredSection />}
        </LoginBase>
    );
}
