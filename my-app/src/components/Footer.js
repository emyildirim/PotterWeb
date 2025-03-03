import { translations } from '@/lib/lang';
import { useContext } from 'react';
import LanguageContext from '@/lib/languageContext';

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer>
          <p>&copy; {currentYear} PotterWeb. {translations.homePage.footer[language]}</p>
    </footer>
  );
};
