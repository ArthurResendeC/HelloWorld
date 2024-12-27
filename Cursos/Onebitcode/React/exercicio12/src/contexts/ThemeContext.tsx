import { createContext, ReactNode, useState } from "react";

interface CreateContextProps{
    theme: string,
    toggleTheme: ()=> void
}
const initialValue:CreateContextProps = {
    theme: '',
    toggleTheme: ()=> {},
}

export const ThemeContext = createContext<CreateContextProps>(initialValue)
export const ThemeProvider = ({children}: {children:ReactNode}) =>{
    
    const [theme, setTheme] = useState<string>('light')

    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}