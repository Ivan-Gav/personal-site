import useLocalStorageCjs from 'use-local-storage';

type UseLocalStorage = typeof useLocalStorageCjs;

// use-local-storage is CJS exposing only `exports.default`. The production
// build unwraps that correctly, but vite 8's dev dep pre-bundler hands the
// whole module namespace to the default import, so the hook comes through as
// `{ default: fn }` and blows up on call. Normalise both shapes here.
const useLocalStorage: UseLocalStorage =
  (useLocalStorageCjs as unknown as { default?: UseLocalStorage }).default ??
  useLocalStorageCjs;

export default useLocalStorage;
