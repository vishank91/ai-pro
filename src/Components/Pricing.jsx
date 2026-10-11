import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { getPricing } from "../Redux/ActionCreators/PricingActionCreators"

export default function Pricing() {
    let PricingStateData = useSelector(state => state.PricingStateData)
        let dispatch = useDispatch()
    
        useEffect(() => {
            (() => {
                dispatch(getPricing())
            })()
        }, [PricingStateData.length])
    return (
        <>
            <section id="pricing" className="sp position-relative inline-style-054">
                <div className="aur aur-a inline-style-070"></div>
                <div className="container position-relative inline-style-044">
                    <div className="text-center mb-5 rv">
                        <span className="slbl">Pricing</span>
                        <h2 className="stitle">Simple, <span className="gt">transparent pricing</span></h2>
                        <p className="ssub mx-auto">Start for free, scale as you grow. No hidden fees, no surprises.</p>
                    </div>
                    <div className="row g-4 align-items-start rv">
                        {PricingStateData.map((item,index)=>{
                            return <div className="col-md-4" key={index}>
                            <div className="pcard h-100">
                                <div className="inline-style-077">{item.name}</div>
                                <div className="pamt mb-1"><sup>&#8377;</sup><span className="pv" data-m="29" data-y="19"><del className='text-danger'>{item.basePrice}</del> {item.finalPrice}</span></div>
                                <div className="inline-style-078 pper">per month, billed monthly</div>
                                <div className="pfl"><span className="pchk"><i className={`fa-solid ${item.text?'fa-check':'fa-x text-danger'}`}></i></span>Text to Text</div>
                                <div className="pfl"><span className="pchk"><i className={`fa-solid ${item.image?'fa-check':'fa-x text-danger'}`}></i></span>Text to Image</div>
                                <div className="pfl"><span className="pchk"><i className={`fa-solid ${item.imageToImage?'fa-check':'fa-x text-danger'}`}></i></span>Image to Image</div>
                                <div className="pfl"><span className="pchk"><i className={`fa-solid ${item.video?'fa-check':'fa-x text-danger'}`}></i></span>Text to Video</div>
                                <div className="pfl"><span className="pchk"><i className={`fa-solid ${item.speech?'fa-check':'fa-x text-danger'}`}></i></span>Text to Speech</div>
                            </div>
                        </div>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
