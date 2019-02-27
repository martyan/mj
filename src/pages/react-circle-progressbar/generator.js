import React from 'react'
import Generator from 'react-customizable-progressbar/dist/Generator'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import './index.scss'


const RCP = () => (
    <Layout>
        <SEO title="Playground / generator of react-circle-progressbar" keywords={[`react`, `circle`, `circular`, `progress`, `bar`, `component`, `generator`, `playground`]} />

        <Generator />
    </Layout>
)

export default RCP
