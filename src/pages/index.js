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
            <h1>Hi!&nbsp;I'm&nbsp;<b>Martin</b>, front-end&nbsp;developer currently&nbsp;living&nbsp;in <a href="https://www.google.com/maps/place/Zlin/@49.2311334,17.6064672,12z" target="_blank">Zlin&nbsp;<i className="fa fa-map-marker"></i></a>.</h1>
        </section>

        <section>
            <h2>
                <span>My favorite stack consists of </span>
                <TextLoop
                    interval={2000}
                    adjustingSpeed={250}
                    springConfig={{ stiffness: 180 }}
                    children={['React + Redux', 'HTML5 + CSS3 (SASS)', 'Webpack + Babel', 'REST API']}
                    className="stack"
                />
                <span>.</span>
            </h2>
        </section>

        <section>
            <Link to="/page-2">react-customizable-progressbar</Link>
            <div>If you want to get in touch or just to say hi please send me a message on <i className="fa fa-linkedin"></i> Linked-in</div>
            <div><i className="fa fa-github"></i> github.com/martyan</div>
            <div>entrydo mobile</div>
        </section>
    </Layout>
)

export default IndexPage


