import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin" className="list-group-item list-group-item-action active mb-1" aria-current="true"><i className='bi bi-house-door fs-5'></i> <span className='float-end'>Home</span></Link>
                <Link to="/admin/feature" className="list-group-item list-group-item-action active mb-1" aria-current="true"><i className='bi bi-bookmarks fs-5'></i> <span className='float-end'>Feature</span></Link>
                <Link to="/admin/faq" className="list-group-item list-group-item-action active mb-1" aria-current="true"><i className='bi bi-question-square fs-5'></i> <span className='float-end'>Faq</span></Link>
                <Link to="/admin/setting" className="list-group-item list-group-item-action active mb-1" aria-current="true"><i className='bi bi-gear fs-5'></i> <span className='float-end'>Setting</span></Link>
                <Link to="/admin/newsletter" className="list-group-item list-group-item-action active mb-1" aria-current="true"><i className='bi bi-envelope fs-5'></i> <span className='float-end'>Newsletter</span></Link>
                <Link to="/admin/contact" className="list-group-item list-group-item-action active mb-1" aria-current="true"><i className='bi bi-telephone fs-5'></i> <span className='float-end'>Contact Us</span></Link>
                {localStorage.getItem("role") === "Super Admin" ? <Link to="/admin/user" className="list-group-item list-group-item-action active mb-1" aria-current="true"><i className='bi bi-people fs-5'></i> <span className='float-end'>User</span></Link> : null}
            </div>
        </>
    )
}
