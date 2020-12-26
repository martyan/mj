import React from 'react'
import Basic from './Basic'
import './Examples.scss'

const Examples = () => {

    return (
        <>
            <div className="basic">
                <div className="link">
                    <a
                        href="https://github.com/martyan/react-surfer-slider/blob/master/examples/Basic.tsx"
                        target="_blank"
                    >
                        code <i className="fa fa-external-link-square" />
                    </a>
                </div>

                <Basic />
            </div>
        </>
    )

}

export default Examples
