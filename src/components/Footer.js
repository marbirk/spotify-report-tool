import React from 'react'
import { Link } from 'gatsby'
import { IoLogoGithub, IoLogoTwitter, IoLogoXing } from 'react-icons/io5'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const marginBottom = 'mb-4'
    return (
        <footer className="flex flex-col items-center mt-24 mb-16">
            <p className={`text-center ${marginBottom}`}>
                © {currentYear} Marcel Birkhahn. All rights reserved.
            </p>
            <ul className={`flex ${marginBottom}`}>
                <ListElement>
                    <ExternalLink href="mailto:m.birkhahn@posteo.de">
                        Contact
                    </ExternalLink>
                </ListElement>
                <ListElement>
                    <Link to="/imprint">Imprint</Link>
                </ListElement>
                <ListElement>
                    <Link to="/privacy">Privacy</Link>
                </ListElement>
            </ul>
            <ul className="flex text-2xl">
                <ListElement>
                    <ExternalLink
                        href="https://github.com/marbirk"
                        className="text-gray-800 dark:text-gray-200"
                    >
                        <IoLogoGithub />
                    </ExternalLink>
                </ListElement>
                <ListElement>
                    <ExternalLink
                        href="https://twitter.com/MBirkhahn"
                        className="text-gray-800 dark:text-gray-200"
                    >
                        <IoLogoTwitter />
                    </ExternalLink>
                </ListElement>
                <ListElement>
                    <ExternalLink
                        href="https://www.xing.com/profile/Marcel_Birkhahn/cv"
                        className="text-gray-800 dark:text-gray-200"
                    >
                        <IoLogoXing />
                    </ExternalLink>
                </ListElement>
            </ul>
        </footer>
    )
}

const ListElement = ({ children, ...props }) => (
    <li className="pr-2 pl-2" {...props}>
        {children}
    </li>
)

const ExternalLink = ({ children, ...props }) => (
    <a target="_blank" rel="noreferrer noopener" {...props}>
        {children}
    </a>
)

export default Footer
