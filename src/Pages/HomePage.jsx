import React from 'react'
import Stats from '../Components/Stats'
import Problem from '../Components/Problem'
import Feature from '../Components/Feature'
import HowItWorks from '../Components/HowItWorks'
import Generations from '../Components/Generations'
import Pricing from '../Components/Pricing'
import Testimonial from '../Components/Testimonial'
import Faq from '../Components/Faq'
import Cta from '../Components/Cta'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <div className="aur aur-a inline-style-006"></div>
        <div className="aur aur-b inline-style-007"></div>
        <div className="aur aur-a inline-style-008"></div>
        <div className="container position-relative inline-style-009">
          <div className="text-center">
            <div className="afu inline-style-010"><span className="hbadge"><span className="bdot"></span>Now with GPT-4o
              &amp; Claude 3.5 integration</span></div>
            <h1 className="h1 afu inline-style-011">Automate Your Business<br />with <span className="gt">AI Agents</span>
            </h1>
            <p className="mx-auto afu inline-style-012">Deploy intelligent AI agents that handle customer support,
              automate workflows, analyze data, and scale your operations � without writing a single line of
              code.</p>
            <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap afu inline-style-013">
              <button className="bgrd btn px-4 py-3 fs-6" data-bs-toggle="offcanvas" data-bs-target="#lofc"
                onclick="swTab('signup')">Start for Free � No Credit Card</button>
              <a href="https://www.youtube.com/watch?v=ScMzIvxBSi4" className="boc btn px-4 py-3 fs-6 vidpop"><i
                className="fa-solid fa-circle-play me-2 inline-style-014"></i>Watch Demo</a>
            </div>
            <div className="mt-5 afu inline-style-015">
              <p className="inline-style-016">Trusted by innovative teams at</p>
              <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap">
                <span className="tlog">Stripe</span><span className="tlog">Notion</span><span
                  className="tlog">Vercel</span><span className="tlog">Linear</span><span
                    className="tlog">Figma</span><span className="tlog">Loom</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-11 adi">
              <div className="dwrap">
                <div className="dtbar"><span className="dd inline-style-017"></span><span
                  className="dd inline-style-018"></span><span className="dd inline-style-019"></span><span
                    className="ms-auto me-auto inline-style-020">NexusAI Dashboard �
                    nexus.ai/dashboard</span></div>
                <div className="dgrid">
                  <div className="dside">
                    <div className="inline-style-021">Overview</div>
                    <button className="dsi on"><i className="fa-solid fa-gauge-high"></i> Dashboard</button>
                    <button className="dsi"><i className="fa-solid fa-robot"></i> Agents</button>
                    <button className="dsi"><i className="fa-solid fa-chart-line"></i> Analytics</button>
                    <button className="dsi"><i className="fa-regular fa-comments"></i> Conversations</button>
                    <button className="dsi"><i className="fa-solid fa-bolt"></i> Automations</button>
                  </div>
                  <div className="p-3">
                    <div className="row g-2 mb-3">
                      <div className="col-6 col-sm-3">
                        <div className="stpill">
                          <div className="inline-style-022 gt">24.8K</div>
                          <div className="inline-style-023">AI Conversations</div>
                          <div className="inline-style-024"><i
                            className="fa-solid fa-caret-up me-1"></i>18.4%</div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3">
                        <div className="stpill">
                          <div className="inline-style-022">98.2%</div>
                          <div className="inline-style-023">Resolution Rate</div>
                          <div className="inline-style-024"><i
                            className="fa-solid fa-caret-up me-1"></i>3.1%</div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3">
                        <div className="stpill">
                          <div className="inline-style-022">1.4s</div>
                          <div className="inline-style-023">Avg Response</div>
                          <div className="inline-style-025"><i
                            className="fa-solid fa-caret-down me-1"></i>0.3s</div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3">
                        <div className="stpill">
                          <div className="inline-style-022">$18.2K</div>
                          <div className="inline-style-023">Cost Saved</div>
                          <div className="inline-style-024"><i
                            className="fa-solid fa-caret-up me-1"></i>31%</div>
                        </div>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-sm-7">
                        <div className="inline-style-026">
                          <div className="inline-style-027"><i
                            className="fa-solid fa-chart-bar me-1"></i>Agent Activity � Last 7
                            days</div>
                          <div className="inline-style-028">
                            <div className="bbar inline-style-029"></div>
                            <div className="bbar inline-style-030"></div>
                            <div className="bbar inline-style-031"></div>
                            <div className="bbar inline-style-032"></div>
                            <div className="bbar inline-style-033"></div>
                            <div className="bbar inline-style-034"></div>
                            <div className="bbar inline-style-035"></div>
                          </div>
                          <div className="d-flex justify-content-between mt-2 inline-style-036">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="inline-style-037">
                          <div className="inline-style-038"><span className="inline-style-039"></span>Live
                            Agent</div>
                          <div className="cbbl cbus">Summarize today's tickets</div>
                          <div className="cbbl cbai"><strong>47 tickets.</strong> 38 AI-resolved
                            (81%). Top: billing (23%).</div>
                          <div className="inline-style-040">
                            <div className="tdot"></div>
                            <div className="tdot inline-style-041"></div>
                            <div className="tdot inline-style-042"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Problem />
      <Feature />
      <HowItWorks />
      <Generations />
      <Pricing />
      <Testimonial />
      <Faq />
      <Cta />
    </>
  )
}
