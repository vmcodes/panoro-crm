//= Functions & Modules
// Others
import React from 'react';
/**
 * The basic register form section
 */

export default function SuccessRegisteredSection() {
    return (
        <div className="lg:w-1/3 w-full">
            <div className="lg:p-0 p-6">
                <div className="my-12">
                    <img src="/imgs/check.svg" alt="finished" />
                </div>

                <h1 className="text-4xl lg:text-black text-white font-bold">
                    {' '}
                    Contul tau
                    <br />a fost creeat cu succes!
                </h1>
                <h3 className="text-lg lg:text-grey text-white mt-2">
                    Te rugam sa iti verifici email-ul si sa confirmi noul tau cont PanoroCRM.
                </h3>
            </div>
        </div>
    );
}
