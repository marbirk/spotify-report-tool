import React from 'react'
import Layout from '../components/Layout'

const NetworkPage = ({ location }) => {
    const networkList = [
        {
            name: 'Dragan Vidovic',
            web: 'http://www.draganvidovic.com/',
        },
        {
            name: 'Jone Schardt',
            web: 'https://joneschardt.de/',
        },
        {
            name: 'Nils Wiere',
            web: 'https://nilswiere.de/',
        },
        {
            name: 'Andreas Rissling',
            web: 'https://www.gueteklasse-a.de/',
        },
        {
            name: 'Lars Graubner',
            web: 'https://larsgraubner.com/',
        },
        {
            name: 'Institut für persönliche Bildung',
            web: 'https://ifpb.eu/',
        },
        {
            name: 'Glücklich in 90 Minuten',
            web: 'https://www.gluecklich-in-90-minuten.com/',
        },
        {
            name: 'Bianca Gibisch',
            web: 'https://biancagibisch.de/',
        },
        {
            name: 'Naturheilpraxis Ingrid Berger',
            web: 'http://naturheilpraxis-ingrid-berger.de/',
        },
        {
            name: 'Björn Birkhahn',
            web: 'https://500px.com/p/bjoernbirkhahn?view=photos',
        },
    ]
    return (
        <Layout location={location}>
            <h2>Network</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {renderNetworkList()}
            </div>
        </Layout>
    )

    function renderNetworkList() {
        return networkList
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(contact => {
                const key = contact.name.toLowerCase().replace(/ /g, '-')
                let initials = ''
                contact.name.split(' ').forEach(element => {
                    initials += element[0]
                })
                return (
                    <a
                        key={key}
                        href={contact.web}
                        className="w-full h-32 bg-gray-300 dark:bg-gray-900 capitalize p-4"
                    >
                        {initials}
                        <div className="mt-4">
                            <p>{contact.name}</p>
                        </div>
                    </a>
                )
            })
    }
}

export default NetworkPage
