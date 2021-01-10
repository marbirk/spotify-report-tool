import React from 'react'
import Layout from '../components/Layout'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Home() {
    return (
        <Layout>
            <div className="text-gray-800 dark:text-gray-200">Hello world!</div>
        </Layout>
    )
}
