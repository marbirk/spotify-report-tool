import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const HomePage = ({ data }) => {
    return (
        <Layout>
            <div>
                Frontend Engineer (B.Sc.) oder Software Engineer (B.Sc.),
                Working for Steinberg, Master student at TH Lübeck, last
                project: Personas in e-commerce - evaluation of the data-driven
                persona method as a basis for product recommendations in online
                retail for customers with musical interest, study focus: Modern
                and clean software development & Data Science, network page?
            </div>
            {data.site.siteMetadata.description}
        </Layout>
    )
}

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                description
            }
        }
    }
`

export default HomePage
