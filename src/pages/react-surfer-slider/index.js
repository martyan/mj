import React from 'react'
import ReactGA from 'react-ga'
import Footer from '../../components/Footer'
import Examples from '../../components/RSS/Examples'
import SEO from '../../components/seo'
import './index.scss'


const RSS = () => (
    <div className="rss-examples">

        <SEO
            title="Examples of react-surfer-slider"
            keywords={[`react`, `surfer`, `photo`, `slider`, `component`, `gallery`, `examples`]}
            description="Circular progress bar component for React"
        />

        <div className="header">
            <p>Example usage of{' '}
                <a
                    href="https://github.com/martyan/react-surfer-slider"
                    target="_blank"
                    onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-surfer-slider'})}
                >react-surfer-slider</a>
            </p>
        </div>

        <Examples />

        <Footer />

    </div>
)

export default RSS
