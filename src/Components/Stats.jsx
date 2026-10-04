import React from 'react'

export default function Stats() {
    return (
        <>
            <section id="proof">
                <div className="container">
                    <div className="row g-3 align-items-center text-center">
                        <div className="col-6 col-sm-3">
                            <div className="pnum">4.9/5</div>
                            <div className="plbl"><i className="fa-solid fa-star text-warning me-1"></i>Avg Rating</div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="pnum">50K+</div>
                            <div className="plbl">Active Users</div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="pnum">200M+</div>
                            <div className="plbl">Automations Run</div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="pnum">99.9%</div>
                            <div className="plbl">Uptime SLA</div>
                        </div>
                    </div>
                    <div className="lscroll">
                        <div className="ltrack"><span className="lbr">Stripe</span><span className="lbr">Notion</span><span
                            className="lbr">Vercel</span><span className="lbr">Linear</span><span className="lbr">Figma</span><span
                                className="lbr">Shopify</span><span className="lbr">Intercom</span><span
                                    className="lbr">HubSpot</span><span className="lbr">Loom</span><span className="lbr">Stripe</span><span
                                        className="lbr">Notion</span><span className="lbr">Vercel</span><span className="lbr">Linear</span><span
                                            className="lbr">Figma</span><span className="lbr">Shopify</span><span
                                                className="lbr">Intercom</span><span className="lbr">HubSpot</span><span className="lbr">Loom</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
