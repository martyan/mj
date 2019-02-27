import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import logo from '../images/mj.svg'
import './layout.scss'
import surfImg from '../images/surf.svg'

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <main>{children}</main>
                <footer>

                </footer>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout



// const a = () => (
//     <div className="entrydo">
//         <header>
//             <div className="container inner">
//                 <a href="https://entry.do" className="logo"><img src="/img/logo_white.svg" alt="Entrydo logo"></a>
//                 <div className="menu"><a href="#">Product</a><a href="#">Features</a><a href="#">Pricing</a>
//                     <div className="login"><a href="https://entry.do">Sign in</a></div>
//                 </div>
//             </div>
//         </header>
//         <main>
//             <section className="intro">
//                 <div className="container">
//                     <div className="deco">
//                         <div className="circle c1 bright"></div>
//                         <div className="circle c2 bright"></div>
//                         <div className="circle c3 dark"></div>
//                         <div className="phone">
//                             <div className="phone-body"><i className="fa fa-mobile"></i></div>
//                             <div className="phone-display">
//                                 <div className="phone-inner">
//                                     <div className="display-bg"></div>
//                                     <div className="display-qr"><i className="fa fa-qrcode"></i></div>
//                                     <div className="display-capture"><img src="/img/capture.svg" alt="QR čtečka"></div>
//                                     <div className="display-tick"><i className="fa fa-check"></i></div>
//                                     <div className="display-user"><i className="fa fa-user"></i></div>
//                                     <div className="display-detail"><i className="fa fa-th-large"></i></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <h1>Dopřejte hostům výjimečný zážitek ze vstupu na Váš event</h1>
//                     <div className="cta">
//                         <button className="btn">Ozvěte se nám</button>
//                     </div>
//                     <h2>Zvýšení produktivity chytrým systémem, prémiové služby registrace, široká paleta IT nástrojů
//                         usnadňujících práci, excelentní podpora</h2></div>
//             </section>
//             <section className="why-entrydo">
//                 <div className="container">
//                     <div className="deco">
//                         <div className="circle c4 green"></div>
//                         <div className="circle c5 bright"></div>
//                         <div className="circle c6 green"></div>
//                     </div>
//                     <div className="claim"><h3>Spolehněte se na experty v odbavení</h3><h4>Populární akce vylepšujeme o
//                         zážitek z bleskového vstupu</h4></div>
//                     <div className="points">
//                         <div className="point">
//                             <div className="imagery users"><i className="fa fa-users"></i></div>
//                             <h5>Registrace hostů jako zážitek</h5><p>První dojem z eventu je velmi důležitý. Soustředíme
//                             se na to, aby registrace na událost proběhla bez zádrhelů a dodala návštěvníkům i
//                             organizátorům vždy něco navíc.</p></div>
//                         <div className="point">
//                             <div className="imagery bulb"><i className="fa fa-lightbulb-o"></i></div>
//                             <h5>Kreativita a propojitelnost</h5><p>Na efektivitu práce klademe velký důraz a podporujeme
//                             kreativitu produkčních a event managerů celou řadou šikovných nástrojů, aby mohli vytvořit
//                             opravdu excelentní událost.</p></div>
//                         <div className="point">
//                             <div className="imagery chart"><i className="fa fa-pie-chart"></i></div>
//                             <h5>Žádné fronty a precizní statistiky</h5><p>Hrdě rušíme fronty na populárních událostech.
//                             Čím větší událost, tím viditelnější výsledek. Stanovíme si KPI v sekundách na odbavení hosta
//                             a zajistíme hladký průběh registrace. Dodáme i přehledné a detailní statistiky eventu pro
//                             vaše ještě lepší budoucí rozhodování.</p></div>
//                     </div>
//                 </div>
//             </section>
//             <section className="get-in-touch">
//                 <div className="container">
//                     <div className="deco">
//                         <div className="circle c7 bright"></div>
//                         <div className="circle c8 green"></div>
//                         <div className="circle c9 bright"></div>
//                     </div>
//                     <form className="card">
//                         <div className="form-title"><h4>Pořádáte event?</h4><h5>Řekněte nám o něm něco a my se Vám
//                             ozveme s nabídkou.</h5></div>
//                         <div className="inner">
//                             <div className="text-input">
//                                 <label className=""><span className="label">Jméno </span><input type="text" value=""><span className="line-color"></span><span className="line-grey"></span></label>
//                             </div>
//                             <div className="text-input">
//                                 <label className=""><span className="label">E-mail </span><input type="text" value=""><span className="line-color"></span><span className="line-grey"></span></label>
//                             </div>
//                             <div className="text-input">
//                                 <label className=""><span className="label">Telefon </span><input type="text" value=""><span className="line-color"></span><span className="line-grey"></span></label>
//                             </div>
//                             <div className="cta">
//                                 <button className="btn">Odeslat</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </section>
//             <section className="references">
//                 <div className="deco">
//                     <div className="circle c9 green"></div>
//                     <div className="circle c5 dark"></div>
//                     <div className="circle c2 green"></div>
//                 </div>
//                 <div className="container"><h4>Reference</h4>
//                     <div className="inner">
//                         <a target="_blank" rel="noopener noreferrer" href="http://www.applemuseum.com/cs/"><img src="/img/references/apple-museum.png" alt="Apple Museum"></a><a target="_blank" rel="noopener noreferrer" href="https://ecommerce-expo.cz/"><img src="/img/references/ecommerce.png" alt="Ecommerce EXPO Prague"></a><a target="_blank" rel="noopener noreferrer" href="http://money-expo.cz/"><img src="/img/references/money-expo.png" alt="Money Expo"></a><a target="_blank" rel="noopener noreferrer" href="https://www.resite.org/"><img src="/img/references/resite.png" alt="reSITE"></a><a target="_blank" rel="noopener noreferrer" href="https://www.sak-studenka.cz/"><img src="/img/references/sak.png" alt="SAK"></a><a target="_blank" rel="noopener noreferrer" href="https://www.swcsummit.com/"><img src="/img/references/swc.png" alt="Startup World Cup"></a><a target="_blank" rel="noopener noreferrer" href="https://www.swcsummit.com/"><img src="/img/references/swcs.png" alt="Startup World Cup &amp; Summit"></a><a target="_blank" rel="noopener noreferrer" href="http://dk-akord.cz/"><img src="/img/references/akord.png" alt="Akord"></a>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     </div>
// )
