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

export default function Anunturi({ modules, setModules }: Props) {
    // TODO
    return (
        <div className="lg:border lg:border-slate rounded-lg w-full h-full lg:my-6">
            <div className="hidden lg:inline-block">
                {modules.anunturi ? (
                    <div className="h-24 w-24 float-right">
                        <button
                            type="button"
                            onClick={() =>
                                setModules({
                                    ...modules,
                                    anunturi: false,
                                })
                            }
                            className="border border-slate hover:border-grey bg-white text-grey px-4 py-2 rounded-md font-bold float-right m-6"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                ) : (
                    <div className="h-24"></div>
                )}
                <div className="w-full flex justify-center">
                    <div className="w-3/4 m-6 text-center">
                        <div className="text-center flex justify-center w-full">
                            <img src="/imgs/module5.svg" alt="module" className="bg-lightblue p-6 rounded-md" />
                        </div>

                        <h3 className="text-lg font-bold mt-6">Modul pentru anunturi</h3>
                        <h3 className="text-lg text-grey mt-2 h-28">
                            Modul care iti permite sa faci management inteligent al anunturilor si contactelor tale.
                        </h3>

                        <button
                            type="button"
                            onClick={() =>
                                setModules({
                                    ...modules,
                                    anunturi: true,
                                })
                            }
                            className="bg-blue text-white px-4 py-2 mt-10 rounded font-bold hover:shadow-lg"
                        >
                            <i className="fas fa-chevron-right ml-2"></i> Activeaza modul
                        </button>
                    </div>
                </div>
            </div>

            <div className="lg:hidden inline-block">
                <button
                    onClick={() =>
                        setModules({
                            ...modules,
                            anunturi: !modules.anunturi,
                        })
                    }
                    className="w-screen"
                >
                    <div className="mx-6 text-center">
                        <div className="bg-lightblue text-center flex justify-center w-full rounded-md">
                            <img src="/imgs/module5.svg" alt="module" className="p-6" />
                            <h3 className="text-lg font-bold mt-6">Modul pentru anunturi</h3>

                            {modules.anunturi ? (
                                <div className="h-24 w-24 float-right">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setModules({
                                                ...modules,
                                                anunturi: false,
                                            })
                                        }
                                        className="z-10 border border-slate hover:border-grey bg-white text-grey px-4 py-2 rounded-md font-bold float-right m-6"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            ) : (
                                <div className="h-24 w-24"></div>
                            )}
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}
