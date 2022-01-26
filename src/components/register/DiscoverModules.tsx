//= Functions & Modules
// Others
import React from 'react';
import Anunturi from '../modules/Anunturi';
import Contacte from '../modules/Contacte';
import Documente from '../modules/Documente';
import Facturare from '../modules/Facturare';
import Statistici from '../modules/Statistici';
import Virtual from '../modules/Virtual';
/**
 * The discover modules component where the user can add or remove modules
 */
type ShowModules = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DiscoverModules({ setShowModal }: ShowModules) {
    // TODO
    return (
        <div className="modal fade fixed top-0 left-0 w-full outline-none overflow-x-hidden overflow-y-scroll h-screen" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative w-full pointer-events-auto bg-white bg-clip-padding bg-white rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-6">
                        <h5 className="text-xl font-medium leading-normal"></h5>
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="border border-slate hover:border-grey bg-white text-grey px-4 py-2 rounded-md font-bold float-right m-6"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="w-full grid lg:grid-cols-3 gap-2 flex flex-shrink-0 items-center justify-between p-6">
                        <Virtual />
                        <Documente />
                        <Statistici />
                        <Facturare />
                        <Anunturi />
                        <Contacte />
                    </div>
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-6 rounded-b-md">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="inline-block px-6 py-2.5 bg-blue text-white font-medium text-xs leading-tight uppercase rounded hover:shadow-lg"
                            data-bs-dismiss="modal"
                        >
                            închide
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
