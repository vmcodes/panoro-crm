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
            <h1 className="text-4xl font-bold text-left">
                Parola ta <br />a fost resetata!
            </h1>
            <h3 className="text-lg text-grey mt-2">ITe rugam sa iti verifici email-ul si sa confirmi noul tau cont PanoroCRM.</h3>

            <div className="w-full py-6 mt-12">
                <Link to="/login" className="bg-blue text-white px-4 py-2 rounded float-left font-bold hover:shadow-lg">
                    CONECTEAZA-TE
                </Link>
            </div>
        </div>
    );
}
