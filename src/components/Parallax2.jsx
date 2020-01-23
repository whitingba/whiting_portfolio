import React, { Component } from 'react';
import { Parallax } from "react-parallax";
import image2 from "../assets/images/octopus_tentacles.jpg"

class Parallax2 extends Component {
    render() {


        return (
            <div>

                {/* -----dynamic blur-----*/}
                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={image2}
                    bgImageAlt="the dog"
                    strength={-200}
                >
                    Blur transition from min to max
            <div style={{ height: '500px' }} />
                </Parallax>

            </div>
        );
    }
}

export default Parallax2;