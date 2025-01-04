import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import { NavBar } from "@/components/NavBar"
import LanguageProvider from "@/components/LanguageProvider";

export default function App({ Component, pageProps }) {
  return(
    <LanguageProvider>
      <NavBar />
      <Component {...pageProps} />
    </LanguageProvider>
  );
}