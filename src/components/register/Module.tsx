//= Functions & Modules
// Others
import React from 'react';

//= Structures & Data
// Own
import { ModuleItem } from '../../data/ModuleItem';

type Props = {
    data: ModuleItem;
    displayDeleteButton?: boolean;
    displayActionButton?: boolean;
    onDeleteButtonPress?: () => void;
    onActionButtonPress?: () => void;
    actionButtonLabel?: string;
};

/**
 * A module component
 *
 * @param {Props} props The props of the copmponent
 * @param {ModuleItem} props.data The data of the module
 * @param {boolean} [props.displayDeleteButton] If true display a "X" button in the top-right corner
 * @param {boolena} [props.displayActionButton] If true display a button in the bottom of the component
 * @param {() => void} [props.onDeleteButtonPress] The handler for when the delete button is pressed
 * @param {() => void} [props.onActionButtonPress] The handler for when the action button is pressed
 * @param {string} [props.actionButtonLabel] The label of the action button
 */
export default function Module() {
    // TODO
    return (
        <div className="border border-slate rounded lg:w-1/2 w-full h-full my-6 lg:mx-6">
            <button
                type="button"
                className="border border-slate hover:border-grey bg-white text-grey px-4 py-2 rounded font-bold float-right m-6"
            >
                <i className="fas fa-times"></i>
            </button>

            <div className="w-full flex justify-center">
                <div className="w-1/2 m-12 text-center">
                    <div className="text-center flex justify-center w-full">
                        <img src="/imgs/module1.svg" alt="module" />
                    </div>

                    <h3 className="text-lg font-bold mt-6">Modul de Tur Virtual</h3>
                    <h3 className="text-lg text-grey mt-2">
                        Adauga si manageriaza tururile virtuale, adauga tur virtual anunturilor tale si urmareste statisticile.
                    </h3>

                    <button type="submit" className="bg-blue text-white px-4 py-2 mt-6 rounded font-bold">
                        <i className="fas fa-chevron-right ml-2"></i> Activeaza modul
                    </button>
                </div>
            </div>
        </div>
    );
}
