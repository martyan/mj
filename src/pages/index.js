import React from 'react'
import { Link } from 'gatsby'
import TextLoop from 'react-text-loop'

import Layout from '../components/layout'
import SEO from '../components/seo'

import githubLogo from '../images/github.svg'
import entrydoLogo from '../images/entrydo.svg'
import surfImg from '../images/surf.svg'
import './index.scss'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <section className="intro">
            <div className="container">
                <h1>Hi!&nbsp;I'm&nbsp;<b>Martin</b>, front-end&nbsp;developer currently&nbsp;living&nbsp;in <a href="https://www.google.com/maps/place/Zlin/@49.2311334,17.6064672,12z" target="_blank">Zlin&nbsp;<i className="fa fa-map-marker"></i></a>.</h1>
            </div>
        </section>

        <section className="stack">
            <div className="container">
                <h2>
                    <span>My favorite stack consists of </span>
                    <TextLoop
                        interval={2000}
                        adjustingSpeed={250}
                        springConfig={{ stiffness: 180 }}
                        children={['React + Redux', 'HTML5 + CSS3 (SASS)', 'Webpack + Babel', 'REST API']}
                        className="loop"
                    />
                    <span>.</span>
                </h2>
            </div>
        </section>

        <section className="open-source">
            <div className="container">
                <div className="inner">
                    <div className="logo">
                        <img src={githubLogo} alt="GitHub" />
                    </div>
                    <div className="desc">
                        <h2><a href="https://github.com/martyan" target="_blank">github.com/<b>martyan</b></a></h2>
                        <p>Check <b>Examples</b> or play around with <b>generator</b> of <b>react-customizable-progressbar</b></p>
                    </div>
                </div>
            </div>
        </section>

        <section className="entrydo">
                <div className="logo">
                    <img src={entrydoLogo} alt="Entrydo" />
                </div>
                <div className="desc">
                    <p><b>Entry management system</b> for <b>smooth check-in</b> experience at <b>your event</b>.</p>
                </div>
        </section>

        <section>
            <div>If you want to get in touch or just say hi please send me a message on <i className="fa fa-linkedin"></i> Linked-in</div>
            <div>Check source code of this page</div>

            <img src={surfImg} alt="Surf"/>
        </section>
    </Layout>
)

export default IndexPage


