//= Functions & Modules
// Others
import React, { FC, useState } from 'react';
/**
 * The basic register form section
 */

type SetTabProp = {
    setTab: React.Dispatch<React.SetStateAction<number>>;
};

export default function BasicFieldsFormSection({ setTab }: SetTabProp) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function handleSubmit(event) {
        event.preventDefault();

        setTab(1);
    }

    return (
        <div className="lg:w-1/3 w-full">
            <h1 className="text-4xl font-bold text-left">
                Hello!
                <br />
                Bine ai venit pe PanoroCRM.
            </h1>
            <h3 className="text-lg text-grey mt-2">Introduceti informatiile dumneavoastra pentru a trece la pasul urmator.</h3>

            <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
                <div className="w-full pt-8">
                    <label className="text-grey">Nume Prenume</label>
                    <br />
                    <input
                        className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="fas fa-lock ml-2"></i>
                </div>

                <div className="w-full py-6">
                    <label className="text-grey">Tip persoana</label>
                    <select className="mt-2 pb-2 bg-gray-50 border border-grey text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5">
                        <option>Persoana fizica</option>
                        <option>Afaceri</option>
                    </select>
                </div>

                <div className="w-full py-6">
                    <input
                        className="mb-3 pt-3 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey rounded-none focus:outline-none rounded-md ring-grey"
                        type="radio"
                    />
                    <label className="text-md font-bold ml-2">Sunt de acord cu termenii si conditiile PanoroCRM.</label>
                </div>

                <div className="w-full py-6">
                    <button type="submit" className="bg-blue text-white px-4 py-2 rounded float-left font-bold">
                        Pasul urmator
                    </button>
                </div>
            </form>
        </div>
    );
}
