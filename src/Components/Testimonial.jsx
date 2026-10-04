import React from 'react'

export default function Testimonial() {
    return (
        <>
            <section id="testimonials" className="sp">
                <div className="container">
                    <div className="text-center mb-5 rv">
                        <span className="slbl">Testimonials</span>
                        <h2 className="stitle">Loved by <span className="gt">10,000+ teams</span></h2>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-4 rv">
                            <div className="gc p-4 h-100">
                                <div className="d-flex gap-1 mb-3"><i className="fa-solid fa-star text-warning"></i><i
                                    className="fa-solid fa-star text-warning"></i><i
                                        className="fa-solid fa-star text-warning"></i><i
                                            className="fa-solid fa-star text-warning"></i><i
                                                className="fa-solid fa-star text-warning"></i></div>
                                <p className="inline-style-081">"NexusAI reduced our support ticket volume by 78% in the first
                                    month. It's like hiring a 50-person support team overnight."</p>
                                <div className="d-flex align-items-center gap-2">
                                    <img className="tav"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80\&h=80\&fit=crop\&crop=face"
                                        alt="Sarah" />
                                    <div>
                                        <div className="inline-style-082">Sarah Chen</div>
                                        <div className="inline-style-020">Head of CX, Stripe</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 rv inline-style-048">
                            <div className="gc p-4 h-100">
                                <div className="d-flex gap-1 mb-3"><i className="fa-solid fa-star text-warning"></i><i
                                    className="fa-solid fa-star text-warning"></i><i
                                        className="fa-solid fa-star text-warning"></i><i
                                            className="fa-solid fa-star text-warning"></i><i
                                                className="fa-solid fa-star text-warning"></i></div>
                                <p className="inline-style-081">"Response quality is genuinely better than most human agents.
                                    The Slack integration means our AI always has full context."</p>
                                <div className="d-flex align-items-center gap-2">
                                    <img className="tav"
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80\&h=80\&fit=crop\&crop=face"
                                        alt="Marcus" />
                                    <div>
                                        <div className="inline-style-082">Marcus Johnson</div>
                                        <div className="inline-style-020">CTO, Linear</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 rv inline-style-051">
                            <div className="gc p-4 h-100">
                                <div className="d-flex gap-1 mb-3"><i className="fa-solid fa-star text-warning"></i><i
                                    className="fa-solid fa-star text-warning"></i><i
                                        className="fa-solid fa-star text-warning"></i><i
                                            className="fa-solid fa-star text-warning"></i><i
                                                className="fa-solid fa-star text-warning"></i></div>
                                <p className="inline-style-081">"$18K saved in the first month just from automated support. The
                                    ROI was immediate and staggering."</p>
                                <div className="d-flex align-items-center gap-2">
                                    <img className="tav"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80\&h=80\&fit=crop\&crop=face"
                                        alt="Priya" />
                                    <div>
                                        <div className="inline-style-082">Priya Patel</div>
                                        <div className="inline-style-020">COO, Vercel</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
