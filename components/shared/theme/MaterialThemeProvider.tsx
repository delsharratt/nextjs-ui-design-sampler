'use client';

import { ScopedCssBaseline, ThemeProvider } from '@mui/material';
import { JSX } from 'react';

import { materialDarkTheme } from '@/core/constants/material';

/**
 * MaterialThemeProvider is a React component that provides a Material UI theme to its children.
 * It uses the ThemeProvider and CssBaseline components from Material UI to apply the theme and reset CSS styles.
 *
 * @param {React.ReactNode} children - The child components to be wrapped by the theme provider.
 * @returns {JSX.Element} The wrapped child components with the Material UI theme applied.
 */
export default function MaterialThemeProvider({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider theme={materialDarkTheme}>
      <ScopedCssBaseline />
      {children}
    </ThemeProvider>
  );
}
