import React from 'react';
import '../styles/Pages/Company.css';
import PostHeroLead from '../components/Home/Post-Hero-Lead';
import GridBox from '../components/GridBox'

export default class Company extends React.Component {
  render() {
    return (
      <div className="Company">
        <section className="hero">
          <div className="hero__content">
            <div className="center">
              <p> <span className="small__text">An Overview Of Accern </span> </p>
              <p> <span className="large__text">We Are Distrupting FinTech </span> </p>
            </div>
          </div>
        </section>
        <section className="post__hero">
          <div className="container">
            <div className="row">
              <div className="row1 col-xs-12 col-sm-6 col-md-6">

                <article className="article1">
                  <span>History of accern</span>
                  <h2>Our desire to automate the Discovery of Early News</h2>
                  <p>
                    <span>Accern was born in late 2013 out of a desire to automate the discovery of early financial news. We wanted to eliminate the manual process of going to multiple news websites to find actionable news story. Furthermore, we wanted to eliminate the cost of clients subscribing to multiple news platforms and data feeds. By building upon this concept, we rapidly grew to covering over 300 million public news websites, blogs, social media websites such as Twitter, and public financial documents such as SEC filings. With a skilled team of PhDs and computer engineers, we have positioned ourselves at No.1 in finance news sentiment in terms of our web coverage.
                    </span>
                  </p>
                </article>
              </div>
              <div className="row2 col-xs-12 col-sm-6 col-md-6">
                <div className="row">
                  <div className="col-sm-3 col-md-3">
                    <p className="countbox"> 40 </p>
                  </div>
                  <div className="col-sm-9 col-md-9">
                    <article className="article2">
                      <h2>Billion ($) AUM Influenced </h2>
                      <div className="separator"> </div>
                      <p>
                        <span>
                          Accern primarily serves institutional investors. The majority of our current clients are quantitative hedge funds. Many small firms are coming to us because of our flexible and affordable pricing options. Large firms are coming to us due to our dedicated support, news source customization, and much more. Aside from hedge funds, our existing clients include pension and endowment funds, banks, brokerage firms, and more.
                        </span>
                      </p>
                      <button className="btn btn-lg">See Reports</button>
                    </article>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        <section className="post__hero">
          <div className="container">
            <div className="row">
              <PostHeroLead
                title='Our Supportive Partners'
                content=''
              />

              <div className="container boxgrid">
                <div className="row row1">
                  <div className="col-xs-12 col-sm-3 col-md-3 boxel ibm">
                    <GridBox
                      image='/assets/images/ibmlogo.png'
                      title='IBM Investment Solutions'
                    />
                  </div>

                  <div className="col-xs-12 col-sm-3 col-md-3 boxel">
                    <GridBox
                      image='/assets/images/bloomberg-2.png'
                      title='Bloomberg App Store'
                    />
                  </div>

                  <div className="col-xs-12 col-sm-3 col-md-3 boxel">
                    <GridBox
                      image='/assets/images/iblogo-1.png'
                      title='Interactive Brokers Marketplace'
                    />
                  </div>

                  <div className="col-xs-12 col-sm-3 col-md-3 boxel">
                    <GridBox
                      image='/assets/images/quantopianlogo.png'
                      title='Quantopian Data Store'
                    />
                  </div>
                </div>

                <div className="row row2">
                  <div className="col-xs-12 col-sm-3 col-md-3 boxel">
                    <GridBox
                      image='/assets/images/quandl.png'
                      title='Quandl Store'
                    />
                  </div>

                  <div className="col-xs-12 col-sm-3 col-md-3 boxel">
                    <GridBox
                      image='/assets/images/quantconnectlogo.png'
                      title='QuantConnect Store'
                    />
                  </div>

                  <div className="col-xs-12 col-sm-3 col-md-3 boxel">
                    <GridBox
                      image='/assets/images/stocktwits.png'
                      title='StockTwits Ad Partner'
                    />
                  </div>

                  <div className="col-xs-12 col-sm-3 col-md-3 boxel">
                    <GridBox
                      image='/assets/images/benzinga.png'
                      title='Benzinga Distribution partner'
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
