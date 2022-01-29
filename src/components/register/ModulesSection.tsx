//= Functions & Modules
// Others
import React, { useEffect, useState } from 'react';
import { RegisterStep } from '../../pages/RegisterPage';
import DiscoverModules from './DiscoverModules';
import { ModuleItem } from 'src/data/ModuleItem';
import axios from 'axios';
import Module from './Module';
/**
 * The modules section of register page where user can see the selected modules
 */

type Props = {
    modules: ModuleItem[];
    setModules: React.Dispatch<React.SetStateAction<ModuleItem[]>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<RegisterStep>>;
    setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModulesSection({ modules, setModules, setCurrentStep, setSubmit }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [moduleItem, setModuleItem] = useState<ModuleItem[]>([]);

    useEffect(() => {
        async function getData() {
            const res = await axios.get('/api/modules');

            setModuleItem(res.data);
        }

        if (!moduleItem[0]) {
            getData();
        }
    }, [moduleItem]);

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

            {showModal && <DiscoverModules moduleItem={moduleItem} modules={modules} setModules={setModules} setShowModal={setShowModal} />}

            {!showModal && (
                <form className="mt-6 bg-white w-full lg:rounded-none rounded-xl h-full" onSubmit={(e) => handleSubmit(e)}>
                    <div className="w-full py-6 grid lg:grid-cols-2 gap-4">
                        {moduleItem.map((_, index) => {
                            return <>{modules[_.id] && <Module key={index} moduleItem={_} modules={modules} setModules={setModules} />}</>;
                        })}
                    </div>

                    <div className="w-full mt-80 lg:p-0 px-6">
                        <div className="lg:float-left my-6">
                            <button
                                onClick={() => setShowModal(true)}
                                type="button"
                                className="bg-white border border-dashed border-lightblue text-blue px-4 py-2 rounded mr-2 font-bold hover:border-blue"
                            >
                                Descopera mai multe module
                            </button>
                        </div>

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
            )}
        </div>
    );
}
