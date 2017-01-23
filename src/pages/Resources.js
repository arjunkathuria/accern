import React from 'react';
import Navbar from '../components/Navbar';
import PostHeroLead from '../components/Home/Post-Hero-Lead';
import GridBox from '../components/GridBox'

import '../styles/Pages/Resources.css'

export default class Resources extends React.Component {
  render() {
    return (
      <div className="Resources">
        <section className="hero">
          <div className="hero__content">
              <div className="center">
                <p> <span className="small__text">Downloadable</span> </p>
                <p> <span className="large__text">Resources</span> </p>
            </div>
          </div>
        </section>


        <section className="post__hero">
        <div className="container">
        <div className="row">
          <PostHeroLead
               title='API Resources'
               content='Feel free to download all of our API resources to help you get a better understanding of our product. If you have further questions, please feel free to contact us at info@accern.com.'
          />

          <div className="container boxgrid">
            <div className="row">
                <div className="col-xs-12 col-sm-3 col-md-3 boxel">
                    <GridBox
                        image='/assets/images/APIGUIDE-2.png'
                        title='Download'
                    />
                </div>

                <div className="col-xs-12 col-sm-3 col-md-3 boxel">
                    <GridBox
                        image='/assets/images/samplelogo.png'
                        title='Download'
                    />
                </div>

                <div className="col-xs-12 col-sm-3 col-md-3 boxel">
                    <GridBox
                        image='/assets/images/WHITEPAPERLOGO.png'
                        title='Download'
                    />
                </div>

                <div className="col-xs-12 col-sm-3 col-md-3 boxel">
                    <GridBox
                        image='/assets/images/BACKTESTLOGO-1.png'
                        title='Download'
                    />
                </div>
            </div>
          </div>
          </div>
        </div>
        </section>
      </div>
    )
  }
}
