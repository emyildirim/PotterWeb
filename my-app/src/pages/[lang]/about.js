import 'bootstrap/dist/css/bootstrap.min.css';
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

      <main className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 mb-4">{translations.aboutPage.title[language]}</h1>
            <div className="w-75 mx-auto">
              <hr className="my-4" />
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="h2 mb-4">{translations.aboutPage.ourStory[language]}</h2>
            <p className="lead text-muted">
              Founded in [year], we've been committed to [your company's mission].
              Our journey began with a simple idea: [describe your founding story].
            </p>
          </div>
          <div className="col-md-6">
            {/* Placeholder for an image */}
            <div className="bg-light rounded p-3 h-100 d-flex align-items-center justify-content-center">
              <p className="text-muted">Company Image</p>
            </div>
          </div>
        </div>

        <div className="row mb-5 bg-light py-5">
          <div className="col-12 text-center">
            <h2 className="h2 mb-4">{translations.aboutPage.ourMission[language]}</h2>
            <p className="lead text-muted w-75 mx-auto">
              We strive to [describe your company's mission and goals].
              Our commitment to excellence drives everything we do.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="h2 mb-5">{translations.aboutPage.ourTeam[language]}</h2>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="rounded-circle bg-light mx-auto mb-3" style={{ width: '150px', height: '150px' }}>
                  {/* Placeholder for team member photo */}
                </div>
                <h3 className="h4">John Doe</h3>
                <p className="text-muted">CEO & Founder</p>
                <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="rounded-circle bg-light mx-auto mb-3" style={{ width: '150px', height: '150px' }}>
                  {/* Placeholder for team member photo */}
                </div>
                <h3 className="h4">Jane Smith</h3>
                <p className="text-muted">CTO</p>
                <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="rounded-circle bg-light mx-auto mb-3" style={{ width: '150px', height: '150px' }}>
                  {/* Placeholder for team member photo */}
                </div>
                <h3 className="h4">Mike Johnson</h3>
                <p className="text-muted">Lead Developer</p>
                <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <h2 className="h2 mb-4">{translations.aboutPage.getInTouch[language]}</h2>
            <p className="lead text-muted">
              Interested in working with us? Get in touch!
            </p>
            <button className="btn btn-primary btn-lg">Contact Us</button>
          </div>
        </div>
      </main>
    </>
  );
}