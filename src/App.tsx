import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import useLocalStorage from 'use-local-storage';
import 'src/i18n/i18n';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Router from './pages/Router';

function App() {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark').matches;
  const [dark, setDark] = useLocalStorage<boolean>('isDark', defaultTheme);

  document.body.style.scrollbarGutter = 'stable';

  return (
    <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
      <Suspense fallback={<h1>Loading..</h1>}>
        <ThemeProvider value={{ dark, setDark }}>
          <div id={dark ? 'dark' : 'light'} className="app_container">
            <Router />
          </div>
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
