import React from 'react'

export default function Cta() {
    return (
        <>
            <section id="cta">
                <div className="aur aur-a inline-style-070"></div>
                <div className="inline-style-083"></div>
                <div className="container position-relative inline-style-009">
                    <div className="rv">
                        <span className="hbadge mb-4 d-inline-flex"><span className="bdot"></span>14-day free trial � No credit card
                            required</span>
                        <h2 className="inline-style-084">Ready to automate your<br/><span className="gt">entire business?</span></h2>
                        <p className="inline-style-085">Join 50,000+ teams using NexusAI to save time, cut costs, and deliver
                            exceptional customer experiences.</p>
                        <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                            <button className="bgrd btn px-4 py-3 fs-6" data-bs-toggle="offcanvas" data-bs-target="#lofc"
                                onclick="swTab('signup')">Start Free Today <i
                                    className="fa-solid fa-arrow-right ms-1"></i></button>
                            <button className="boc btn px-4 py-3 fs-6"><i className="fa-regular fa-comment-dots me-2"></i>Talk to
                                Sales</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
