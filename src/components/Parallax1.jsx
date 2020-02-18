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
                    bgImageAlt="the flower"
                    strength={-250}
                >

                    <div style={{ height: '450px' }} />
                </Parallax>

            </div>
        )
    }
}



export default Parallax1;