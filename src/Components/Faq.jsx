import React from 'react'

export default function Faq() {
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
                                <div className="accordion-item">
                                    <h2 className="accordion-header"><button className="accordion-button" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#f1">How long does it take to set up
                                        NexusAI?</button></h2>
                                    <div id="f1" className="accordion-collapse collapse show" data-bs-parent="#faqAcc">
                                        <div className="accordion-body">Most teams are fully live within 24 hours. Connect your
                                            tools, upload your documentation, and your AI agents are ready. No engineering
                                            work required.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header"><button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#f2">What AI models does NexusAI
                                        use?</button></h2>
                                    <div id="f2" className="accordion-collapse collapse" data-bs-parent="#faqAcc">
                                        <div className="accordion-body">We support GPT-4o, Claude 3.5 Sonnet, Gemini Pro, and
                                            Llama 3. You choose the model per agent based on cost and performance
                                            requirements.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header"><button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#f3">Is my data secure and
                                        private?</button></h2>
                                    <div id="f3" className="accordion-collapse collapse" data-bs-parent="#faqAcc">
                                        <div className="accordion-body">Absolutely. All data is encrypted at rest and in
                                            transit. We are SOC 2 Type II certified and GDPR compliant. Your data is never
                                            used to train AI models.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header"><button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#f4">Do you offer a free
                                        trial?</button></h2>
                                    <div id="f4" className="accordion-collapse collapse" data-bs-parent="#faqAcc">
                                        <div className="accordion-body">Yes � 14 days free on any plan, no credit card required.
                                            You get access to all features. If you're not satisfied, we'll give you a full
                                            refund, no questions asked.</div>
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
