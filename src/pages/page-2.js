import React from 'react'
import Generator from 'react-customizable-progressbar/dist/Generator'
import Examples from 'react-customizable-progressbar/dist/Examples'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
    <Layout>
        <SEO title="Page two" />

        <Generator />
        <Examples />
    </Layout>
)

export default SecondPage
