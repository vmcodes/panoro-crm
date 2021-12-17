//= Functions & Modules
// Others
import React from "react";

//= React components
// Own
import ExampleComponent from "../components/ExampleComponent";

//= Style & Assets
// Own
import "../styles/pages/ExamplePage.scss";

/**
 * Example page that can be deleted
 */
export default function ExamplePage() {
    return (
        <div id="ExamplePage">
            <ExampleComponent label="Show an alert"/>
        </div>
    );
}

