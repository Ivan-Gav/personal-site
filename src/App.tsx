import useLocalStorage from 'use-local-storage';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Router from './pages/Router';

function App() {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark').matches;
  const [dark, setDark] = useLocalStorage<boolean>('isDark', defaultTheme);

  return (
    <ThemeProvider value={{ dark, setDark }}>
      <div id={dark ? 'dark' : 'light'}>
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
