import React from 'react'
import Link from '../link/Link'
import { IoLogoGithub, IoLogoTwitter, IoLogoXing } from 'react-icons/io5'
import ListElement from '../listElement/ListElement'
import List from '../list/List'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const marginBottom = 'mb-4'
    const iconClasses = 'text-gray-800 dark:text-gray-200'
    return (
        <footer
            className="flex flex-col items-center mt-24 mb-16"
            data-testid="footer"
        >
            <p className={`text-center ${marginBottom}`}>
                © {currentYear} Marcel Birkhahn. Alle Rechte vorbehalten.
            </p>
            <List className={`flex ${marginBottom}`}>
                <ListElement>
                    <Link to="mailto:m.birkhahn@posteo.de">Kontakt</Link>
                </ListElement>
                <ListElement>
                    <Link to="/imprint">Impressum</Link>
                </ListElement>
                <ListElement>
                    <Link to="/privacy">Datenschutz</Link>
                </ListElement>
            </List>
            <List className="flex text-2xl">
                <ListElement>
                    <Link to="https://github.com/marbirk">
                        <IoLogoGithub className={iconClasses} />
                    </Link>
                </ListElement>
                <ListElement>
                    <Link to="https://twitter.com/MBirkhahn">
                        <IoLogoTwitter className={iconClasses} />
                    </Link>
                </ListElement>
                <ListElement>
                    <Link to="https://www.xing.com/profile/Marcel_Birkhahn/cv">
                        <IoLogoXing className={iconClasses} />
                    </Link>
                </ListElement>
            </List>
        </footer>
    )
}

export default Footer
