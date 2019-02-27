import React from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import TextLoop from 'react-text-loop'

import Layout from '../components/layout'
import SEO from '../components/seo'

import githubLogo from '../images/github.svg'
import entrydoLogo from '../images/entrydo.svg'
import reactLogo from '../images/react.svg'
import reduxLogo from '../images/redux.svg'
import htmlLogo from '../images/html.svg'
import cssLogo from '../images/css.svg'
import sassLogo from '../images/sass.svg'
import webpackLogo from '../images/webpack.svg'
import babelLogo from '../images/babel.svg'

import surfImg from '../images/surf.svg'
import mj from '../images/mj.svg'
import './index.scss'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <section className="intro">
            <div className="container">
                <h1>Hi!&nbsp;I'm&nbsp;<b>Martin</b>, front-end&nbsp;developer currently&nbsp;living&nbsp;in <a href="https://www.google.com/maps/place/Zlin/@49.2311334,17.6064672,12z" target="_blank">Zlin&nbsp;<i className="fa fa-map-marker"></i></a>.</h1>
            </div>
        </section>

        <Fade bottom>
            <section className="stack">
                <h2 className="text">
                    <span>My favorite stack consists of</span>
                    <TextLoop
                        interval={2500}
                        springConfig={{ stiffness: 90 }}
                        className="loop"
                        children={['React + Redux', 'HTML5 + CSS3 (SASS)', 'Webpack + Babel', 'REST API']}
                    />
                </h2>
                <h2 className="logos">
                    <TextLoop
                        interval={2500}
                        springConfig={{ stiffness: 90 }}
                        className="loop"
                    >
                        <div className="logo"><img src={reactLogo} alt="React" /><img src={reduxLogo} alt="Redux" /></div>
                        <div className="logo"><img src={htmlLogo} alt="HTML5" /><img src={cssLogo} alt="CSS3" /><img src={sassLogo} alt="SASS" /></div>
                        <div className="logo"><img src={webpackLogo} alt="Webpack" /><img src={babelLogo} alt="Babel" /></div>
                        <div className="logo"></div>
                    </TextLoop>
                </h2>
            </section>
        </Fade>

        <Fade bottom>
            <section className="open-source">
                <div className="inner">
                    <div className="logo">
                        <img src={githubLogo} alt="GitHub" />
                    </div>
                    <div className="desc">
                        <h2><a href="https://github.com/martyan" target="_blank">github.com/<b>martyan</b></a></h2>
                        <p>Check <b>Examples</b> or play around with <b>generator</b> of <b>react-customizable-progressbar</b></p>
                    </div>
                </div>
            </section>
        </Fade>

        <Fade bottom>
            <section className="entrydo">
                <div className="logo">
                    <img src={entrydoLogo} alt="Entrydo" />
                </div>
                <div className="desc">
                    <p><b>Entry management system</b> for <b>smooth check-in</b> experience at <b>your event</b>.</p>
                </div>
            </section>
        </Fade>

        <Fade bottom>
            <section className="footer">
                <div className="get-in-touch">
                    <div className="text">If you want to get in touch or just say Hi please send me a message on my</div>
                    <button className="cta">
                        <a href="https://www.linkedin.com/in/mjuzl/" target="_blank">
                            <i className="fa fa-linkedin"></i> Linked-in profile
                        </a>
                    </button>
                </div>

                <div className="epilogue">
                    <div className="board">
                        <img src={surfImg} alt="Surf"/>
                    </div>

                    <div className="author">
                        <p>Coded by <a href="/" className="mj"><img src={mj} alt="mj" /></a></p>
                        <p className="code">see the <a href="https://github.com/martyan/mj" target="_blank">code</a> if interested</p>
                    </div>
                </div>
            </section>
        </Fade>
    </Layout>
)

export default IndexPage


