import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { getFeature } from "../Redux/ActionCreators/FeatureActionCreators"
export default function Feature() {
    let FeatureStateData = useSelector(state => state.FeatureStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            dispatch(getFeature())
        })()
    }, [FeatureStateData.length])
    return (
        <>
            <section id="features" className="sp inline-style-054">
                <div className="container">
                    <div className="text-center mb-5 rv">
                        <span className="slbl">Features</span>
                        <h2 className="stitle">Everything you need to <span className="gt">automate at scale</span></h2>
                        <p className="ssub mx-auto">Powerful AI tools for teams that want to move faster and grow without
                            limits.</p>
                    </div>
                    <div className="row g-3">

                        {FeatureStateData.filter(x => x.status).map((item, index) => {
                            return <div className="col-md-4 rv" key={index}>
                                <div className="gc p-4 h-100">
                                    <div className="ftico">
                                        <span className='fs-1' dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    </div>
                                    <h3 className="fs-5 fw-semibold mb-2">{item.name}</h3>
                                    <p className="inline-style-047">{item.shortDescription}</p>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}
