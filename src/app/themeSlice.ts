import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  mode: 'light' | 'dark';
};

const prefersDark = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-color-scheme: dark)').matches;

const getInitialMode = (): ThemeState['mode'] => {
  if (typeof window !== 'undefined' && 'localStorage' in window) {
    const stored = window.localStorage.getItem('iamkay-theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  }

  return prefersDark() ? 'dark' : 'light';
};

const initialState: ThemeState = {
  mode: typeof window === 'undefined' ? 'light' : getInitialMode()
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('iamkay-theme', state.mode);
      }
    },
    setMode(state, action: { payload: ThemeState['mode'] }) {
      state.mode = action.payload;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('iamkay-theme', state.mode);
      }
    }
  }
});

export const { toggleMode, setMode } = themeSlice.actions;
export default themeSlice.reducer;
