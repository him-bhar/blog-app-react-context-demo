import ThemeContext from "./ThemeContext.jsx";
import {useState} from "react";

const ThemeProvider = ({ children }) => { //children here signifies the components that will be wrapped inside this provider.
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    //value here is an object, so gives access to current theme value and function toggleTheme to alter it.
    //ThemeProvider as you see is internally referring to ThemeContext.Provider, which makes it simpler to reference.
    return (
        <ThemeContext.Provider value={ {theme, toggleTheme} }>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;