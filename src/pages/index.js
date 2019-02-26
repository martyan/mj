import React from 'react'
import { Link } from 'gatsby'
import TextLoop from 'react-text-loop'

import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.scss'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <section className="intro">
            <h1>Hey! I'm front-end developer currently living in Zlin, Czech republic.</h1>
            <h2>
                <span>My favorite stack consists of </span>
                <TextLoop
                    adjustingSpeed={250}
                    springConfig={{ stiffness: 180 }}
                    children={['React + Redux', 'HTML5 + CSS3', 'SASS', 'Babel', 'Webpack', 'REST API']}
                    className="stack"
                />
                <span>.</span>
            </h2>
        </section>

        <section>
            <Link to="/page-2">react-customizable-progressbar</Link>
            <div>linkedin - kontakt me</div>
            <div>github.com/martyan</div>
            <div>entrydo mobile</div>
        </section>
    </Layout>
)

export default IndexPage


