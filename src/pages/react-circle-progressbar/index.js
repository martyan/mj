import React from 'react'
import ReactGA from 'react-ga'
import Examples from 'react-customizable-progressbar/dist/Examples'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import './index.scss'


const RCP = () => (
    <Layout>
        <SEO title="Examples of react-circle-progressbar" keywords={[`react`, `circle`, `circular`, `progress`, `bar`, `component`, `examples`]} />

        <div className="rcp-examples">
            <div className="header">
                <p>Example usage of{' '}
                    <a
                        href="https://github.com/martyan/react-circle-progressbar"
                        target="_blank"
                        onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-circle-progressbar'})}
                    >react-circle-progressbar</a>
                </p>
                <p>Try{' '}
                    <a
                        href="/react-circle-progressbar/generator"
                        onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-circle-progressbar generator'})}
                    >generator</a>{' '}
                    and check what it can do
                </p>
            </div>

            <Examples />
        </div>
    </Layout>
)

export default RCP
