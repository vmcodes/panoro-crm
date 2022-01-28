//= Functions & Modules
// Others
import React, { useEffect, useState } from 'react';
import LoginBase from '../components/LoginBase';
import axios from 'axios';
import { ModuleItem } from 'src/data/ModuleItem';
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

export interface Modules {
    virtual: boolean;
    documente: boolean;
    statistici: boolean;
    facturare: boolean;
    anunturi: boolean;
    contacte: boolean;
}

export default function RegisterPage() {
    const [currentStep, setCurrentStep] = useState<RegisterStep>(RegisterStep.BASIC_FIELDS);
    const [nume, setNume] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [parola, setParola] = useState<string>('');
    const [persona, setPersona] = useState<string>('');
    const [termenii, setTermenii] = useState<boolean>(false);
    const [companie, setCompanie] = useState<string>('');
    const [angajati, setAnajati] = useState<string>('');
    const [activitate, setActivitate] = useState<string>('null');
    const [telefon, setTelefon] = useState<string>('');
    const [modules, setModules] = useState<ModuleItem[]>([]);
    const [submit, setSubmit] = useState<boolean>(false);

    useEffect(() => {
        async function handleSubmit() {
            const res = await axios.post('/api/users/register', {
                username: nume,
                password: parola,
                email: email,
                modules: modules,
                accountType: JSON.parse(persona),
                businessActivity: JSON.parse(activitate),
                businessName: companie,
                businessPhoneNumber: telefon,
            });

            if (res?.data) {
                alert(res?.data);

                setCurrentStep(RegisterStep.SUCCESS);
            }
        }

        if (submit && termenii) {
            handleSubmit();
            setSubmit(false);
        }
    }, [submit, termenii]);

    return (
        <LoginBase>
            {currentStep === RegisterStep.BASIC_FIELDS && (
                <BasicFieldsFormSection
                    nume={nume}
                    setNume={setNume}
                    email={email}
                    setEmail={setEmail}
                    parola={parola}
                    persona={persona}
                    termenii={termenii}
                    setParola={setParola}
                    setCurrentStep={setCurrentStep}
                    setPersona={setPersona}
                    setTermenii={setTermenii}
                    setSubmit={setSubmit}
                />
            )}
            {currentStep === RegisterStep.BUSINESS_FIELDS && (
                <BusinessFieldsFormSection
                    companie={companie}
                    setCompanie={setCompanie}
                    anajati={angajati}
                    activitate={activitate}
                    setAnajati={setAnajati}
                    setActivitate={setActivitate}
                    telefon={telefon}
                    setTelefon={setTelefon}
                    setCurrentStep={setCurrentStep}
                />
            )}
            {currentStep === RegisterStep.MODULES && (
                <ModulesSection modules={modules} setModules={setModules} setCurrentStep={setCurrentStep} setSubmit={setSubmit} />
            )}
            {currentStep === RegisterStep.SUCCESS && <SuccessRegisteredSection />}
        </LoginBase>
    );
}
