import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

import './accueil.css'


export default class Accueil extends Component {
    render() {
        return (
            <div className="accueil" id="accueil">

                <div className="dessinVCT">

                    <img src="/images/nnedi_Okorafor_vector 4.png" alt="" />

                    <div className="rectangle-bg">
                        <Fade left duration={7000}><div className="rectangle-blanc"></div></Fade>
                        <Fade right duration={7000}><div className="rectangle-jaune"></div></Fade>
                    </div>

                </div>
                <div className="presentation">

                    <p className="bonjour">Bonjour, je suis </p>
                    <p className="letter-majuscule"> Descartes Sainval</p>

                    <button>PORTFOLIO</button>

                </div>

            </div >
        )
    }
}
