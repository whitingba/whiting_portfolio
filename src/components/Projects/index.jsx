import React, { Component } from 'react';
import './style.css';
import M from "materialize-css";
import cave from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/crystal-cave.jpg';
// import psychic from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/psychic.jpg';
// import trivia from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/trivia.gif';
import cocktails from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/cocktail.jpg';
import burger from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/burger.jpg';
import crud from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/crud.jpg';
import apartment from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/apartment.jpg';
import portfolio from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/portfolio.png';

class index extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div>

                <h3 className="header">Portfolio</h3>

                {/* Row 1 */}
                <div className="row">
                    <div className="col s12">
                        {/* <div className="col s12 m6 l3"> */}
                        {/* Psychic Game */}
                        {/* <div className="card cardDiv">
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
                        </div> */}

                        <div className="col s12 m6 l3">
                            {/* Crystal Cave */}
                            <div className="card cardDiv">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={cave} alt="Cave"></ img>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Crystal Cave Game<i className="material-icons right">more_vert</i></span>
                                    <p><a href="https://whitingba.github.io/Cystal-Collector/" target="_blank" rel="noopener noreferrer">Try out your math skills!</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Crystal Cave Game<i class="material-icons right">close</i></span>
                                    <p>Each crystal has it's own randomly generated number. Keep clicking to match
                                the game score and win! Keeps track of wins and losses.
                            <br></br>
                                        <a href="https://github.com/whitingba/Cystal-Collector" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a>
                                        <br></br>
                                        <strong>Technologies Used:</strong> HTML, CSS, Javascript, jQuery
                                        <br></br>
                                        <strong>Core Concepts:</strong> Dynamically update the HTML page with the jQuery library
                                        <br></br>
                                        <strong>Role:</strong> Author
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col s12 m6 l3"> */}
                        {/* Animal Trivia */}
                        {/* <div className="card cardDiv">
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
                                        <a href="https://github.com/whitingba/TriviaGame" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a>
                                        <br></br>
                                        <strong>Technologies Used:</strong> HTML, CSS, Javascript, jQuery
                                        <br></br>
                                        <strong>Core Concepts:</strong> Trivia game using JavaScript for the logic and jQuery to manipulate HTML
                                        <br></br>
                                        <strong>Role:</strong> Author
                                    </p>
                                </div>
                            </div>
                        </div> */}



                        <div className="col s12 m6 l3">
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
                                        Visit <a href="https://github.com/caustinterry/Project-1" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a> to learn more
                                        <br></br>
                                        <strong>Technologies Used:</strong> HTML, CSS, Javascript, jQuery, API calls with AJAX (Weather API & TheCocktailDB.com), Materialize, Github Pages
                                        <br></br>
                                        <strong>Core Concepts:</strong> Work as a team on a mutually agreed upon project with the use of Github Issues and Projects. Our first time using
                                        Github for merge requests and version control.
                                        <br></br>
                                        <strong>Role:</strong> One of four team members. I put together the team proposal for our idea along with the sketch of the design.
                                         In charge of TheCocktailDB.com API call and pulling in the data for the cocktail name, ingredients, recipe and images into the
                                         cocktail carousel.
                                        </p>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col s12 m6 l3">
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
                                            <a href="https://github.com/whitingba/burger" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a>
                                            <br></br>
                                            <strong>Technologies Used:</strong> HTML, CSS, Javascript, mySQL, Node, Express, Handlebars, and an ORM.
                                        <br></br>
                                            <strong>Core Concepts:</strong> Use Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.
                                        <br></br>
                                            <strong>Role:</strong> Author
                                    </p>
                                    </div>
                                </div>
                            </div>


                        </div>



                        {/* Row 2 */}

                        <div className="col s12 m6 l3">
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
                                        Visit the <a href="https://github.com/whitingba/CRUD-Masters" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a> page for more information. </p>
                                    <br></br>
                                    <strong>Technologies Used:</strong> HTML, CSS, Bootstrap, Javascript, jQuery, Node, Express, MySQL, Sequelize, Particle.js, and Heroku for deployment
                                        <br></br>
                                    <strong>Core Concepts:</strong> Ability to work as a team to develop and implement an application of our choosing that at a minimum included a Node and Express server, be backed by a MySQL database,
                                    a GET and POST routes for reading and creating data, and use of a library we had not used in class.
                                    <br></br>
                                    <strong>Role:</strong> One of four authors. GitHub Repo Master, back-end models and routes, testing in Postman, front-end I worked on the edit tasks feature and Particles.js for the home page.
                                </div>
                            </div>
                        </div>


                        <div className="col s12 m6 l3">
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
                                        See <a href="https://github.com/gradientus/denver-lease-connection" target="_blank" rel="noopener noreferrer" ><strong>GitHub</strong></a> for more details</p>
                                    <br></br>
                                    <strong>Technologies Used:</strong> HTML, CSS, Javascript, Node, Express, MongoDB, Mongoose, React, Reactstrap, Google OAuth, Axios, Chatkit, and Heroku for deployment
                                        <br></br>
                                    <strong>Core Concepts:</strong> At a minimum the use of React with a Mongo Database to hold data and use of a library or libraries we had not used previously. The ability to work effectively with other team members to collaborate on a final project.
                                    <br></br>
                                    <strong>Role:</strong> One of three authors. I developed the wireframe using Mockflow.com that was used for the website design. With my direction we used Asana.com for project management
                                    which I set-up with the user stories. I was in charge of the routes for adding and editing the landlord's listings as well as the design elements for these pages. With the help of more than a few
                                    online videos I was able to get the Google OAuth functioning.
                                </div>
                            </div>
                        </div>


                        <div className="col s12 m6 l3">
                            {/* Potfolio */}
                            <div className="card cardDiv">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={portfolio} alt="portfolio"></ img>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">My Portfolio<i className="material-icons right">more_vert</i></span>
                                    <p><a href="https://barbarawhiting.net" target="_blank" rel="noopener noreferrer">You are already here, but click if you like.</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">My Portfolio<i class="material-icons right">close</i></span>
                                    <p>Throughout the bootcamp we were asked to create and update our portfolio multiple times. I decided once the bootcamp was over
                                        to create it again, but this time in React. I also purchased my first domain name and learned how to deploy it using FileZilla
                                        and cPanel. It took me a few attempts, but surprising was not that difficult to deploy.
                                    <br></br>
                                        <a href="https://github.com/whitingba/whiting_portfolio" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a>
                                        <br></br>
                                        <strong>Technologies Used:</strong> HTML, CSS, Javascript, React.js
                                        <br></br>
                                        <strong>Core Concepts:</strong> To learn how to deploy to my own domain name using cPanel.
                                        <br></br>
                                        <strong>Role:</strong> Author
                                    </p>
                                </div>
                            </div>
                        </div>




                    </div>

                    <div className="row">
                        <div className="col s12">



                            {/* <div className="col s12 m6 l3"> */}
                            {/* Ladies of Tea */}
                            {/* <div className="card cardDiv">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={cave} alt="Cave"></ img>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Crystal Cave Game<i className="material-icons right">more_vert</i></span>
                                    <p><a href="https://whitingba.github.io/Cystal-Collector/" target="_blank" rel="noopener noreferrer">Try out your math skills!</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Crystal Cave Game<i class="material-icons right">close</i></span>
                                    <p>Each crystal has it's own randomly generated number. Keep clicking to match
                                the game score and win! Keeps track of wins and losses.
                            <br></br>
                                        <a href="https://github.com/whitingba/Cystal-Collector" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a>
                                        <br></br>
                                        <strong>Technologies Used:</strong> HTML, CSS, Javascript, jQuery
                                        <br></br>
                                        <strong>Core Concepts:</strong> Dynamically update the HTML page with the jQuery library
                                        <br></br>
                                        <strong>Role:</strong> Author
                                    </p>
                                </div>
                            </div>
                        </div> */}




                        </div>
                    </div>





                </div>


            </div>
        );
    }
}

export default index;