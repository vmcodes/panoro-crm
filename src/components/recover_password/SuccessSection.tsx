//= Functions & Modules
// Others
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * The basic register form section
 */
export default function SuccessSection() {
    return (
        <div className="lg:w-1/3 w-full">
            <div className="lg:p-0 p-6">
                <h1 className="text-4xl lg:text-black text-white font-bold">
                    Parola ta <br />a fost resetata!
                </h1>
                <h3 className="text-lg lg:text-grey text-white mt-2">
                    ITe rugam sa iti verifici email-ul si sa confirmi noul tau cont PanoroCRM.
                </h3>
            </div>

            <div className="mt-6 bg-white w-full lg:p-0 p-6 lg:rounded-none rounded-xl h-full">
                <Link to="/login" className="bg-blue text-white px-4 py-2 rounded float-left font-bold hover:shadow-lg mt-12">
                    CONECTEAZA-TE
                </Link>
            </div>
        </div>
    );
}
