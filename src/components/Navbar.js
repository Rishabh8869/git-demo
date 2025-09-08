import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';




const Navbar = (props) => {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse w-full lg:d-flex justify-content-lg-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
              </li> */}
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            {/* <form className="d-flex ml-4">
              <input className="form-control me-2" type="search" placeholder="search" aria-label="search"  />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" style={{height:'30px',width:'30px'}}></div>
            </div>
            <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>   {/* it is sad that if the props mode is light than it change into dark and dark is change into light*/}
                 <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                 <label className="form-check-label" htmlFor="switchCheckDefault">Enable Darkmode</label>
            </div>
             
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar

Navbar.propTypes = {
    title:PropTypes.string,
abouttext: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText : 'About text here'
};
