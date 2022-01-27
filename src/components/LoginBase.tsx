//= Functions & Modules
// Others
import React from 'react';

/**
 * The base component of all the pages
 */
export default function LoginBase({ children }) {
    // TODO
    return (
        <div className="flex min-h-screen bg-blue">
            <div className="lg:bg-white lg:rounded-tr-xl lg:rounded-br-xl lg:w-3/4 w-full lg:p-6">
                <div className="grid justify-items-center py-24">{children}</div>
            </div>
        </div>
    );
}
