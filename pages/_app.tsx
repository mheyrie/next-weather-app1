// pages/_app.tsx
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/context/ThemeContext';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import GlobalStyle from '@/styles/globals';
import '@/utils/fontawesome'; // Import FontAwesome configuration
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextThemesProvider attribute="class">
            <ThemeProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </NextThemesProvider>
    );
}

export default MyApp;
