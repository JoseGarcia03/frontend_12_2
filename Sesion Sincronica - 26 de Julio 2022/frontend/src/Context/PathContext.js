import { createContext, useState } from "react";

export const PathContext = createContext();

const routes = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'The Lord of the Rings',
        path: '/lord'
    },
    {
        title: 'Hobbit',
        path: '/hobbit'
    },
    {
        title: 'Search',
        path: '/search'
    }
];

export const PathProvider = ({ children }) => {

    const [route, setRoute] = useState( routes );

    return (
        <PathContext.Provider value={{ route, setRoute }} >
            { children }
        </PathContext.Provider>
    )
}