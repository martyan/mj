import React from 'react'
import ReactGA from 'react-ga'
// import Examples from 'react-customizable-progressbar/dist/Examples'

import SEO from '../../components/seo'

import './index.scss'


const RCP = () => (
    <div className="rcp-examples">

        <SEO title="Examples of react-customizable-progressbar" keywords={[`react`, `circle`, `circular`, `progress`, `bar`, `component`, `examples`]} />

        <div className="header">
            <p>Example usage of{' '}
                <a
                    href="https://github.com/martyan/react-customizable-progressbar"
                    target="_blank"
                    onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-customizable-progressbar'})}
                >react-customizable-progressbar</a>
            </p>
            <p>Try{' '}
                <a
                    href="/react-customizable-progressbar/generator"
                    onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-customizable-progressbar generator'})}
                >generator</a>{' '}
                and check what it can do
            </p>
        </div>

        {/*<Examples />*/}

    </div>
)

export default RCP
