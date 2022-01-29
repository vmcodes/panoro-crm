//= Functions & Modules
// Others
import React from 'react';
import { RegisterStep } from '../../pages/RegisterPage';
/**
 * The basic register form section
 */

type Props = {
    nume: string;
    email: string;
    parola: string;
    persona: string;
    termenii: boolean;
    setNume: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setParola: React.Dispatch<React.SetStateAction<string>>;
    setPersona: React.Dispatch<React.SetStateAction<string>>;
    setTermenii: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<RegisterStep>>;
    setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BasicFieldsFormSection({
    nume,
    email,
    parola,
    persona,
    termenii,
    setEmail,
    setNume,
    setParola,
    setPersona,
    setTermenii,
    setCurrentStep,
    setSubmit,
}: Props) {
    async function handleSubmit(event) {
        event.preventDefault();

        if (termenii && JSON.parse(persona) === 1) {
            setCurrentStep(RegisterStep.BUSINESS_FIELDS);
        } else if (termenii && JSON.parse(persona) === 0) {
            setSubmit(true);
        }
    }

    return (
        <div className="lg:w-1/3 w-full">
            <div className="lg:p-0 p-6">
                <h1 className="text-4xl lg:text-black text-white font-bold">
                    Hello!
                    <br />
                    Bine ai venit pe PanoroCRM.
                </h1>
                <h3 className="text-lg lg:text-grey text-white mt-2">
                    Introduceti informatiile dumneavoastra pentru a trece la pasul urmator.
                </h3>
            </div>

            <form className="mt-6 bg-white w-full lg:p-0 p-6 lg:rounded-none rounded-xl h-full" onSubmit={(e) => handleSubmit(e)}>
                <div className="w-full pt-8">
                    <label className="text-grey">Nume Prenume</label>
                    <br />
                    <input
                        className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                        type="text"
                        value={nume}
                        onChange={(e) => setNume(e.target.value)}
                    />
                    <i className="far fa-user ml-2"></i>
                </div>

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

                <div className="w-full py-4">
                    <label className="text-grey">Parola</label>
                    <br />
                    <input
                        className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                        type="password"
                        value={parola}
                        onChange={(e) => setParola(e.target.value)}
                    />
                    <i className="fas fa-lock ml-2"></i>
                </div>

                <div className="w-full py-6">
                    <label className="text-grey">Tip persoana</label>
                    <select
                        value={persona}
                        onChange={(e) => setPersona(e.target.value)}
                        className="mt-2 pb-2 bg-white border border-grey text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
                    >
                        <option value="null">Selecteaza persoana</option>
                        <option value="0">Persoana fizica</option>
                        <option value="1">Afaceri</option>
                    </select>
                </div>

                <div className="w-full py-6">
                    <input
                        className="mb-3 pt-3 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey rounded-none focus:outline-none rounded-md ring-grey"
                        type="radio"
                        onClick={() => setTermenii(true)}
                    />
                    <label className="text-md font-bold ml-2">Sunt de acord cu termenii si conditiile PanoroCRM.</label>
                </div>

                <div className="w-full py-6">
                    <button type="submit" className="bg-blue text-white px-4 py-2 rounded float-left font-bold hover:shadow-lg">
                        Pasul urmator
                    </button>
                </div>
            </form>
        </div>
    );
}
