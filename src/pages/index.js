import React from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import TextLoop from 'react-text-loop'
import ReactGA from 'react-ga'

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
import restLogo from '../images/rest.svg'

import surfImg from '../images/surf.svg'
import mj from '../images/mj.svg'
import './index.scss'

const IndexPage = () => (
    <Layout>
        <SEO title="Martin Juzl" keywords={[`martin`, `juzl`, `front-end`, `developer`, `entrydo`, `github`, `react`, `redux`]} />

        <section className="intro">
            <div className="container">
                <h1>
                    Hi! I'm <b>Martin</b>,{' '}
                    <span className="mobile"><br /></span> front-end developer currently living <span className="mobile"><br /></span>in{' '}
                    <a
                        href="https://www.google.com/maps/place/Zlin/@49.2311334,17.6064672,12z"
                        target="_blank"
                        onClick={() => ReactGA.event({category: 'User', action: 'Clicked on location Zlin'})}
                    >Zlin <i className="fa fa-map-marker"></i></a>.
                </h1>
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
                        <div className="logo"><img src={restLogo} alt="REST API" /></div>
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
                        <h2>
                            <a
                                href="https://github.com/martyan"
                                target="_blank"
                                onClick={() => ReactGA.event({category: 'User', action: 'Clicked on GitHub profile'})}
                            >github.com/<b>martyan</b></a>
                        </h2>
                        <p>
                            Check{' '}
                            <Link
                                to="/react-circle-progressbar"
                                onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-circle-progressbar examples'})}
                            >Examples</Link>{' '}
                            or play around <span className="mobile"><br /></span>{' '}
                            with{' '}
                            <Link
                                to="/react-circle-progressbar/generator"
                                onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-circle-progressbar generator'})}
                            >Generator</Link>{' '}
                            of <span className="mobile"><br /></span>{' '}
                            <a
                                href="https://github.com/martyan/react-circle-progressbar"
                                target="_blank"
                                onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-circle-progressbar'})}
                            >react-circle-progressbar</a>
                        </p>
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
                    <p>
                        <b>Entry management system</b><span className="mobile"><br /></span>{' '}
                        for <b>smooth check-in</b> experience<span className="mobile"><br /></span>{' '}
                        at <b>your event</b>.
                    </p>
                </div>
            </section>
        </Fade>

        <Fade bottom>
            <section className="footer">
                <div className="get-in-touch">
                    <div className="text">If you want to get in touch or just say Hi please send me a message on my</div>
                    <button className="cta">
                        <a
                            href="https://www.linkedin.com/in/mjuzl/"
                            target="_blank"
                            onClick={() => ReactGA.event({category: 'User', action: 'Clicked on Linked-in profile'})}
                        ><i className="fa fa-linkedin"></i> Linked-in profile</a>
                    </button>
                </div>

                <div className="epilogue">
                    <div className="board">
                        <img src={surfImg} alt="Surf"/>
                    </div>

                    <div className="author">
                        <p>Coded by <a href="/" className="mj" ><img src={mj} alt="mj" /></a></p>
                        <p className="code">
                            see the{' '}
                            <a
                                href="https://github.com/martyan/mj"
                                target="_blank"
                                onClick={() => ReactGA.event({category: 'User', action: 'Clicked on page source code'})}
                            >code</a>{' '}
                            if interested
                        </p>
                    </div>
                </div>
            </section>
        </Fade>
    </Layout>
)

export default IndexPage


