import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 shadow m-auto">
        <div className="container-fluid">
        <Link className="navbar-brand fw-bolder fs-4 " to='/'>
          <span className='text-dark'>your</span>
          <span className='text-danger'>logo</span>
        </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5">
                <li className="nav-item">
                <Link className="nav-link active text-danger" aria-current="page" to="#">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="#">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="#">Contact</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="#">Github</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="#">Log in</Link>
                </li>
                <li className="nav-item">
                <Link className="btn btn-danger" to="#">Get started</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header