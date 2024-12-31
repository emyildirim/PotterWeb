import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import { LanguageProvider } from '@/lib/langContext';
import { NavBar } from "@/components/NavBar"

export default function App({ Component, pageProps }) {
  return <>
    <LanguageProvider>
      <NavBar />
      <Component {...pageProps} />
    </LanguageProvider>
  </>;
}