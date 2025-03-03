import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap"
import Head from 'next/head';
import { useContext } from 'react';
import { translations } from '@/lib/lang';
import LanguageContext from '@/lib/languageContext';

export default function About() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Head>
        <title>{`${translations.aboutPage.title[language]} | My Company`}</title>
        <meta name="description" content="Learn more about our company, mission, and team" />
      </Head>

      <main className="container py-5" style={{paddingBottom: '0'}}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-6 mb-6">{translations.aboutPage.title[language]}</h1>
            <div className="w-75 mx-auto">
              <hr className="my-4" />
              <Image src="/profile.jpeg" alt="profile" width={150} height={150} className="bottom-margin profile-image"/>
              <p className="lead">Erkam Yildirim</p>
              <p className="lead text-muted about-me text-limit">
              {translations.aboutPage.description[language]}
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="h2 mb-4">{translations.aboutPage.socialmedia[language]}</h2>
            <div className="flex-horizontal" style={{gap: '1.5rem'}}>
              <a href="https://github.com/emyildirim" target="_blank" rel="noopener noreferrer">
                <Image src="/github_logo.png" alt="GitHub Logo" width={50} height={50} className="bottom-margin image-logo"/>
                <p className="text-muted">emyildirim</p>
              </a>
              <a href="https://linkedin.com/in/metin-ca" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin_logo.jpg" alt="LinkedIn Logo" width={50} height={50} className="bottom-margin image-logo"/>
                <p className="text-muted">metin-ca</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}