import React from 'react';
import './style.css';
import myImage from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/MyPic3.jpg';

const index = () => {
    return (
        <div>

            <div className="aboutMe">

                <div className="row container">
                    <img className="myPic" src={myImage} alt="Barbara Whiting"></ img>
                    <h4 className="header">About Me</h4>
                    <p className="grey-text text-darken-3 lighten-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis dolores minima ipsam non asperiores, quas libero nemo, earum maiores molestiae consequuntur? Repudiandae, magni repellendus tempore fugit officiis repellat laboriosam.</p>

                </div>
            </div>


        </div >
    );
};

export default index;