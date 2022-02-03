//= Functions & Modules
// Others
import React from 'react';
import { ModuleItem } from 'src/data/ModuleItem';
import Module from './Module';
/**
 * The discover modules component where the user can add or remove modules
 */
type Props = {
    modules: ModuleItem[];
    moduleItem: ModuleItem[];
    setModules: React.Dispatch<React.SetStateAction<ModuleItem[]>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DiscoverModules({ modules, moduleItem, setModules, setShowModal }: Props) {
    return (
        <div className="modal fade fixed top-0 left-0 w-full outline-none overflow-x-hidden overflow-y-scroll h-screen" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative w-full pointer-events-auto lg:bg-white bg-blue bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-6 lg:bg-white bg-blue">
                        <div className="grid justify-items-center">
                            <div className="w-full">
                                <h1 className="text-4xl font-bold lg:text-black text-white">Module Active</h1>
                                <h3 className="text-lg lg:text-grey text-white mt-2">
                                    Te rugam sa selectezi modulele pe care doresti sa le activezi
                                </h3>
                            </div>
                        </div>

                        <h5 className="text-xl font-medium leading-normal"></h5>
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="border border-slate hover:border-grey bg-white text-grey px-4 py-2 rounded-md font-bold float-right m-6 lg:inline-block hidden"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <div className="lg:w-full min-h-screen w-screen bg-white rounded-tr-lg rounded-tl-lg grid lg:grid-cols-3 gap-2 flex flex-shrink-0 items-center justify-between lg:px-6 py-6">
                        {moduleItem?.map((_, index) => {
                            return <Module key={index} moduleItem={_} modules={modules} setModules={setModules} />;
                        })}
                    </div>
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-6 rounded-b-md bg-white">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="inline-block px-6 py-2.5 bg-blue text-white font-medium text-xs leading-tight uppercase rounded hover:shadow-lg"
                            data-bs-dismiss="modal"
                        >
                            Creeaza cont
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
