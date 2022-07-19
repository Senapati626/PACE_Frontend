import React from "react";
import './Styles/Testimonials.css';
import MidA from './Assets/testimonials/Landscape 1.jpeg';
import ShortA from './Assets/testimonials/Landscape 2.jpeg';
import ShortB from './Assets/testimonials/Landscape 3.jpeg';
import MidB from './Assets/testimonials/Landscape 4.jpeg';
import ShortestA from './Assets/testimonials/Landscape 5.jpeg';
import ShortestB from './Assets/testimonials/Landscape 6.jpeg';
import MidC from './Assets/testimonials/Landscape 7.jpeg';
import ShortC from './Assets/testimonials/Landscape 8.jpeg';
import MidD from './Assets/testimonials/Landscape 9.jpeg';
import ShorterA from './Assets/testimonials/Landscape 10.jpeg';
import TallA from './Assets/testimonials/Landscape 11.jpeg';
import TallB from './Assets/testimonials/Landscape 12.jpeg';
import ShortD from './Assets/testimonials/Landscape 13.jpeg';
import ShorterB from './Assets/testimonials/Landscape 14.jpeg';
import TallC from './Assets/testimonials/Landscape 15.jpeg';
import TallD from './Assets/testimonials/Portrait 1.jpeg';
import TallestA from './Assets/testimonials/Portrait 2.jpeg';
import TallerA from './Assets/testimonials/Portrait 3.jpeg';
import TallerB from './Assets/testimonials/Portrait 4.jpeg';
import TallestB from './Assets/testimonials/Portrait 5.jpeg';
import TallE from './Assets/testimonials/Portrait 6.jpeg';

export default function Testimonials(){
    return(
        <div className="tml-container">
            <div className="tml-grid-container">
                <grid-item mid>
                <img src={MidA} alt="testimony"/>
                </grid-item>
                <grid-item short>
                <img src={ShortA} alt="testimony"/>
                </grid-item>
                <grid-item short>
                <img src={ShortB} alt="testimony"/>
                </grid-item>
                <grid-item mid>
                <img src={MidB} alt="testimony"/>
                </grid-item>
                <grid-item shortest>
                <img src={ShortestA} alt="testimony"/>
                </grid-item>
                <grid-item tall>
                <img src={TallA} alt="testimony"/>
                </grid-item>
                <grid-item shortest>
                <img src={ShortestB} alt="testimony"/>
                </grid-item>
                <grid-item mid>
                <img src={MidC} alt="testimony"/>
                </grid-item>
                <grid-item short>
                <img src={ShortC} alt="testimony"/>
                </grid-item>
                <grid-item mid>
                <img src={MidD} alt="testimony"/>
                </grid-item>
                <grid-item shorter>
                <img src={ShorterA} alt="testimony"/>
                </grid-item>
                <grid-item tall>
                <img src={TallB} alt="testimony"/>
                </grid-item>
                <grid-item short>
                <img src={ShortD} alt="testimony"/>
                </grid-item>
                <grid-item shorter>
                <img src={ShorterB} alt="testimony"/>
                </grid-item>
                <grid-item tall>
                <img src={TallC} alt="testimony"/>
                </grid-item>
                <grid-item tall>
                <img src={TallD} alt="testimony"/>
                </grid-item>
                <grid-item tallest>
                <img src={TallestA} alt="testimony"/>
                </grid-item>
                <grid-item taller>
                <img src={TallerA} alt="testimony"/>
                </grid-item>
                <grid-item taller>
                <img src={TallerB} alt="testimony"/>
                </grid-item>
                <grid-item tallest>
                <img src={TallestB} alt="testimony"/>
                </grid-item>
                <grid-item tall>
                <img src={TallE} alt="testimony"/>
                </grid-item>
            </div>
        </div>
    )
}