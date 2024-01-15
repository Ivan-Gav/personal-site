import { Suspense } from 'react';
import useLocalStorage from 'use-local-storage';
import 'src/i18n/i18n';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Router from './pages/Router';

function App() {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark').matches;
  const [dark, setDark] = useLocalStorage<boolean>('isDark', defaultTheme);

  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <ThemeProvider value={{ dark, setDark }}>
        <div id={dark ? 'dark' : 'light'}>
          <Router />
        </div>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
