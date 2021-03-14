import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'gatsby'

const NotFoundPage = () => {
    return (
        <Layout>
            <section>
                <h2>Page not found!</h2>
                <p>This is not the page you are looking for.</p>
                <p>
                    <Link to="/">Return to home &gt;&gt;</Link>
                </p>
            </section>
        </Layout>
    )
}

export default NotFoundPage
