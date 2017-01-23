import React from 'react';
import Navbar from '../components/Navbar'

import '../styles/Pages/Home.css'

import HeroContent from '../components/Home/Hero-Content';
import PostHeroLead from '../components/Home/Post-Hero-Lead';
import IconBox from '../components/Home/Icon-Box';
import ColumnContent from '../components/Home/Column-Content';
import ContactusForm from '../components/Contactus-Form'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Home">
        <section className="hero">
          <div className="hero__content">
            <HeroContent />
          </div>
        </section>

        <section className="post__hero">
        <div className="container">
        <div className="row">
          <PostHeroLead
              title='Leader In News and Social Analytics'
              content='In just over three years, Accern has rapidly grown to become the market leader in the news and social analytics space in terms of content coverage. Trading alerts and analytics are derived from relevant finance-related news processed on over 300 million websites in real time for institutional investors.'
          />

          <div className="container phgrid">
          <div className="row">
            <IconBox
              fontClass="icon-Newspaper"
              title="News Coverage"
              description="We currently have the largest finance news coverage in the world by monitoring 300 million news websites, blogs, and social media feeds such as Twitter."
              />
            <IconBox
              fontClass="icon-SpeedDial"
              title="Low-Latency"
              description="In a few milliseconds, Accern captures articles as soon as they are published online and derives trading analytics to be delivered to customers."
              />
            <IconBox
              fontClass="icon-checkmark2"
              title="News Quality"
              description="We provide news that are relevant to U.S. public equities 99% of the time, using our proprietary algorithms built solely to tackle data quality issues."
              />
            <IconBox
              fontClass='icon-PriceTag'
              title="Affordable"
              description="We save customers time and energy, and cut more than 50% in news data costs by helping them integrate any type of news sources they need."
              />
          </div>
          </div>
          </div>
        </div>
        </section>

        <section className="tradable-alerts">
          <div className="container-fluid">
            <div className="row">
              <div className="imgContainer col-xs-12 col-sm-6 col-md-6">
                <img src="/assets/images/platform2017-1.png" alt="platform image" />
              </div>
              <ColumnContent
                heading="Get Tradable Alerts"
                content="Use our web application to get early news on over 8,000 U.S. public equities sourced from over 300 million news websites, blogs, and social media feeds such as Twitter. With easy–to-use features, you can get set up in minutes and start trading on custom news alerts we deliver to you."
                panels={[
                          {
                            title: 'Trade On Early News',
                            content: 'Our massive coverage of 300 million websites allows us to find and deliver early stories on U.S. public equities to our customers.'
                          },
                          {
                            title: "Build Custom Alerts",
                            content: "Our app allows you to build custom news alerts geared specifically towards your trading strategy. If requested, we can even help you build them."
                          },
                          {
                            title: "Use Trading Analytics",
                            content: "We derive analytics such as sentiment, impact, news exposure, news reliability rankings, and much more from each article."
                          }
                        ]}
                />
            </div>
          </div>
        </section>

        <section className="largest-news">
          <div className="container-fluid">
            <div className="row">
              <ColumnContent
                heading="Largest News Sentiment API Feed"
                content="Use our low-latency news sentiment API feed to build custom trading strategies or integrate it with your existing strategies. With over 300 million news websites, blogs, and social media websites, such as Twitter, monitored in real-time, we extract article meta data, company and events information, and derived trading analytics per article for our institutional customers."
                panels={[
                          {
                            title: "Flexible Low-Latency API Feed",
                            content: "Our push-based low-latency JSON API feed can aggregate data based on specific time frames or filter data based on companies."
                          },
                          {
                            title: "API Data Fields",
                            content: "Our API data feed includes article metadata such as URLs, events, companies, and derived analytics such as sentiment."
                          },
                          {
                            title: "4 Years of History",
                            content: "We have over four years of historical data, which includes article headlines and URLs. Historical data are provided upon request."
                          }
                        ]}
                />
              <div className="imgContainer col-xs-12 col-sm-6 col-md-6">
                <img src="/assets/images/blackwhitegirl.jpg" alt="platform image" className="col-xs-12 col-sm-6 col-md-6" />
              </div>
            </div>
          </div>
        </section>

        <section className="contact__us">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="content">
                  <h2>Contact Us Anytime </h2>
                  <p>Contact us for documentation and pricing. We will respond within 3 hours. </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className='form'>
                    <ContactusForm/>
                </div>
              </div>
          </div>
            </div>
        </section>

      </div>
    );
  }
}
