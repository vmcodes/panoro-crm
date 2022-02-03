//= Functions & Modules
// Others
import React from 'react';
import { ModuleItem } from '../../data/ModuleItem';

//= Structures & Data
// Own
type Props = {
    moduleItem: ModuleItem;
    modules: ModuleItem[];
    setModules: React.Dispatch<React.SetStateAction<ModuleItem[]>>;
};

export default function Module({ modules, setModules, moduleItem }: Props) {
    return (
        <div className="lg:border lg:border-slate rounded-lg w-full h-full lg:my-6">
            <div className="hidden lg:inline-block">
                {modules[moduleItem.id] ? (
                    <div className="h-24 w-24 float-right">
                        <button
                            type="button"
                            onClick={() =>
                                setModules({
                                    ...modules,
                                    [moduleItem.id]: false,
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
                            <img src={moduleItem.icon} alt={moduleItem.name} className={`p-6 rounded-md bg-${moduleItem.color}`} />
                        </div>

                        <h3 className="text-lg font-bold mt-6">{moduleItem.name}</h3>
                        <h3 className="text-lg text-grey mt-2 h-28">{moduleItem.description} </h3>

                        <button
                            type="button"
                            onClick={() =>
                                setModules({
                                    ...modules,
                                    [moduleItem.id]: true,
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
                            [moduleItem.id]: !modules[moduleItem.id],
                        })
                    }
                    className="w-screen"
                >
                    <div className="mx-6 text-center">
                        <div className={`bg-${moduleItem.color} text-center flex justify-center w-full rounded-md`}>
                            <img src={moduleItem.icon} alt={moduleItem.name} className="p-6" />
                            <h3 className="text-lg font-bold mt-6 w-full">{moduleItem.name}</h3>

                            {modules[moduleItem.id] ? (
                                <div className="h-24 w-24 float-right">
                                    <span className="z-10 border border-slate hover:border-grey bg-white text-grey px-4 py-2 rounded-md font-bold float-right m-6">
                                        <i className="fas fa-times"></i>
                                    </span>
                                </div>
                            ) : (
                                <div className="h-24 w-24 float-right"></div>
                            )}
                        </div>
                    </div>
                </button>
            </div>
            <span className="hidden bg-lightblue bg-purple bg-lightpurple bg-lightred bg-lightgreen bg-lightyellow"></span>
        </div>
    );
}
