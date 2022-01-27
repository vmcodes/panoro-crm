//= Functions & Modules
// Others
import React from 'react';
import { Modules } from 'src/pages/RegisterPage';

//= Structures & Data
// Own
type Props = {
    modules: Modules;
    setModules: React.Dispatch<React.SetStateAction<Modules>>;
};

export default function Virtual({ modules, setModules }: Props) {
    // TODO
    return (
        <div className="border border-slate rounded-lg w-full h-full my-6">
            {modules.virtual ? (
                <button
                    type="button"
                    onClick={() =>
                        setModules({
                            ...modules,
                            virtual: false,
                        })
                    }
                    className="border border-slate hover:border-grey bg-white text-grey px-4 py-2 rounded-md font-bold float-right m-6"
                >
                    <i className="fas fa-times"></i>
                </button>
            ) : (
                <div className="h-24"></div>
            )}

            <div className="w-full flex justify-center">
                <div className="w-3/4 m-6 text-center">
                    <div className="text-center flex justify-center w-full">
                        <img src="/imgs/module1.svg" alt="module" className="bg-lightpurple p-6 rounded-md" />
                    </div>

                    <h3 className="text-lg font-bold mt-6">Modul de Tur Virtual</h3>
                    <h3 className="text-lg text-grey mt-2 h-28">
                        Adauga si manageriaza tururile virtuale, adauga tur virtual anunturilor tale si urmareste statisticile.
                    </h3>

                    <button
                        type="button"
                        onClick={() =>
                            setModules({
                                ...modules,
                                virtual: true,
                            })
                        }
                        className="bg-blue text-white px-4 py-2 mt-10 rounded font-bold hover:shadow-lg"
                    >
                        <i className="fas fa-chevron-right ml-2"></i> Activeaza modul
                    </button>
                </div>
            </div>
        </div>
    );
}
