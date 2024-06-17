// src/context/ThemeContext.tsx
import { createContext, useContext, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from "next-themes";

const lightTheme = {
    colors: {
        background: '#ffffff',
        text: '#000000',
    },
};

const darkTheme = {
    colors: {
        background: '#000000',
        text: '#ffffff',
    },
};

type ThemeContextType = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const { theme, setTheme } = useNextTheme();
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme: theme as 'light' | 'dark', toggleTheme }}>
            <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
