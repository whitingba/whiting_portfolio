import React, { Component } from 'react';
// Import Materialize
import M from "materialize-css";
import image from "../assets/images/abstraction_light.jpg";






class Parallax1 extends Component {

    render() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems);
        });

        return (
            <div>

                <div class="parallax-container">
                    <div class="parallax"><img src={image} alt="firstImage" /></div>
                </div>
                <div>

                </div>



            </div>
        )
    }
}



export default Parallax1;