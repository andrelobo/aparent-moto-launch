import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark"; // Only dark theme

type ThemeProviderContextProps = {
  theme: Theme;
};

const ThemeProviderContext = createContext<ThemeProviderContextProps | undefined>(undefined);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("dark"); // Hardcode to dark

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark"); // Ensure light is removed if present
    root.classList.add("dark"); // Always apply dark theme
  }, []); // Empty dependency array, runs once

  const value = {
    theme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
