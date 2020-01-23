import React, { Component } from 'react';
import { Parallax } from "react-parallax";
import image from "../assets/images/abstraction_light.jpg";






class Parallax1 extends Component {


    render() {



        return (
            <div>
                {/* -----basic config-----*/}
                {/* <Parallax
                    blur={0}
                    bgImage={image}
                    bgImageAlt="the cat"
                    strength={200}
                >

                    <div style={{ height: '600px' }} />
                </Parallax> */}


                {/* -----dynamic blur-----*/}
                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={image}
                    bgImageAlt="the dog"
                    strength={-200}
                >
                    Blur transition from min to max
            <div style={{ height: '500px' }} />
                </Parallax>

            </div>
        )
    }
}



export default Parallax1;