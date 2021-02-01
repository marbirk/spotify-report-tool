import React from 'react'
import Layout from '../components/Layout'

const ImprintPage = ({ location, data }) => {
    return (
        <Layout location={location}>
            <h2>Imprint</h2>
            <img
                src="https://ssl.greensta.de/wp-content/uploads/2019/12/100prozent_banner-250-white.png"
                width="250"
                height="110"
                alt="Greensta Logo"
            />
            {renderPageContent()}
        </Layout>
    )

    function renderPageContent() {
        return data.allImprintJson.edges.map(section => {
            return (
                <section>
                    {section.node.headline !== '' && (
                        <h2>{section.node.headline}</h2>
                    )}
                    {section.node.subline !== '' && (
                        <h3>{section.node.subline}</h3>
                    )}
                    {section.node.text.map(string => {
                        return <p>{string}</p>
                    })}
                </section>
            )
        })
    }
}

export const query = graphql`
    query ImprintPageQuery {
        allImprintJson {
            edges {
                node {
                    headline
                    subline
                    text
                }
            }
        }
    }
`

export default ImprintPage
