import React, {createContext, ReactNode, useEffect, useState} from 'react';

interface ThemeContextType{

    isDark: boolean;
    toggleTheme: () => void;

}

export const ThemeContext = createContext<ThemeContextType>({

    isDark: false,
    toggleTheme: () => {},

})

export const ThemeProvider = ({ children } : { children: ReactNode }) => {

    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches

    const [isDark, setIsDark] = useState<boolean>(
        localStorage.getItem('isDark') === 'true' || preference
    );

    useEffect(() => {
        localStorage.setItem('isDark', String(isDark));
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev)

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};