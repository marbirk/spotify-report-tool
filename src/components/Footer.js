import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <div>© {currentYear} Marcel Birkhahn. All rights reserved.</div>
            <ul>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/impress">Impress</Link>
                </li>
                <li>
                    <Link to="/privacy">Privacy</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://github.com/marbirk">Github</a>
                </li>
                <li>
                    <a href="https://twitter.com/MBirkhahn">Twitter</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/marcelbirkhahn/">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </footer>
    )
}
