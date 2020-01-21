import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CountUp from 'react-countup'

import "../styles/style.scss"

import BannerCircle from "../components/bannerCircle"
import Contacts from "../components/Contacts"
import Team from "../components/Team"
import Select from "../components/select"
import Map from "../components/Map"

import IconArrowRightBlue from "../assets/icon-arrow-right_blue.svg"
import Logo from "../assets/logo-alter.svg"
import partnerFirst from "../images/partner-1.png"
import partnerSecond from "../images/partner-2.png"
import NewsImage from "../images/news-1.png"

export const query = graphql`
  query CasesShowQuery {
    allCasesDataJson(limit: 6) {
      edges {
        node {
          id
          src {
            publicURL
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const casesData = data.allCasesDataJson.edges;

  return(
  <Layout>
    <SEO title="Main" />

    <section id="banner" className="banner">

        <div className="banner__content container">
          <img data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="banner__logo" src={Logo} alt="Logo" />

          <h1 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="350" data-sal-easing="ease" className="banner__title">There always is an alternative way that must be built on a competense and trust.</h1>

          <h5 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease" className="banner__author">Valentin Kril</h5>

          <Link  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease" className="banner__link" to="">Request for consultation</Link>

          <BannerCircle />
        </div>
    </section>

    <Contacts />

    <section id="stats" className="stats container">
      <div data-sal="slide-right" data-sal-duration="1000" data-sal-delay="500" data-sal-easing="ease" className="stats-item">
        <h2 className="stats-item__title"><CountUp delay={2} start={0} end={5} duration={5}/></h2>
        <p className="stats-item__text">Years of legal practice</p>
      </div>
      <div data-sal="slide-right" data-sal-duration="1000" data-sal-delay="550" data-sal-easing="ease" className="stats-item">
        <h2 className="stats-item__title">><CountUp delay={2} start={0} end={120} duration={5}/></h2>
        <p className="stats-item__text">Requests per month</p>
      </div>
      <div data-sal="slide-right" data-sal-duration="1000" data-sal-delay="600" data-sal-easing="ease" className="stats-item">
        <h2 className="stats-item__title"><CountUp delay={2} start={0} end={567} duration={5}/></h2>
        <p className="stats-item__text">Successful cases</p>
      </div>
      <div data-sal="slide-right" data-sal-duration="1000" data-sal-delay="650" data-sal-easing="ease" className="stats-item">
        <h2 className="stats-item__title"><CountUp delay={2} start={0} end={1500} duration={5}/></h2>
        <p className="stats-item__text">Printed pages per month</p>
      </div>
    </section>

    <Team />

    <section id="clients" className="clients container">
      <h4 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="g-subtitle">CASES WE ARE PROUD OF</h4>

      <div className="clients__wrapper">
        {casesData.map(({ node }) =>
          <div data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="clients__item" key={node.id}>
            <img className="clients__img" src={node.src.publicURL} alt="Clients Logo" draggable="false" />
          </div>
        )}
      </div>

      <div className="g-more">
        <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease" className="g-more__text">But that is just one little part of our work</p>
        <Link data-sal="slide-right" data-sal-duration="1000" data-sal-delay="600" data-sal-easing="ease" className="g-more__button" to="/cases"><span className="g-more__span">Discover more</span></Link>
      </div>

    </section>

    <section id="news" className="news">
      <div className="news__wrapper container">
        <h4 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="g-subtitle">NEWS</h4>

        <div className="news-catalog">
          <div className="news-catalog__item"  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease">
            <div className="news-catalog__image">
              <img className="news-catalog__source" src={NewsImage} alt=""/>
            </div>

            <div className="news-catalog__content">
              <h6 className="news-catalog__title">NEWS TITLE</h6>

              <p className="news-catalog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.</p>

              <div className="news-catalog-info">
                <p className="news-catalog-info__author">Ivan Andreev, Andreev & co.</p>

                <p className="news-catalog-info__date">23.04.2019</p>
              </div>

              <div className="news-catalog__block">
                <Link className="news-catalog__link" to="/">MORE INFO</Link>
              </div>
            </div>
          </div>

          <div className="news-catalog__item"  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease">
            <div className="news-catalog__image">
              <img className="news-catalog__source" src={NewsImage} alt=""/>
            </div>

            <div className="news-catalog__content">
              <h6 className="news-catalog__title">NEWS TITLE</h6>

              <div className="news-catalog-info">
                <p className="news-catalog-info__author">Ivan Andreev, Andreev & co.</p>

                <p className="news-catalog-info__date">23.04.2019</p>
              </div>

              <div className="news-catalog__block">
                <Link className="news-catalog__link" to="/">MORE INFO</Link>
              </div>
            </div>
          </div>

          <div className="news-catalog__item"  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease">
            <div className="news-catalog__image">
              <img className="news-catalog__source" src={NewsImage} alt=""/>
            </div>

            <div className="news-catalog__content">
              <h6 className="news-catalog__title">NEWS TITLE</h6>

              <div className="news-catalog-info">
                <p className="news-catalog-info__author">Ivan Andreev, Andreev & co.</p>

                <p className="news-catalog-info__date">23.04.2019</p>
              </div>

              <div className="news-catalog__block">
                <Link className="news-catalog__link" to="/">MORE INFO</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="news-more">
          <div className="news-more__block" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease">
            <p className="news-more__text">More news on our Facebook and LinkedIn pages</p>

            <a className="news-more__link" href="https://www.linkedin.com/company/altersvcs/" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="#828282" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5563 0H1.5375C0.717188 0 0 0.590625 0 1.40156V16.4531C0 17.2687 0.717188 17.9953 1.5375 17.9953H16.5516C17.3766 17.9953 17.9953 17.2641 17.9953 16.4531V1.40156C18 0.590625 17.3766 0 16.5563 0ZM5.57812 15H3V6.98438H5.57812V15ZM4.37812 5.76562H4.35938C3.53437 5.76562 3 5.15156 3 4.38281C3 3.6 3.54844 3 4.39219 3C5.23594 3 5.75156 3.59531 5.77031 4.38281C5.77031 5.15156 5.23594 5.76562 4.37812 5.76562ZM15 15H12.4219V10.6172C12.4219 9.56719 12.0469 8.85 11.1141 8.85C10.4016 8.85 9.97969 9.33281 9.79219 9.80156C9.72187 9.97031 9.70312 10.2 9.70312 10.4344V15H7.125V6.98438H9.70312V8.1C10.0781 7.56563 10.6641 6.79688 12.0281 6.79688C13.7203 6.79688 15 7.9125 15 10.3172V15Z"/>
              </svg>

            </a>

            <a className="news-more__link" href="https://www.facebook.com/altersvcs/" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="#828282" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0062 0H0.99375C0.445312 0 0 0.445312 0 0.99375V17.0062C0 17.5547 0.445312 18 0.99375 18H9V10.875H6.84844V8.25H9V6.30938C9 3.98438 10.6125 2.71875 12.6891 2.71875C13.6828 2.71875 14.7516 2.79375 15 2.82656V5.25469H13.3453C12.2156 5.25469 12 5.78906 12 6.57656V8.25H14.6906L14.3391 10.875H12V18H17.0062C17.5547 18 18 17.5547 18 17.0062V0.99375C18 0.445312 17.5547 0 17.0062 0Z"/>
              </svg>
            </a>
          </div>

          <Link className="g-more__button" to="/blog"  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease">
            <span className="g-more__span">Discover</span>
            <svg className="g-more__svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.17 8.5H0.5V7.5H12.17H13.3756L12.5239 6.64676L7.29679 1.41032L8 0.707107L15.2929 8L8 15.2929L7.29679 14.5897L12.5239 9.35324L13.3756 8.5H12.17Z"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>

    <section id="philosophy" className="philosophy">
      <div className="philosophy__wrapper container">
        <h3  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease"   className="philosophy__title">Our philosophy</h3>
        <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="350" data-sal-easing="ease"   className="philosophy__text">ALTER is a law firm that helps with solving various legal issues.</p> 
        <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease"   className="philosophy__text">We provide legal and accounting services for businesses and individuals.</p>
        <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease"   className="philosophy__text">The ALTER team analyzes the questions of clients and partners altogether and, as a result, offers alternatives for solving issues.</p>
      </div>
    </section>

    <section id="partners" className="partners">
      <div className="partners_background">
        <h4 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="g-subtitle container">WITH SUPPORT OF OUR PARTNERS</h4>

        <div className="partners-info">
          <div className="partners-info__photo" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease">
            <img className="partners-info__source" src={partnerFirst} alt="Nagamatsu Magobei" />
          </div>

          <div className="partners-info__content">
            <h5 className="partners-info__name"  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="350" data-sal-easing="ease">Nagamatsu Magobei<hr className="partners-info__line"/></h5>

            <p className="partners-info__job"  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease">Lawer at Masterize Law Solutions,  Tokyo, Japan</p>

            <p className="partners-info__text"  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease">Tristique consequat risus, quis urna, vel. Ultrices sit mattis sed tellus dis ut diam aliquam lacus. Auctor risus viverra risus sed vitae libero lectus commodo. Integer a nulla vitae risus vulputate lobortis. Viverra semper fringilla leo viverra sed dolor purus adipiscing ac. Nulla tortor, non at dolor quis nunc elit, enim, morbi.</p>
          </div>
        </div>
      </div>

      <div className="partners--background">
        <div className="partners-info">
          <div className="partners-info__photo" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease">
            <img className="partners-info__source" src={partnerSecond} alt="Imanol Einstein" />
          </div>

          <div className="partners-info__content partners-info__content_flex">
            <div>
              <h5 className="partners-info__name" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="350" data-sal-easing="ease">Imanol Einstein<hr className="partners-info__line"/></h5>
            
              <p className="partners-info__job" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease">Lawer at Janimo solutions,  Jerusalem, Israel</p>
            
              <p className="partners-info__text" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease">Tristique consequat risus, quis urna, vel. Ultrices sit mattis sed tellus dis ut diam aliquam lacus. Auctor risus viverra risus sed vitae libero lectus commodo. Integer a nulla vitae risus vulputate lobortis. Viverra semper fringilla leo viverra sed dolor purus adipiscing ac. Nulla tortor, non at dolor quis nunc elit, enim, morbi.</p>
            </div>
          </div>
        </div>
      </div>

      
    </section>

    <section id="request" className="request">
      <div className="request__wrapper container">
        <div className="request__content">
          <h4 className="request__title" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease">Request for consultation</h4>
          <h5 className="request__subtitle" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="350" data-sal-easing="ease">Your request is private</h5>
  
          <p className="request__text" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease">5 days a week from 10:00 a.m. to 18:00 p.m</p>
  
          <form className="request-form" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease">
            <input className="request-form__input" type="text" placeholder="Name" required/>
            <input className="request-form__input" type="email" placeholder="Email" required/>
            <input className="request-form__input" type="tel" placeholder="Phone" pattern="^\+?3?8?(0\d{9})$" required/>
            
            <Select />
  
            <textarea className="request-form__textarea" placeholder="Your question" required></textarea>
  
            <input className="request-form__submit" type="submit" value="Send request"/>
          </form>
        </div>
        
        <Contacts />
      </div>
    </section>

    <Map />
  </Layout>
)}

export default IndexPage
