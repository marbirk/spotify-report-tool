import React from 'react'
import { Link } from 'gatsby'
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <div>© {currentYear} Marcel Birkhahn. All rights reserved.</div>
            <ul>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/impress">Imprint</Link>
                </li>
                <li>
                    <Link to="/privacy">Privacy</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <ExternalLink href="https://github.com/marbirk">
                        <IoLogoGithub />
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://twitter.com/MBirkhahn">
                        <IoLogoTwitter />
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.linkedin.com/in/marcelbirkhahn/">
                        <IoLogoLinkedin />
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
