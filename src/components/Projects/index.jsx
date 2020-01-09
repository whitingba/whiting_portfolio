import React, { Component } from 'react';
import './style.css';
import cave from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/crystal-cave.jpg';
import psychic from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/psychic.jpg';
import trivia from '/Users/Barbara/Documents/portfolio/whiting_portfolio/src/assets/images/trivia.gif';

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
                                <img className="activator" src={psychic} alt="Cave"></ img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Psychic Game<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://whitingba.github.io/Psychic-Game/">Click here to demo</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Psychic Game<i class="material-icons right">close</i></span>
                                <p>This is an example of a very simple game that was built early in the class. Guess the letter the game has randomly selected. It will keep track of wins and losses, the number of guesses left, and what letters you have guessed.</p>
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
                                <p><a href="https://whitingba.github.io/Cystal-Collector/">See the game live</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Crystal Cave Game<i class="material-icons right">close</i></span>
                                <p>Crystal Cave - Each crystal has it's own randomly generated number. Keep clicking to match
                            the game score and win! Keeps track of wins and losses. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col m3">
                        {/* Animal Trivia */}
                        <div className="card cardDiv">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={trivia} alt="Cave"></ img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Animal Trivia<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://whitingba.github.io/TriviaGame/">Play the game!</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Animal Trivia<i class="material-icons right">close</i></span>
                                <p>A timed trivia game with five questions about animals. Unanswered questions count as incorrect. Once submitted you will get the answers to the questions. </p>
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
                                <p><a href="https://whitingba.github.io/Cystal-Collector/">See the game live</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Crystal Cave Game<i class="material-icons right">close</i></span>
                                <p>Crystal Cave - Each crystal has it's own randomly generated number. Keep clicking to match
                            the game score and win! Keeps track of wins and losses. </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row">
                    <div className="col m3">
                        {/* Psychic Game */}
                        <div className="card cardDiv">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={psychic} alt="Cave"></ img>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Psychic Game<i className="material-icons right">more_vert</i></span>
                                <p><a href="https://whitingba.github.io/Psychic-Game/">Click here to demo</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Psychic Game<i class="material-icons right">close</i></span>
                                <p>This is an example of a very simple game that was built early in the class. Guess the letter the game has randomly selected. It will keep track of wins and losses, the number of guesses left, and what letters you have guessed.</p>
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
                                <p><a href="https://whitingba.github.io/Cystal-Collector/">See the game live</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Crystal Cave Game<i class="material-icons right">close</i></span>
                                <p>Crystal Cave - Each crystal has it's own randomly generated number. Keep clicking to match
                            the game score and win! Keeps track of wins and losses. </p>
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
                                <p><a href="https://whitingba.github.io/Cystal-Collector/">See the game live</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Crystal Cave Game<i class="material-icons right">close</i></span>
                                <p>Crystal Cave - Each crystal has it's own randomly generated number. Keep clicking to match
                            the game score and win! Keeps track of wins and losses. </p>
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
                                <p><a href="https://whitingba.github.io/Cystal-Collector/">See the game live</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Crystal Cave Game<i class="material-icons right">close</i></span>
                                <p>Crystal Cave - Each crystal has it's own randomly generated number. Keep clicking to match
                            the game score and win! Keeps track of wins and losses. </p>
                            </div>
                        </div>
                    </div>




                </div>


            </div>
        );
    }
}

export default index;