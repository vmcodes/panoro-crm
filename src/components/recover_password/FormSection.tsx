//= Functions & Modules
// Others
import React, { useState } from 'react';
import { RecoverStep } from '../../pages/RecoverPasswordPage';
/**
 * The basic register form section
 */
type CurrentStepProp = {
    setCurrentStep: React.Dispatch<React.SetStateAction<RecoverStep>>;
};

export default function FormSection({ setCurrentStep }: CurrentStepProp) {
    const [email, setEmail] = useState<string>('');

    async function handleSubmit(event) {
        event.preventDefault();

        setCurrentStep(RecoverStep.SUCCESS);
    }

    return (
        <div className="lg:w-1/3 w-full">
            <h1 className="text-4xl font-bold text-left">Ti-ai uitat parola?</h1>
            <h3 className="text-lg text-grey mt-2">Introdu detaliile mai jos pentru a reseta parola</h3>

            <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
                <div className="w-full py-4">
                    <label className="text-grey">Email</label>
                    <br />
                    <input
                        className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <i className="far fa-envelope-open ml-2"></i>
                </div>

                <div className="w-full mt-12 py-6">
                    <button type="submit" className="bg-blue text-white px-4 py-2 rounded float-left font-bold hover:shadow-lg">
                        Pasul urmator
                    </button>
                </div>
            </form>
        </div>
    );
}
