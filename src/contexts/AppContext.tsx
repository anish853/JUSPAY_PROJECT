import { createContext, ReactNode, useState } from "react";

interface AppContextType {
  theme: string;
  changeTheme: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<string>("light");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
