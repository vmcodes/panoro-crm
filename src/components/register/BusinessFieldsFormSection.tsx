//= Functions & Modules
// Others
import React, { useState } from 'react';
import { RegisterStep } from '../../pages/RegisterPage';
/**
 * The basic register form section
 */

type CurrentStepProp = {
    setCurrentStep: React.Dispatch<React.SetStateAction<RegisterStep>>;
};

export default function BusinessFieldsFormSection({ setCurrentStep }: CurrentStepProp) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function handleSubmit(event) {
        event.preventDefault();

        setCurrentStep(RegisterStep.MODULES);
    }

    return (
        <div className="lg:w-1/3 w-full">
            <h1 className="text-4xl font-bold">
                Hello!
                <br />
                Bine ai venit pe PanoroCRM.
            </h1>
            <h3 className="text-lg text-grey mt-2">Introdu informatiile mai jos pentru a putea creea un cont.</h3>

            <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
                <div className="w-full pt-8">
                    <label className="text-grey">Nume companie</label>
                    <br />
                    <input
                        className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <i className="fas fa-store ml-2"></i>
                </div>

                <div className="w-full py-4">
                    <label className="text-grey">Angajati</label>
                    <br />
                    <input
                        className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <i className="fas fa-users ml-2"></i>
                </div>

                <div className="w-full py-6">
                    <label className="text-grey">Obiect de activitate</label>
                    <select className="mt-2 pb-2 bg-gray-50 border border-grey text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5">
                        <option>Selecteaza activitatea</option>
                        <option>activitatea 1</option>
                        <option>activitatea 2</option>
                        <option>activitatea 3</option>
                    </select>
                </div>

                <div className="w-full py-4">
                    <label className="text-grey">Telefon</label>
                    <br />
                    <input
                        className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="fas fa-phone ml-2"></i>
                </div>

                <div className="w-full py-6">
                    <button
                        onClick={() => setCurrentStep(RegisterStep.BASIC_FIELDS)}
                        type="button"
                        className="bg-lightblue text-blue px-4 py-2 rounded mr-2 font-bold hover:shadow-lg"
                    >
                        <i className="fas fa-chevron-left ml-2"></i> Inapoi
                    </button>

                    <button type="submit" className="bg-blue text-white px-4 py-2 rounded font-bold hover:shadow-lg">
                        Spre Module
                    </button>
                </div>
            </form>
        </div>
    );
}
