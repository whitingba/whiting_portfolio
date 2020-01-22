import React, { Component } from 'react';
import "./style.css";
import M from "materialize-css";



class index extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <>


                <nav className="light-blue lighten-1" role="navigation">
                    <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Barbara Whiting</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="https://github.com/whitingba?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/barbara-whiting/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://docs.google.com/document/d/15PZd1-Z35F6hq3ztIfiM7DcTwGQ1VHOJurc9Pv538Xo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        </ul>

                        <ul id="nav-mobile" className="sidenav">
                            <li><a href="https://github.com/whitingba?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/barbara-whiting/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://docs.google.com/document/d/15PZd1-Z35F6hq3ztIfiM7DcTwGQ1VHOJurc9Pv538Xo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        </ul>
                        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    </div>
                </nav>

                {/* <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Barbara Whiting</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="https://github.com/whitingba?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/barbara-whiting/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://docs.google.com/document/d/15PZd1-Z35F6hq3ztIfiM7DcTwGQ1VHOJurc9Pv538Xo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        </ul>

                    </div>
                </nav>

                <ul id="sidenav" className="mobile-demo">
                    <li><a href="https://github.com/whitingba?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/barbara-whiting/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://docs.google.com/document/d/15PZd1-Z35F6hq3ztIfiM7DcTwGQ1VHOJurc9Pv538Xo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul> */}

            </>
        );
    }
};

export default index;