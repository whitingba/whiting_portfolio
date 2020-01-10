import React, { Component } from 'react';
import './style.css';
import cave from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/crystal-cave.jpg';
import psychic from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/psychic.jpg';
import trivia from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/trivia.gif';
import cocktails from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/cocktail.jpg';
import burger from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/burger.jpg';
import crud from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/crud.jpg';
import apartment from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/apartment.jpg';

class index extends Component {
    render() {
        return (
            <div>

                {/* Row 1 */}
                <div className="row">
                    <div className="col m3">
                        {/* Psychic Game */}
                        <div className="card cardDiv">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={psychic} alt="crystal ball"></ img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Psychic Game<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://whitingba.github.io/Psychic-Game/" target="_blank" rel="noopener noreferrer">Click here to demo</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Psychic Game<i class="material-icons right">close</i></span>
                                <p>This is an example of a very simple game that was built early in the class. Guess the letter the game has randomly selected.
                                    It will keep track of wins and losses, the number of guesses left, and what letters you have guessed.
                                    <br></br>
                                    <a href="https://github.com/whitingba/Psychic-Game" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col m3">
                        {/* Crystal Cave */}
                        <div className="card cardDiv">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={cave} alt="Cave"></ img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Crystal Cave Game<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://whitingba.github.io/Cystal-Collector/" target="_blank" rel="noopener noreferrer">Try out your math skills with Crystal Cave</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Crystal Cave Game<i class="material-icons right">close</i></span>
                                <p>Crystal Cave - Each crystal has it's own randomly generated number. Keep clicking to match
                            the game score and win! Keeps track of wins and losses.
                            <br></br>
                                    <a href="https://github.com/whitingba/Cystal-Collector" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col m3">
                        {/* Animal Trivia */}
                        <div className="card cardDiv">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={trivia} alt="trivia"></ img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Animal Trivia<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://whitingba.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer">Play the game!</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Animal Trivia<i class="material-icons right">close</i></span>
                                <p>A timed trivia game with five questions about animals. Unanswered questions count as incorrect. Once submitted you will get the answers
                                    to the questions.
                                    <br></br>
                                    <a href="https://github.com/whitingba/TriviaGame" target="_blank" rel="noopener noreferrer">GtiHub</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col m3">
                        {/* Prjt 1: Weather or not to drink */}
                        <div className="card cardDiv">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={cocktails} alt="Cocktail"></ img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">'Weather Or Not to Drink'<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://whitingba.github.io/Project-1/" target="_blank" rel="noopener noreferrer">Check out the app here</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Project #1 - Weather Or Not to Drink <i class="material-icons right">close</i></span>
                                <p>Project #1: Our group created a cocktail recipe search based on the current temperature outside or at a searchable location. I was responsible
                                for getting the cocktail content into the carousel cards along with the task of making sure we got back unique drinks.
                                <br></br>
                                    Visit <a href="https://github.com/caustinterry/Project-1" target="_blank" rel="noopener noreferrer">GitHub</a> to learn more
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row">
                    <div className="col m3">
                        {/* Eat the Burger */}
                        <div className="card cardDiv">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={burger} alt="Cute Burger"></ img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Eat The Burger<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://desolate-beyond-62756.herokuapp.com/" target="_blank" rel="noopener noreferrer">Devour some burgers!</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Eat the Burger<i class="material-icons right">close</i></span>
                                <p>This assignment was from week 14 of the bootcamp. It utilized Node.js, MySQL, an ORM to query the data, Handlebars, and deployment to Heroku.
                                    <br></br>
                                    <a href="https://github.com/whitingba/burger" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col m3">
                        {/* Prjt #2 C.R.U.D. Masters */}
                        <div className="card cardDiv">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={crud} alt="Lawnmower"></ img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">C.R.U.D. Masters<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://glacial-brook-57318.herokuapp.com/" target="_blank" rel="noopener noreferrer">Create household tasks here</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Project #2 - C.R.U.D. Masters (Customizable Residence Upkeep Database)<i class="material-icons right">close</i></span>
                                <p>App that allows the admin to create users, add tasks for the users and editting of tasks and users. I was responsible for back-end set-up as well as the Edit Task page
                                    functionality and Particles.js on the homepage.
                                    <br></br>
                                    Visit the <a href="https://github.com/whitingba/CRUD-Masters" target="_blank" rel="noopener noreferrer">GitHub</a> page for more information. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col m3">
                        {/* Prjt #3 Denver Lease Connection */}
                        <div className="card cardDiv">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={apartment} alt="Apartment View"></ img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Denver Lease Connection<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://denver-lease-connection.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check out local leases</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Project #3 - Denver Lease Connection<i class="material-icons right">close</i></span>
                                <p>This was the final project of the coding bootcamp. It was developed to allow landlords to connect with tenants in the area looking for a room or apartment lease.
                                    My focus on this project was for landlords to be able to add new listings and have them displayed on the screen for the landlord as well as in the tenant view. I was
                                    also responsible for getting the Google OAuth working as well as making it compliant for Heroku deployment. I had a large hand in the design and layout of this application as well.
                                    <br></br>
                                    See <a href="https://github.com/gradientus/denver-lease-connection" target="_blank" rel="noopener noreferrer" >GitHub</a> for more details</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col m3"> */}
                    {/* Future Ladies of Tea Project */}
                    {/* <div className="card cardDiv">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={cave} alt="Cave"></ img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Crystal Cave Game<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://whitingba.github.io/Cystal-Collector/">See the game live</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Crystal Cave Game<i class="material-icons right">close</i></span>
                                <p>Crystal Cave - Each crystal has it's own randomly generated number. Keep clicking to match
                            the game score and win! Keeps track of wins and losses. </p>
                            </div>
                        </div>
                    </div> */}




                </div>


            </div>
        );
    }
}

export default index;