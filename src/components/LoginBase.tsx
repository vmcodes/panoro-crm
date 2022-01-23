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
            <div className="bg-white rounded-tr-xl rounded-br-xl lg:w-3/4 w-full p-6">{children}</div>
        </div>
    );
}
