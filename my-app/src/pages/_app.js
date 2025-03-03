import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import { NavBar } from "@/components/NavBar"
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/LanguageProvider";

export default function App({ Component, pageProps }) {
  return(
    <LanguageProvider className="main">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  );
}