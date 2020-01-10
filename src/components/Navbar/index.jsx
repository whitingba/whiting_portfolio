import React, { Component } from 'react';
import "./style.css"


class index extends Component {
    render() {
        return (
            <>

                <nav>
                    <div className="nav-wrapper">
                        <a href="http://barbarawhiting.net/" class="brand-logo">Barbara Whiting</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="https://github.com/whitingba?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/barbara-whiting/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://docs.google.com/document/d/15PZd1-Z35F6hq3ztIfiM7DcTwGQ1VHOJurc9Pv538Xo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        </ul>
                    </div>
                </nav>

            </>
        );
    }
}

export default index;