import React, { Component } from 'react';
import M from "materialize-css";
import image2 from "../assets/images/octopus_tentacles.jpg"

class Parallax2 extends Component {
    render() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems);
        });

        return (
            <div>

                <div class="parallax-container">
                    <div class="parallax"><img src={image2} alt="secondImage" /></div>
                </div>

            </div>
        );
    }
}

export default Parallax2;