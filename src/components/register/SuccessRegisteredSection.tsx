//= Functions & Modules
// Others
import React from 'react';
/**
 * The basic register form section
 */
import Check from '../../images/check.svg';

export default function SuccessRegisteredSection() {
    return (
        <div className="lg:w-1/3 w-full">
            <img src={Check} alt="finished" />
            <h1 className="text-4xl font-bold">
                Contul tau
                <br />a fost creeat cu succes!
            </h1>
            <h3 className="text-lg text-grey mt-2">Te rugam sa iti verifici email-ul si sa confirmi noul tau cont PanoroCRM.</h3>
        </div>
    );
}
