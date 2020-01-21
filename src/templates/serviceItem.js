import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import "./service-item.scss"

export const query = graphql `
    query ServiceItemQuery($slug: String!) {
        servicesDataJson(slug: {eq: $slug}) {
            id
            slug
            icon
            title
            text
        }
    }
    
`;

export default ({ data }) => {
    const service = data.servicesDataJson;

    return (
        <Layout>
            <section className="g-headline">
                <div className="container">
                    <h1 data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease"  className="g-headline__title"><img className="g-headline__icon" src={service.icon} alt="Service Icon"/>{service.title}</h1>
                    <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease"  className="g-headline__text">Short description, with large sense</p>
                </div>
            </section>

            <section className="service container">
                <p data-sal="slide-right" data-sal-duration="1000" data-sal-delay="450" data-sal-easing="ease"  className="service__text">{service.text}</p>
            </section>
        </Layout>
    )
}