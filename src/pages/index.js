import React from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import TextLoop from 'react-text-loop'
import ReactGA from 'react-ga'

import SEO from '../components/seo'

import githubLogo from '../images/github.svg'
import githubLogoDark from '../images/github_dark.svg'

import entrydoLogo from '../images/entrydo.svg'
import skejtparkyLogo from '../images/skejtparky.svg'
import dailyNinjaLogo from '../images/dailyninja.svg'
import nhlgramLogo from '../images/nhlgram.svg'

import reactLogo from '../images/react.svg'
import reduxLogo from '../images/redux.svg'
import htmlLogo from '../images/html.svg'
import cssLogo from '../images/css.svg'
import sassLogo from '../images/sass.svg'
import webpackLogo from '../images/webpack.svg'
import babelLogo from '../images/babel.svg'
import restLogo from '../images/rest.svg'
import firebaseLogo from '../images/firebase.svg'
import nextLogo from '../images/nextjs.svg'
import psLogo from '../images/ps.svg'
import aiLogo from '../images/ai.svg'

import surfImg from '../images/surf.svg'
import GitHubGraph from '../components/GitHubGraph'
import './index.scss'

const IndexPage = () => (
    <div className="martinjuzl">
        <SEO
            title="Martin Juzl | Front-end developer"
            keywords={[`martin`, `juzl`, `front-end`, `developer`, `nhlgram`, `github`, `react`, `redux`]}
        />

        <section className="intro">
            <div className="container">
                <h1>
                    Hi! I'm <b>Martin</b>,{' '}
                    <span className="mobile">
                        <br />
                    </span>
                    front-end developer{' '}
                    <span className="mobile">
                        <br />
                    </span>
                    currently living{' '}
                    <span className="mobile">
                        <br />
                    </span>
                    in{' '}
                    <a
                        href="https://www.google.com/maps/place/Brno/@49.2022097,16.4378777,11z"
                        target="_blank"
                        onClick={() =>
                            ReactGA.event({
                                category: 'User',
                                action: 'Clicked on location Brno'
                            })
                        }
                    >
                        Brno <i className="fa fa-map-marker" />
                    </a>
                    .
                </h1>
            </div>
        </section>

        <Fade bottom>
            <section className="stack">
                <h2 className="text">
                    <span>My favorite technologies are</span>
                    <span className="mobile">
                        <br />
                    </span>
                    <TextLoop
                        interval={2500}
                        springConfig={{ stiffness: 90 }}
                        className="loop"
                        children={['NextJS + Firebase', 'React + Redux', 'Webpack + Babel', 'HTML5 + CSS3 (SASS)', 'Adobe PS + AI'/*, 'REST API'*/]}
                    />
                </h2>
                <h2 className="logos">
                    <TextLoop interval={2500} springConfig={{ stiffness: 90 }} className="loop">
                        <div className="logo">
                            <img src={nextLogo} alt="NextJS" />
                            <img src={firebaseLogo} alt="Firebase" />
                        </div>
                        <div className="logo">
                            <img src={reactLogo} alt="React" />
                            <img src={reduxLogo} alt="Redux" />
                        </div>
                        <div className="logo">
                            <img src={webpackLogo} alt="Webpack" />
                            <img src={babelLogo} alt="Babel" />
                        </div>
                        <div className="logo">
                            <img src={htmlLogo} alt="HTML5" />
                            <img src={cssLogo} alt="CSS3" />
                            <img src={sassLogo} alt="SASS" />
                        </div>
                        <div className="logo">
                            <img src={psLogo} alt="Adobe Photoshop" />
                            <img src={aiLogo} alt="Adobe Illustrator" />
                        </div>
                        {/*<div className="logo">*/}
                            {/*<img src={restLogo} alt="REST API" />*/}
                        {/*</div>*/}
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
                                onClick={() =>
                                    ReactGA.event({
                                        category: 'User',
                                        action: 'Clicked on GitHub profile'
                                    })
                                }
                            >
                                github.com/<b>martyan</b>
                            </a>
                        </h2>

                        <GitHubGraph />

                        <p>
                            <a
                                href="https://github.com/martyan/react-customizable-progressbar"
                                target="_blank"
                                onClick={() =>
                                    ReactGA.event({
                                        category: 'User',
                                        action: 'Clicked on react-customizable-progressbar'
                                    })
                                }
                            >
                                react-customizable-progressbar
                            </a>{' '}
                            <span className="middot">&middot;</span>{' '}
                            check{' '}
                            <Link
                                to="/react-customizable-progressbar"
                                onClick={() =>
                                    ReactGA.event({
                                        category: 'User',
                                        action: 'Clicked on react-customizable-progressbar examples'
                                    })
                                }
                            >
                                examples
                            </Link>{' '}
                            or play around{' '}
                            <span className="mobile">
                                <br />
                            </span>{' '}
                            with{' '}
                            <Link
                                to="/react-customizable-progressbar/generator"
                                onClick={() =>
                                    ReactGA.event({
                                        category: 'User',
                                        action: 'Clicked on react-customizable-progressbar generator'
                                    })
                                }
                            >
                                generator
                            </Link>
                        </p>

                        <p>
                            <a
                                href="https://github.com/martyan/react-surfer-slider"
                                target="_blank"
                                onClick={() =>
                                    ReactGA.event({
                                        category: 'User',
                                        action: 'Clicked on react-surfer-slider'
                                    })
                                }
                            >
                                react-surfer-slider
                            </a>{' '}
                            <span className="middot">&middot;</span>{' '}
                            see{' '}
                            <Link
                                to="/react-surfer-slider"
                                onClick={() =>
                                    ReactGA.event({
                                        category: 'User',
                                        action: 'Clicked on react-surfer-slider examples'
                                    })
                                }
                            >
                                examples
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </Fade>

        <Fade bottom>
            <section className="skejtparky">
                <a
                    className="logo"
                    href="https://skejtparky.cz"
                    target="_blank"
                    onClick={() =>
                        ReactGA.event({
                            category: 'User',
                            action: 'Clicked on Skejtparky'
                        })
                    }
                >
                    <img src={skejtparkyLogo} alt="Skejtparky" />
                </a>
                <div className="desc">
                    <p>
                        <span>Find skateparks, pumptracks and street spots in your area</span>
                        {/*<a
                            className="github"
                            href="https://github.com/martyan/skejtparky"
                            target="_blank"
                            onClick={() =>
                                ReactGA.event({
                                    category: 'User',
                                    action: 'Clicked on NHLgram github'
                                })
                            }
                        >
                            <img src={githubLogoDark} alt="GitHub" />
                        </a>*/}
                    </p>
                </div>
            </section>
        </Fade>

        <Fade bottom>
            <section className="daily-ninja">
                <div className="inner">
                    <a
                        className="logo"
                        href="https://daily-ninja.com"
                        target="_blank"
                        onClick={() =>
                            ReactGA.event({
                                category: 'User',
                                action: 'Clicked on Daily Ninja'
                            })
                        }
                    >
                        <img src={dailyNinjaLogo} alt="Daily Ninja" />
                    </a>
                    <div className="desc">
                        <p>Fresh slices of news every day</p>
                    </div>
                </div>
            </section>
        </Fade>

        <Fade bottom>
            <section className="nhlgram">
                <a
                    className="logo"
                    href="https://nhlgram.com"
                    target="_blank"
                    onClick={() =>
                        ReactGA.event({
                            category: 'User',
                            action: 'Clicked on NHLgram'
                        })
                    }
                >
                    <img src={nhlgramLogo} alt="NHLgram" />
                </a>
                <div className="desc">
                    <p>
                        <a href="https://nhlgram.com">
                            <b>NHLgram</b>
                        </a>
                        <br />
                        <span>Video feed of current NHL season</span>
                        <a
                            className="github"
                            href="https://github.com/martyan/nhlgram"
                            target="_blank"
                            onClick={() =>
                                ReactGA.event({
                                    category: 'User',
                                    action: 'Clicked on NHLgram github'
                                })
                            }
                        >
                            <img src={githubLogoDark} alt="GitHub" />
                        </a>
                    </p>
                </div>
            </section>
        </Fade>

        {/*<Fade bottom>
            <section className="entrydo">
                <a
                    className="logo"
                    href="https://entry.do"
                    target="_blank"
                    onClick={() =>
                        ReactGA.event({
                            category: 'User',
                            action: 'Clicked on Entrydo'
                        })
                    }
                >
                    <img src={entrydoLogo} alt="Entrydo" />
                </a>
                <div className="desc">
                    <p>
                        <b>Entry management system</b>
                        <span className="mobile">
                            <br />
                        </span>{' '}
                        for <b>smooth check-in</b> experience
                        <span className="mobile">
                            <br />
                        </span>{' '}
                        at <b>your event</b>.
                    </p>
                </div>
            </section>
        </Fade>*/}

        <Fade bottom>
            <section className="get-in-touch">
                <div className="linked-in">
                    <div className="text">
                        If you want to get in touch or just say Hi please send me a message on my
                    </div>
                    <button className="cta">
                        <a
                            href="https://www.linkedin.com/in/mjuzl/"
                            target="_blank"
                            onClick={() =>
                                ReactGA.event({
                                    category: 'User',
                                    action: 'Clicked on Linked-in profile'
                                })
                            }
                        >
                            <i className="fa fa-linkedin" /> Linked-in profile
                        </a>
                    </button>
                </div>

                <div className="epilogue">
                    <div className="board">
                        <img src={surfImg} alt="Surf" />
                    </div>

                    <div className="author">
                        {/*<p>
                            Coded by{' '}
                            <a href="/" className="mj">
                                <img src={mj} alt="mj" />
                            </a>
                        </p>*/}
                        {/*<p className="code">
                            see the{' '}
                            <a
                                href="https://github.com/martyan/martinjuzl.com"
                                target="_blank"
                                onClick={() =>
                                    ReactGA.event({
                                        category: 'User',
                                        action: 'Clicked on page source code'
                                    })
                                }
                            >
                                source code
                            </a>{' '}
                            if interested
                        </p>*/}
                    </div>
                </div>
            </section>
        </Fade>
    </div>
)

export default IndexPage
