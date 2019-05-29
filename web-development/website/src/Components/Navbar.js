import React, {Component} from 'react';

const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
    return (
      <li className={liClassName}>
        <a href={props.path} className={aClassName}>
          {props.name}
          {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
        </a>
      </li>
    );
}

class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">

                <a className="navbar-brand" href="/">Rajeev</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        
                        <NavItem path="#about" name="About Me" />
                        <NavItem path="#experience" name="Experience" />
                        <NavItem path="#work" name="Work" />
                        <NavItem path="#contact" name="Contact" />
                    </ul>
                </div>
            </nav>
          );
    }
}

export default Navbar