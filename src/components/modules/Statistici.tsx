//= Functions & Modules
// Others
import React from 'react';

//= Structures & Data
// Own

export default function Statistici() {
    // TODO
    return (
        <div className="border border-slate rounded-lg w-full h-full my-6 lg:mx-6">
            <button
                type="button"
                className="border border-slate hover:border-grey bg-white text-grey px-4 py-2 rounded-md font-bold float-right m-6"
            >
                <i className="fas fa-times"></i>
            </button>

            <div className="w-full flex justify-center">
                <div className="w-3/4 m-6 text-center">
                    <div className="text-center flex justify-center w-full">
                        <img src="/imgs/module4.svg" alt="module" className="bg-lightgreen p-6 rounded-md" />
                    </div>

                    <h3 className="text-lg font-bold mt-6">Modul pentru statistici</h3>
                    <h3 className="text-lg text-grey mt-2">
                        Urmareste toate informatiile esentiale despre anunturi, contacte si clientii tai.
                    </h3>

                    <button type="submit" className="bg-blue text-white px-4 py-2 mt-6 rounded font-bold">
                        <i className="fas fa-chevron-right ml-2"></i> Activeaza modul
                    </button>
                </div>
            </div>
        </div>
    );
}
