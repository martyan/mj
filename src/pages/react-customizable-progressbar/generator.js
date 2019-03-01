import React from 'react'
import ReactGA from 'react-ga'
import Generator from '../../components/Generator'
import Footer from '../../components/Footer'

import SEO from '../../components/seo'

import './generator.scss'


const RCP = () => (
    <div className="rcp-generator">

        <SEO title="Playground / generator of react-customizable-progressbar" keywords={[`react`, `circular`, `radial`, `progress`, `bar`, `component`, `generator`, `playground`]} />

        <div className="header">
            <p>Generator of {' '}
                <a
                    href="https://github.com/martyan/react-customizable-progressbar"
                    target="_blank"
                    onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-customizable-progressbar'})}
                >react-customizable-progressbar</a>
            </p>
            <p>See{' '}
                <a
                    href="/react-customizable-progressbar"
                    onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-customizable-progressbar examples'})}
                >examples</a>
            </p>
        </div>

        <Generator />

        <Footer />

    </div>
)

export default RCP
