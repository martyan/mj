import React, { useEffect, useRef } from 'react'
import ReactGA from 'react-ga'

const proxy = 'https://urlreq.appspot.com/req?method=GET&url='
const url = proxy + 'https://github.com/martyan'

const GitHubGraph = () => {

    const graphRef = useRef(null)

    const onClick = () => {
        ReactGA.event({
            category: 'User',
            action: 'Clicked on GitHub graph'
        })
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.text())
            .then(body => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = body
                const graph = wrapper.querySelector('svg.js-calendar-graph-svg')
                graph.setAttribute('version', '1.1')
                graph.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
                graph.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')
                graph.setAttribute('xml:space', 'preserve')
                graphRef.current.innerHTML = graph.outerHTML
            })
    }, [])

    return <a onClick={onClick} href="https://github.com/martyan" target="_blank" rel="noopener" className="github-graph" ref={graphRef}></a>

}

export default GitHubGraph
