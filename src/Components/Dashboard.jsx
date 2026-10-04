import React from 'react'

export default function Dashboard() {
    return (
        <>
            <div id="dashboard">
                <div className="db-sidebar" id="dbSidebar">
                    <div className="db-logo">
                        <div className="logo-i"><i className="fa-solid fa-layer-group"></i></div>
                        <span>NexusAI</span>
                    </div>
                    <div className="db-nav">
                        <div className="db-nav-section">Main</div>
                        <button className="db-nl active" onclick="dbNav('overview',this)"><i className="fa-solid fa-gauge-high"></i>
                            Overview</button>
                        <button className="db-nl" onclick="dbNav('agents',this)"><i className="fa-solid fa-robot"></i> AI Agents <span
                            className="db-badge">4</span></button>
                        <button className="db-nl" onclick="dbNav('chat',this)"><i className="fa-regular fa-comments"></i> AI Chat <span
                            className="db-badge inline-style-096">Live</span></button>
                        <button className="db-nl" onclick="dbNav('analytics',this)"><i className="fa-solid fa-chart-line"></i>
                            Analytics</button>
                        <button className="db-nl" onclick="dbNav('automations',this)"><i className="fa-solid fa-bolt"></i>
                            Automations</button>
                        <div className="db-nav-section">Workspace</div>
                        <button className="db-nl" onclick="dbNav('integrations',this)"><i className="fa-solid fa-plug"></i>
                            Integrations</button>
                        <button className="db-nl" onclick="dbNav('settings',this)"><i className="fa-solid fa-gear"></i>
                            Settings</button>
                    </div>
                    <div className="db-bottom">
                        <button className="db-nl inline-style-046" onclick="doLogout()"><i
                            className="fa-solid fa-right-from-bracket"></i> Log Out</button>
                    </div>
                </div>
                <div className="db-top">
                    <button className="boc d-lg-none me-2 px-2 py-2 inline-style-097"
                        onclick="document.getElementById('dbSidebar').classList.toggle('mob-open')">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="db-top-search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search agents, conversations..." />
                    </div>
                    <div className="ms-auto d-flex align-items-center gap-3">
                        <button className="boc d-flex align-items-center justify-content-center inline-style-002" id="dbThBtn"
                            onclick="toggleTheme()">
                            <i className="fa-solid fa-sun inline-style-003" id="dbSunI"></i>
                            <i className="fa-solid fa-moon" id="dbMoonI"></i>
                        </button>
                        <div className="inline-style-098" id="notifWrap">
                            <button className="boc d-flex align-items-center justify-content-center inline-style-002" id="bellBtn"
                                onclick="toggleNotif(event)">
                                <i className="fa-regular fa-bell"></i>
                            </button>
                            <span id="notifBadge" className="inline-style-099"></span>
                            <div className="db-dropdown inline-style-100" id="notifDropdown">
                                <div className="dd-header">
                                    <div className="dd-header-title"><i
                                        className="fa-regular fa-bell me-2 inline-style-014"></i>Notifications <span
                                            id="unreadCount" className="inline-style-101">4 new</span></div>
                                    <div className="d-flex gap-2">
                                        <button className="dd-close inline-style-102" onclick="markAllRead()"
                                            title="Mark all read">Mark all read</button>
                                        <button className="dd-close" onclick="toggleNotif(event)"><i
                                            className="fa-solid fa-xmark"></i></button>
                                    </div>
                                </div>
                                <div className="dd-body" id="notifList">
                                    <div className="notif-item notif-unread d-flex gap-3 mb-2">
                                        <div className="notif-ico inline-style-103"><i
                                            className="fa-solid fa-triangle-exclamation inline-style-104"></i></div>
                                        <div className="inline-style-105">
                                            <div className="inline-style-106">High ticket volume alert</div>
                                            <div className="inline-style-107">Support Bot handling 23% above average. Consider
                                                scaling agents.</div>
                                            <div className="inline-style-108"><i className="fa-regular fa-clock me-1"></i>2 minutes ago
                                            </div>
                                        </div>
                                        <div className="notif-dot"></div>
                                    </div>
                                    <div className="notif-item notif-unread d-flex gap-3 mb-2">
                                        <div className="notif-ico inline-style-109"><i
                                            className="fa-solid fa-chart-line inline-style-110"></i></div>
                                        <div className="inline-style-105">
                                            <div className="inline-style-106">Daily goal reached ??</div>
                                            <div className="inline-style-107">Your AI agents resolved 1,000 conversations today � a
                                                new record!</div>
                                            <div className="inline-style-108"><i className="fa-regular fa-clock me-1"></i>18 minutes ago
                                            </div>
                                        </div>
                                        <div className="notif-dot"></div>
                                    </div>
                                    <div className="notif-item notif-unread d-flex gap-3 mb-2">
                                        <div className="notif-ico inline-style-111"><i
                                            className="fa-brands fa-slack inline-style-112"></i></div>
                                        <div className="inline-style-105">
                                            <div className="inline-style-106">Slack sync completed</div>
                                            <div className="inline-style-107">#support channel successfully synced. 47 new threads
                                                indexed for AI training.</div>
                                            <div className="inline-style-108"><i className="fa-regular fa-clock me-1"></i>1 hour ago
                                            </div>
                                        </div>
                                        <div className="notif-dot"></div>
                                    </div>
                                    <div className="notif-item notif-unread d-flex gap-3 mb-2">
                                        <div className="notif-ico inline-style-113"><i
                                            className="fa-solid fa-robot inline-style-114"></i></div>
                                        <div className="inline-style-105">
                                            <div className="inline-style-106">Agent update available</div>
                                            <div className="inline-style-107">Support Bot v2.2 is ready. Improved accuracy by 4.3%
                                                on billing queries.</div>
                                            <div className="inline-style-108"><i className="fa-regular fa-clock me-1"></i>3 hours ago
                                            </div>
                                        </div>
                                        <div className="notif-dot"></div>
                                    </div>
                                    <div className="notif-item d-flex gap-3 mb-2">
                                        <div className="notif-ico inline-style-115"><i
                                            className="fa-solid fa-file-lines inline-style-116"></i></div>
                                        <div className="inline-style-105">
                                            <div className="inline-style-106">Weekly report ready</div>
                                            <div className="inline-style-107">Your performance report for last week is ready to
                                                download.</div>
                                            <div className="inline-style-108"><i className="fa-regular fa-clock me-1"></i>Yesterday
                                            </div>
                                        </div>
                                        <div className="notif-dot read"></div>
                                    </div>
                                    <div className="notif-item d-flex gap-3 mb-2">
                                        <div className="notif-ico inline-style-117"><i
                                            className="fa-solid fa-plug inline-style-110"></i></div>
                                        <div className="inline-style-105">
                                            <div className="inline-style-106">GitHub integration connected</div>
                                            <div className="inline-style-107">Successfully connected 2 repositories. AI code review
                                                is now active.</div>
                                            <div className="inline-style-108"><i className="fa-regular fa-clock me-1"></i>2 days ago
                                            </div>
                                        </div>
                                        <div className="notif-dot read"></div>
                                    </div>
                                </div>
                                <div className="inline-style-118">
                                    <button className="boc btn w-100 py-2 inline-style-119"><i
                                        className="fa-solid fa-list me-1"></i>View All Notifications</button>
                                </div>
                            </div>
                        </div>
                        <div className="inline-style-098" id="profileWrap">
                            <div className="db-user-pill" id="userPill" onclick="toggleProfile(event)">
                                <div className="db-avatar" id="userAvatar">U</div>
                                <div className="d-none d-md-block">
                                    <div className="inline-style-120" id="userName">User</div>
                                    <div className="inline-style-121" id="userPlan">Pro Plan</div>
                                </div>
                                <i className="fa-solid fa-chevron-down fa-xs inline-style-122" id="profileChevron"></i>
                            </div>
                            <div className="db-dropdown profile-dd inline-style-123" id="profileDropdown">
                                <div className="profile-dd-top">
                                    <div className="db-avatar inline-style-124" id="pdAvatar">U</div>
                                    <div>
                                        <div className="inline-style-125" id="pdName">User</div>
                                        <div className="inline-style-126" id="pdEmail">user\@email.com</div>
                                        <div className="inline-style-127"><span className="bst son inline-style-128" id="pdPlan">Pro
                                            Plan</span></div>
                                    </div>
                                </div>
                                <div className="inline-style-129">
                                    <button className="profile-menu-item"
                                        onclick="dbNav('settings',document.querySelector('[onclick\*=settings]'));toggleProfile()"><i
                                            className="fa-regular fa-user inline-style-014"></i>My Profile</button>
                                    <button className="profile-menu-item"
                                        onclick="dbNav('settings',document.querySelector('[onclick\*=settings]'));toggleProfile()"><i
                                            className="fa-solid fa-gear inline-style-130"></i>Account Settings</button>
                                    <button className="profile-menu-item"
                                        onclick="dbNav('integrations',document.querySelector('[onclick\*=integrations]'));toggleProfile()"><i
                                            className="fa-solid fa-plug inline-style-131"></i>Integrations</button>
                                    <button className="profile-menu-item"
                                        onclick="dbNav('chat',document.querySelector('[onclick\*=chat]'));toggleProfile()"><i
                                            className="fa-solid fa-robot inline-style-069"></i>AI Chat Console</button>
                                    <div className="inline-style-132"></div>
                                    <div className="inline-style-133">
                                        <div className="inline-style-134">Current Plan</div>
                                        <div className="inline-style-135">
                                            <div className="inline-style-136" id="pdPlanDetail">Pro Plan</div>
                                            <div className="inline-style-137">Next billing: June 1, 2025</div>
                                            <button className="bgrd btn w-100 py-1 inline-style-138">Upgrade to Enterprise</button>
                                        </div>
                                    </div>
                                    <div className="inline-style-132"></div>
                                    <button className="profile-menu-item danger" onclick="doLogout();toggleProfile()"><i
                                        className="fa-solid fa-right-from-bracket inline-style-046"></i>Log Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
