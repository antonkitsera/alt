import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Contacts from "../components/contacts"

import "../styles/services.scss"

import Logo from "../assets/logo-alter-blue.svg"

import Photo from "../images/services-photo.png"

import Collapsible from 'react-collapsible';

export const query = graphql`
  query ServicesQuery {
    allServicesDataJson {
      edges {
        node {
          id
          slug
          icon
          title
        }
      }
    }
  }
`;

const ServicesPage = ({ data }) => {
  const servicesData = data.allServicesDataJson.edges;

  const useMediaQuery = (query) => {
    let mediaMatch = undefined;
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {  
      if (typeof window !== `undefined`) {
        mediaMatch = window.matchMedia(query);
        setMatches(mediaMatch.matches)
      }

      const handler = e => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });
    return matches;
  };

  const isMediaSmall = useMediaQuery('(max-width: 1140px)');
  
  return (
  <Layout>
    <SEO title="Services" />
    
    <section className="g-headline">
      <div className="container">
        <h1 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="g-headline__title">SERVICES</h1>
        
        <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className="g-headline__text">Every day we work for the confidence and success of our clients and partners</p>
      </div>
    </section>

    <section className="services">
      { isMediaSmall ? <Collapsible trigger="Our services" open="true">
        <div className="services__wrapper container">
            {servicesData.map(({ node }) => 
              <Link to={`/services/${node.slug}/`} className="services-item" key={node.id} data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease">
                  <div className="services-item__icon">
                      <img className="services-item__source" src={node.icon} alt="Logo" />
                  </div>
                  <h6 className="services-item__title">{node.title}</h6>
              </Link>
            )}
        </div>
      </Collapsible> : 

        <div className="services__wrapper container">
          {servicesData.map(({ node }) => 
            <Link to={`/services/${node.slug}/`} className="services-item" key={node.id} data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease">
                <div className="services-item__icon">
                    <img className="services-item__source" src={node.icon} alt="Logo" />
                </div>
                <h6 className="services-item__title">{node.title}</h6>
            </Link>
          )}
        </div>
      }
    </section>

    <section className="message container">
        <div className="message-content">
            <h5 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease"  className="message-content__title"><span className="message-content__title_bold">ALTER</span> is a law firm that provides services both on the territory of Ukraine and far beyond its borders.</h5>

            <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="350" data-sal-easing="ease"   className="message-content__text">Our team consists of young, energetic and progressive advocates and lawyers who are constantly evolving in different directions and spheres.</p>

            <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease"   className="message-content__text">The main pillars of the company&rsquo;s development strategy are:</p>

            <ul data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease"   className="message-content-list">
                <li className="message-content-list__item">High intelligence level and coordinated team actions;</li>
                <li className="message-content-list__item">Responsibility for words and deeds;</li>
                <li className="message-content-list__item">Trust and honesty;</li>
                <li className="message-content-list__item">Comprehensive approach;</li>
                <li className="message-content-list__item">Love and devotion to jurisprudence.</li>
            </ul>

            <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="500" data-sal-easing="ease"   className="message-content__text">These aspects are the source of inspiration, success and victories in the accompaniment of all projects.</p>

            <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="550" data-sal-easing="ease"   className="message-content__text">The main principle of our work: &ldquo;There is always an alternative path that must be built on competence and confidence&rdquo; &ndash; that is, after analyzing the customer&rsquo;s request, we comprehensively analyze his problem or question, determine alternative behavior to achieve positive results and warned of possible negative consequences.</p>

            <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="600" data-sal-easing="ease"   className="message-content__text">We specialize in providing legal and accounting services for businesses and individuals.</p>

            <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="650" data-sal-easing="ease"   className="message-content__text">As for business, the ALTER team provides a complex of services from the selection of organizational and legal forms of business activities (company registration, licensing, procurement support, accounting support, agency services) to the elimination of the company.</p>

            <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="700" data-sal-easing="ease"   className="message-content__text">In practice, individuals usually seek the services of our company to address one or more issues in one case. We try to effectively realize the vision of the client, and at the same time, to change outdated, false impressions about lawyers.</p>

            <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="750" data-sal-easing="ease"   className="message-content__text">Our goal is to finish the work effectively with a positive result for the client.</p>

            <h5 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="800" data-sal-easing="ease"   className="message-content__title message-content__title_bold">Sincerely,</h5>
            <h5 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="800" data-sal-easing="ease"   className="message-content__title message-content__title_bold">ALTER Team</h5>
        </div>

        <div className="message-aside">
            <img  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease"   className="message-aside__logo" src={Logo} alt="Alter" />

            <div data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease"   className="message-aside__photo">
                <img src={Photo} className="message-aside__source" alt="Kyiv" />
            </div>

            <Contacts />
        </div>
    </section>
  </Layout>
)}

export default ServicesPage