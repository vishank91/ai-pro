import React from 'react'

export default function Pricing() {
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
                    <div className="d-flex align-items-center justify-content-center gap-3 mb-5 rv">
                        <span className="inline-style-071">Monthly</span>
                        <div className="inline-style-072"><input type="checkbox" id="ptog" className="inline-style-073" /><label
                            for="ptog" id="ptogLabel" className="inline-style-074"><span id="ptogThumb"
                                className="inline-style-075"></span></label></div>
                        <span className="inline-style-071">Yearly</span>
                        <span className="inline-style-076"><i className="fa-solid fa-tag me-1"></i>Save 30%</span>
                    </div>
                    <div className="row g-4 align-items-start rv">
                        <div className="col-md-4">
                            <div className="pcard h-100">
                                <div className="inline-style-077">Starter</div>
                                <div className="pamt mb-1"><sup>$</sup><span className="pv" data-m="29" data-y="19">29</span></div>
                                <div className="inline-style-078 pper">per month, billed monthly</div>
                                <p className="inline-style-079">Perfect for small teams getting started with AI automation.</p>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>1,000 AI
                                    conversations/mo</div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>3 AI agents
                                </div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>50+ integrations
                                </div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>Basic analytics
                                </div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>Email support
                                </div>
                                <button className="boc btn w-100 py-2 mt-4" data-bs-toggle="offcanvas" data-bs-target="#lofc"
                                    onclick="swTab('signup')">Start Free Trial</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pcard pop h-100">
                                <span className="pbadge"><i className="fa-solid fa-star me-1"></i>Most Popular</span>
                                <div className="inline-style-077">Pro</div>
                                <div className="pamt mb-1"><sup>$</sup><span className="pv" data-m="79" data-y="55">79</span></div>
                                <div className="inline-style-078 pper">per month, billed monthly</div>
                                <p className="inline-style-079">For growing teams that need powerful automation and analytics.
                                </p>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>Unlimited AI
                                    conversations</div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>20 AI agents
                                </div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>1,000+
                                    integrations</div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>Advanced
                                    analytics + API</div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>Priority 24/7
                                    support</div>
                                <button className="bgrd btn w-100 py-2 mt-4" data-bs-toggle="offcanvas" data-bs-target="#lofc"
                                    onclick="swTab('signup')">Get Started <i
                                        className="fa-solid fa-arrow-right ms-1 fa-sm"></i></button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pcard h-100">
                                <div className="inline-style-077">Enterprise</div>
                                <div className="inline-style-080">Custom</div>
                                <div className="inline-style-078">contact us for pricing</div>
                                <p className="inline-style-079">For large teams with advanced security and compliance needs.</p>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>Unlimited
                                    everything</div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>Custom AI
                                    fine-tuning</div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>SSO &amp; SAML
                                </div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>99.99% SLA +
                                    dedicated manager</div>
                                <div className="pfl"><span className="pchk"><i className="fa-solid fa-check"></i></span>On-premises
                                    deployment</div>
                                <button className="boc btn w-100 py-2 mt-4">Talk to Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
