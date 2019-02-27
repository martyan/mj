/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import ReactGA from 'react-ga'

export const onClientEntry = () => {
    ReactGA.initialize('UA-28244283-11')
    ReactGA.pageview(window.location.pathname)
}

export const onRouteUpdate = ({ location, prevLocation }) => {
    ReactGA.pageview(location.pathname)
}
