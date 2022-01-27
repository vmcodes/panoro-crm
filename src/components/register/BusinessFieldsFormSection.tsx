//= Functions & Modules
// Others
import React, { useState } from 'react';
import { RegisterStep } from '../../pages/RegisterPage';
/**
 * The basic register form section
 */

type Props = {
    companie: string;
    anajati: string;
    telefon: string;
    activitate: string;
    setCompanie: React.Dispatch<React.SetStateAction<string>>;
    setAnajati: React.Dispatch<React.SetStateAction<string>>;
    setActivitate: React.Dispatch<React.SetStateAction<string>>;
    setTelefon: React.Dispatch<React.SetStateAction<string>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<RegisterStep>>;
};

export default function BusinessFieldsFormSection({
    companie,
    setCompanie,
    anajati,
    activitate,
    setAnajati,
    telefon,
    setTelefon,
    setActivitate,
    setCurrentStep,
}: Props) {
    async function handleSubmit(event) {
        event.preventDefault();

        if (activitate?.length > 0) {
            setCurrentStep(RegisterStep.MODULES);
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
                <h3 className="text-lg lg:text-grey text-white mt-2">Introdu informatiile mai jos pentru a putea creea un cont.</h3>
            </div>

            <form className="mt-6 bg-white w-full lg:p-0 p-6 lg:rounded-none rounded-xl h-full" onSubmit={(e) => handleSubmit(e)}>
                <div className="w-full pt-8">
                    <label className="text-grey">Nume companie</label>
                    <br />
                    <input
                        className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                        type="text"
                        value={companie}
                        onChange={(e) => setCompanie(e.target.value)}
                        required
                    />
                    <i className="fas fa-store ml-2"></i>
                </div>

                <div className="w-full py-4">
                    <label className="text-grey">Angajati</label>
                    <br />
                    <input
                        className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                        type="text"
                        value={anajati}
                        onChange={(e) => setAnajati(e.target.value)}
                        required
                    />
                    <i className="fas fa-users ml-2"></i>
                </div>

                <div className="w-full py-6">
                    <label className="text-grey">Obiect de activitate</label>
                    <select
                        value={activitate}
                        onChange={(e) => setActivitate(e.target.value)}
                        className="mt-2 pb-2 bg-white border border-grey text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
                    >
                        <option value="">Selecteaza activitatea</option>
                        <option value="1">activitatea 1</option>
                        <option value="2">activitatea 2</option>
                        <option value="3">activitatea 3</option>
                    </select>
                </div>

                <div className="w-full py-4">
                    <label className="text-grey">Telefon (0700-000-000)</label>
                    <br />
                    <input
                        className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                        type="tel"
                        pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                        value={telefon}
                        onChange={(e) => setTelefon(e.target.value)}
                        required
                    />
                    <i className="fas fa-phone ml-2"></i>
                </div>

                <div className="w-full py-12">
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
