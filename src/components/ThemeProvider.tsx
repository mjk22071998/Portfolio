import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeType = "console-dark";

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme] = useState<ThemeType>("console-dark");

    useEffect(() => {
        const root = document.documentElement;
        // Clear old theme classes (in case you ever had others)
        root.classList.remove(
            "theme-console-light",
            "theme-holographic-dark",
            "theme-holographic-light"
        );
        // Apply default
        root.classList.add("theme-console-dark");
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: () => {} }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
