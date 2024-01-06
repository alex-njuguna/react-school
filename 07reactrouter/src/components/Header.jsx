import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 shadow m-auto">
        <div className="container-fluid">
        <a className="navbar-brand fw-bolder fs-4 " href="#">
          <span className='text-dark'>your</span>
          <span className='text-danger'>logo</span>
        </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5">
                <li className="nav-item">
                <a className="nav-link active text-danger" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Github</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Log in</a>
                </li>
                <li className="nav-item">
                <a className="btn btn-danger" href="#">Get started</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header