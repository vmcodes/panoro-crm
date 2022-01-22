//= Functions & Modules
// Others
import React from "react";

//= Structures & Data
// Own
import { ModuleItem } from "../../data/ModuleItem";

type Props = {
    data: ModuleItem;
    displayDeleteButton?: boolean;
    displayActionButton?: boolean;
    onDeleteButtonPress?: () => void;
    onActionButtonPress?: () => void;
    actionButtonLabel?: string;
}

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
export default function ModulesSection(props: Props) {
    // TODO
    return null;
}

