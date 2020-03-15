import React, { Component } from 'react'
import ouvrages from '../ouvrage/ouvrages'

import 'bootstrap/dist/css/bootstrap.min.css'
import './portfolio.css'


export default class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">

                <h2>Portfolio</h2>

                <div className="porte-image">
                    {
                        // avec BOOSTRAP

                        ouvrages.map((ouvrage, i) => {
                            return (

                                <div className="card" key={i} style={{ width: "18rem" }}>
                                    <img src={`/ouvrages/${ouvrage.picture}`} className="card-img-top bloc-portfolio" alt={ouvrage.description} />
                                    <div className="card-body">
                                        <p className="card-text">{ouvrage.description}</p>
                                    </div>
                                </div>
                            )

                        })

                    }
                </div>


                {/* A afficher en mode => mobile 

                <div className="porte-image-slider" >
                    {
                        ouvrages.map((ouvrage, i) => {
                            return (

                                <div className="card" key={i} style={{ width: "18rem" }}>
                                    <img src={`/ouvrages/${ouvrage.picture}`} className="card-img-top bloc-portfolio" alt={ouvrage.description} />
                                    <div className="card-body">
                                        <p className="card-text">{ouvrage.description}</p>
                                    </div>
                                </div>
                            )

                        })

                    }
                </div> */}

            </div>
        )
    }
}


