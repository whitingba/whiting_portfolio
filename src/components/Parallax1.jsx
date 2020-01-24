import React, { Component } from 'react';
import { Parallax } from "react-parallax";
import image from "../assets/images/abstraction_light.jpg";






class Parallax1 extends Component {


    render() {



        return (
            <div>

                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={image}
                    bgImageAlt="the dog"
                    strength={-200}
                >

                    <div style={{ height: '500px' }} />
                </Parallax>

            </div>
        )
    }
}



export default Parallax1;