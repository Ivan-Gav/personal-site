import { createContext, useContext } from 'react';

type ThemeContextType = {
  dark: boolean;
  setDark: (isDark: boolean) => void;
};

// type ThemeContextProviderProps = {
//   children: React.ReactNode;
// };

const ThemeContext = createContext<ThemeContextType | null>(null);

// export default function ThemeProvider(props: ThemeContextProviderProps) {
//   const { children } = props;
//   const [dark, setDark] = useState(false);

//   return (
//     <ThemeContext.Provider value={{ dark, setDark }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider'
    );
  }
  return context;
}
