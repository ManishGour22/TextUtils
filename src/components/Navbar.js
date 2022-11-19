import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
            </ul>
            <div className = "d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px',width: '30px',cursor:'pointer',border:'1px solid'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px',width: '30px',cursor:'pointer',border:'1px solid'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px',width: '30px',cursor:'pointer',border:'1px solid'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px',width: '30px',cursor:'pointer',border:'1px solid'}}></div>
              <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height: '30px',width: '30px',cursor:'pointer',border:'1px solid'}}></div>
              <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height: '30px',width: '30px',cursor:'pointer',border:'1px solid'}}></div>
            </div>

                        
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} style={{cursor:'pointer'}} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
            </div>
          </div>
        </nav>
      </>
    );
}

Navbar.propTypes = {title: PropTypes.string}

Navbar.defaultProps = {
    title : 'textutils',
    about : 'about us',
}