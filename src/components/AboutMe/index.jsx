import React from 'react';
import './style.css';
import myImage from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/IMG_0509a.jpg';

const index = () => {
    return (
        <div>

            <div className="aboutMe">

                <div className="row container">
                    <img className="myPic" src={myImage} alt="Barbara Whiting"></ img>
                    <h3 className="AboutMeHeader">About Me</h3>
                    <p className="grey-text text-darken-3 lighten-3 mainText">My interest in coding came from my desire to see how things work and to build things. As an Art major my
                    Freshman year of college, I remembered a project in my sixth grade math class that sparked my interest in Architecture and decided to try out a drafting
                    course. The next semester I changed my major to Architecture. I had always loved math and Geometry was my favorite math class in school. So it was not a far
                    stretch that I would love the smooth, clean lines that I made in drafting class. While I did not end up an Architect I do still have a passion for Architecture
                    that is seen in my love for taking pictures of Architecture - new or old.
                    <br></br>
                        <br></br>
                        I still have a hunger to design or create and my previous career in the mortgage industry was not scratching this itch. Plus I was no longer challenged and
                        I felt it was time to move on to something new. I took a few CodeCademy classes online in HTML and Javascript and decided I wanted to learn more. Once I set
                        my mind to something I need to see it through, so I enrolled in the DU Coding Bootcamp. I decided on a Full Stack Web Development Program to try a little
                        of everything. I will not say this program was easy, it was challenging, but this was exactly what I had been looking for. I realized I found something
                        that would easily keep me engaged and learning for years to come.
                    </p>
                </div>
            </div>


        </div >
    );
};

export default index;