import React from 'react'
import Layout from '../components/layout'
import DarkModeToggle from '../components/darkModeToggle'

export default function Home() {
    return (
        <Layout>
            <div className="text-gray-800 dark:text-gray-200">Hello world!</div>
            <DarkModeToggle />
        </Layout>
    )
}
