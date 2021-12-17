//= Functions & Modules
// Own
import fetch from "../utils/fetch";
// Others
import React from "react";

//= Style & Assets
// Own
import "../styles/components/ExampleComponent.scss";

type Props = {
    label: string;
};

/**
 * Example component that can be deleted
 *
 * @prop {String} label - the label of the button
 */
export default function ExampleComponent({ label }: Props) {
    const showAlert = async () => {
        const result = await fetch("/api/example-get", { method: "GET" });

        alert(JSON.stringify(result));
    }

    return <button onClick={showAlert} className="example-button">{label}</button>
}
