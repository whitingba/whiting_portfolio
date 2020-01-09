import React, { Component } from 'react';
import M from "materialize-css";
import image3 from "../assets/images/code_coding_binary.jpg";

class Parallax3 extends Component {
    render() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems);
        });

        return (
            <div>

                <div class="parallax-container">
                    <div class="parallax"><img src={image3} alt="thirdImage" /></div>
                </div>

            </div>
        );
    }
}

export default Parallax3;