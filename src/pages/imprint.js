import React from 'react'
import Layout from '../components/Layout'

const ImprintPage = ({ location }) => {
    return (
        <Layout location={location}>
            <h2>Imprint</h2>
            <img
                src="https://ssl.greensta.de/wp-content/uploads/2019/12/100prozent_banner-250-white.png"
                width="250"
                height="110"
                alt="Greensta Logo"
            />
        </Layout>
    )
}

export default ImprintPage
