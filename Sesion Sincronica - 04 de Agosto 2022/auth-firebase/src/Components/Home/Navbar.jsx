import { Link } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";


const Navbar = () => {

    const logOut = () => {
        const auth = getAuth();
        signOut(auth);
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative bg-white">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link to="/">
                    <span className="sr-only">Firebase</span>
                    <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                    />
                    </Link>
                </div>

                <div>
                    <h1 className="font-mono text-2xl">
                        Bienvenido José
                    </h1>
                </div>

                <div>
                    <Link
                    to='#'
                    onClick={logOut}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                    Cerrar Sesión
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;