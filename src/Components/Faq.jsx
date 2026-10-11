import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { getFaq } from "../Redux/ActionCreators/FaqActionCreators"
export default function Faq() {
    let FaqStateData = useSelector(state => state.FaqStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            dispatch(getFaq())
        })()
    }, [FaqStateData.length])
    return (
        <>
            <section id="faq" className="sp inline-style-054">
                <div className="container">
                    <div className="text-center mb-5 rv">
                        <span className="slbl">FAQ</span>
                        <h2 className="stitle">Common <span className="gt">questions</span></h2>
                    </div>
                    <div className="row justify-content-center rv">
                        <div className="col-lg-8">
                            <div className="accordion acco" id="faqAcc">
                                
                               {FaqStateData.filter(x=>x.status).map((item,index)=>{
                                return <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header"><button className="accordion-button" type="button"
                                        data-bs-toggle="collapse" data-bs-target={`#${item._id}`}>{item.question}</button></h2>
                                    <div id={item._id} className={`accordion-collapse collapse ${index===0?'show':''}`} data-bs-parent="#faqAcc">
                                        <div className="accordion-body">{item.answer}</div>
                                    </div>
                                </div>
                               })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
