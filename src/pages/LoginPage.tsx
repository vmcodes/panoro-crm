//= Functions & Modules
// Others
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginBase from '../components/LoginBase';
import axios from 'axios';
/**
 * The login page
 */
export default function LoginPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function handleSubmit(event) {
        event.preventDefault();

        const res = await axios.post('/api/users/login', { username: email, password: password });
        alert(res?.data);
    }

    return (
        <LoginBase>
            <div className="lg:w-1/3 w-full">
                <div className="lg:p-0 p-6">
                    <h1 className="text-4xl lg:text-black text-white font-bold">
                        hello,
                        <br />
                        PanoroCRM
                    </h1>

                    <h3 className="text-lg lg:text-grey text-white mt-2">Introdu detaliile pentru a te conecta.</h3>
                </div>

                <form className="mt-6 bg-white w-full lg:p-0 p-6 lg:rounded-none rounded-xl h-full" onSubmit={(e) => handleSubmit(e)}>
                    <div className="w-full py-4">
                        <label className="text-grey">Email</label>
                        <br />
                        <input
                            className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <i className="far fa-envelope-open ml-2"></i>
                    </div>

                    <div className="w-full py-4">
                        <label className="text-grey">Parola</label>
                        <br />
                        <input
                            className="pt-3 w-11/12 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey focus:border-b-blue rounded-b-none focus:rounded-none focus:outline-none rounded-md ring-grey"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className="fas fa-lock ml-2"></i>
                    </div>

                    <div className="w-full py-6">
                        <input
                            className="mb-3 pt-3 px-4 border border-t-0 border-l-0 border-r-0 border-b-grey rounded-none focus:outline-none rounded-md ring-grey"
                            type="radio"
                        />
                        <label className="text-md font-bold ml-2">Nu ma deconecta!</label>
                        <Link to="/recover" className="text-blue hover:underline text-md font-bold float-right">
                            Reseteaza parola
                        </Link>
                    </div>

                    <div className="w-full py-6">
                        <button type="submit" className="bg-blue text-white px-4 py-2 rounded float-left font-bold hover:shadow-lg">
                            Conecteaza-te
                        </button>

                        <Link to="/signup" className="bg-lightblue text-blue px-4 py-2 rounded float-right font-bold hover:shadow-lg">
                            Creeaza cont
                        </Link>
                    </div>

                    <div className="w-full pt-24 py-6">
                        <label className="text-md text-grey mt-2 inline-block align-middle">Conecteaza-te cu:</label>

                        <button
                            type="button"
                            className="border border-grey hover:border-blue bg-white text-grey px-4 py-2 rounded float-right font-bold"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </button>

                        <button
                            type="button"
                            className="border border-grey hover:border-blue bg-white text-grey px-4 py-2 rounded float-right font-bold mr-2"
                        >
                            <i className="fab fa-google"></i>
                        </button>
                    </div>
                </form>
            </div>
        </LoginBase>
    );
}
