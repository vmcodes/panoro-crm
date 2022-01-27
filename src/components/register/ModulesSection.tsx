//= Functions & Modules
// Others
import React, { useState } from 'react';
import { Modules, RegisterStep } from '../../pages/RegisterPage';
import DiscoverModules from './DiscoverModules';
import Anunturi from '../modules/Anunturi';
import Contacte from '../modules/Contacte';
import Documente from '../modules/Documente';
import Facturare from '../modules/Facturare';
import Statistici from '../modules/Statistici';
import Virtual from '../modules/Virtual';
/**
 * The modules section of register page where user can see the selected modules
 */

type Props = {
    modules: Modules;
    setModules: React.Dispatch<React.SetStateAction<Modules>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<RegisterStep>>;
    setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModulesSection({ modules, setModules, setCurrentStep, setSubmit }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);

    async function handleSubmit(event) {
        event.preventDefault();

        setSubmit(true);
    }

    return (
        <div className="lg:w-2/3 w-full">
            <div className="lg:p-0 p-6">
                <h1 className="text-4xl lg:text-black text-white font-bold">Module Active</h1>
                <h3 className="text-lg lg:text-grey text-white mt-2">Te rugam sa selectezi modulele pe care doresti sa le activezi</h3>
            </div>

            {showModal && <DiscoverModules modules={modules} setModules={setModules} setShowModal={setShowModal} />}

            <form className="mt-6 bg-white w-full lg:p-0 p-6 lg:rounded-none rounded-xl h-full" onSubmit={(e) => handleSubmit(e)}>
                <div className="w-full py-6 grid lg:grid-cols-2 gap-4">
                    {modules.virtual && <Virtual modules={modules} setModules={setModules} />}
                    {modules.documente && <Documente modules={modules} setModules={setModules} />}
                    {modules.statistici && <Statistici modules={modules} setModules={setModules} />}
                    {modules.facturare && <Facturare modules={modules} setModules={setModules} />}
                    {modules.anunturi && <Anunturi modules={modules} setModules={setModules} />}
                    {modules.contacte && <Contacte modules={modules} setModules={setModules} />}
                </div>

                <div className="w-full mt-96">
                    <button
                        onClick={() => setShowModal(true)}
                        type="button"
                        className="bg-white my-6 border border-dashed border-lightblue text-blue px-4 py-2 rounded mr-2 font-bold hover:border-blue"
                    >
                        Descopera mai multe module
                    </button>

                    <div className="lg:float-right my-6">
                        <button
                            onClick={() => setCurrentStep(RegisterStep.BUSINESS_FIELDS)}
                            type="button"
                            className="bg-lightblue text-blue px-4 py-2 rounded mr-2 font-bold hover:shadow-lg"
                        >
                            <i className="fas fa-chevron-left ml-2"></i> Inapoi
                        </button>

                        <button type="submit" className="bg-blue text-white px-4 py-2 rounded font-bold hover:shadow-lg">
                            Creeaza cont
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
