import React, { Component } from 'react';
import { Parallax } from "react-parallax";
import image3 from "../assets/images/code_coding_binary.jpg";

class Parallax3 extends Component {
    render() {

        return (
            <div>

                {/* -----dynamic blur-----*/}
                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={image3}
                    bgImageAlt="the binary code"
                    strength={-250}
                >

                    <div style={{ height: '450px' }} />
                </Parallax>

            </div>
        );
    }
}

export default Parallax3;