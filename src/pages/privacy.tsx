import React from 'react'
import Layout from '../components/Layout'
import { PageProps } from 'gatsby'

const PrivacyPage = (props: PageProps) => {
    return (
        <Layout location={props.location}>
            <h2>Privacy</h2>
        </Layout>
    )
}

export default PrivacyPage
