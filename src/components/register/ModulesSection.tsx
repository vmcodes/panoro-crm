//= Functions & Modules
// Others
import React, { useState } from 'react';
import { RegisterStep } from '../../pages/RegisterPage';
import Documente from '../modules/Documente';
import Statistici from '../modules/Statistici';
import Virtual from '../modules/Virtual';
import Module from './Module';
/**
 * The modules section of register page where user can see the selected modules
 */

type CurrentStepProp = {
    setCurrentStep: React.Dispatch<React.SetStateAction<RegisterStep>>;
};

export default function ModulesSection({ setCurrentStep }: CurrentStepProp) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function handleSubmit(event) {
        event.preventDefault();

        setCurrentStep(RegisterStep.SUCCESS);
    }

    return (
        <div className="lg:w-2/3 w-full">
            <h1 className="text-4xl font-bold">Module Active</h1>
            <h3 className="text-lg text-grey mt-2">Te rugam sa selectezi modulele pe care doresti sa le activezi</h3>

            <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
                <div className="w-full py-6 grid lg:grid-cols-2 gap-4">
                    <Virtual />
                    <Documente />
                    <Statistici />
                </div>

                <div className="w-full">
                    <button
                        type="button"
                        className="bg-white my-6 border border-dashed border-lightblue text-blue px-4 py-2 rounded mr-2 font-bold"
                    >
                        Descopera mai multe module
                    </button>

                    <div className="lg:float-right my-6">
                        <button
                            onClick={() => setCurrentStep(RegisterStep.BUSINESS_FIELDS)}
                            type="button"
                            className="bg-lightblue text-blue px-4 py-2 rounded mr-2 font-bold"
                        >
                            <i className="fas fa-chevron-left ml-2"></i> Inapoi
                        </button>

                        <button type="submit" className="bg-blue text-white px-4 py-2 rounded font-bold">
                            Creeaza cont
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
