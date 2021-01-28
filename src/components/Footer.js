import React from 'react'
import { Link } from 'gatsby'
import { IoLogoGithub, IoLogoTwitter, IoLogoXing } from 'react-icons/io5'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const linkClasses = 'pr-2 pl-2'
    return (
        <footer className="flex flex-col items-center mt-24 mb-16">
            <div className="mb-4">
                © {currentYear} Marcel Birkhahn. All rights reserved.
            </div>
            <ul className="flex mb-4">
                <li className={linkClasses}>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className={linkClasses}>
                    <Link to="/impress">Imprint</Link>
                </li>
                <li className={linkClasses}>
                    <Link to="/privacy">Privacy</Link>
                </li>
            </ul>
            <ul className="flex">
                <li className={linkClasses}>
                    <ExternalLink href="https://github.com/marbirk">
                        <IoLogoGithub />
                    </ExternalLink>
                </li>
                <li className={linkClasses}>
                    <ExternalLink href="https://twitter.com/MBirkhahn">
                        <IoLogoTwitter />
                    </ExternalLink>
                </li>
                <li className={linkClasses}>
                    <ExternalLink href="https://www.xing.com/profile/Marcel_Birkhahn/cv">
                        <IoLogoXing />
                    </ExternalLink>
                </li>
            </ul>
        </footer>
    )
}

const ExternalLink = ({ children, ...props }) => (
    <a target="_blank" rel="noreferrer noopener" {...props}>
        {children}
    </a>
)

export default Footer
