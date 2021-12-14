//= Functions & Modules
// Own
import fetch from "../utils/fetch";
// Others
import React from "react";
import {boundMethod} from 'autobind-decorator';

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
export default class ExampleComponent extends React.PureComponent<Props> {
    /**
     * Shows an alert
     */
    @boundMethod
    async showAlert() {
        const result = await fetch("/api/example-get", { method: "GET" });

        alert(JSON.stringify(result));
    }

    render() {
        return <button onClick={this.showAlert} className="example-button">{this.props.label}</button>
    }
}
