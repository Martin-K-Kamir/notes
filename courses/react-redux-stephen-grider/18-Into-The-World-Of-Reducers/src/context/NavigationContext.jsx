import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [curPath, setCurPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => setCurPath(window.location.pathname);

        window.addEventListener("popstate", handler);

        return () => window.removeEventListener("popstate", handler);
    }, []);

    function navigate(to) {
        window.history.pushState({}, "", to);
        setCurPath(to);
    }

    return (
        <NavigationContext.Provider value={{ curPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;
