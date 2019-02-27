import React from 'react'
import Generator from 'react-customizable-progressbar/dist/Generator'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import './index.scss'


const RCP = () => (
    <Layout>
        <SEO title="React-circle-progressbar generator / playground" keywords={[`react`, `circle`, `circular`, `progress`, `bar`, `component`, `genarator`, `playground`]} />

        <Generator />
    </Layout>
)

export default RCP
