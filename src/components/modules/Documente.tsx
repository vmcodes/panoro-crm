//= Functions & Modules
// Others
import React from 'react';

//= Structures & Data
// Own

export default function Documente() {
    // TODO
    return (
        <div className="border border-slate rounded-lg w-full h-full my-6">
            <button
                type="button"
                className="border border-slate hover:border-grey bg-white text-grey px-4 py-2 rounded-md font-bold float-right m-6"
            >
                <i className="fas fa-times"></i>
            </button>

            <div className="w-full flex justify-center">
                <div className="w-3/4 m-6 text-center">
                    <div className="text-center flex justify-center w-full">
                        <img src="/imgs/module2.svg" alt="module" className="bg-lightred p-6 rounded-md" />
                    </div>

                    <h3 className="text-lg font-bold mt-6">Modul pentru Documente</h3>
                    <h3 className="text-lg text-grey mt-2 h-28">
                        Foloseste documentele puse la dispozitie de PanoroCRM sau incarca documentele tale, noi te ajutam sa le completezi
                        simplu si rapid.
                    </h3>

                    <button type="submit" className="bg-blue text-white px-4 py-2 mt-6 rounded font-bold hover:shadow-lg">
                        <i className="fas fa-chevron-right ml-2"></i> Activeaza modul
                    </button>
                </div>
            </div>
        </div>
    );
}
