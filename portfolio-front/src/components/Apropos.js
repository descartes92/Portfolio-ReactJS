import React, { Component } from 'react'

import './apropos.css'


export default class Apropos extends Component {
    render() {
        return (
            <div className="apropos" id="apropos">
                <div className="ma-photo">
                    <h2 id="titre-apropos"> A propos</h2>

                    <img src="/images/nnedi_Okorafor_vector 4.png" alt="oim" />
                </div>
                <div className="mon-apropos">

                    <h2>A propos</h2>


                    {/* <h3>Sous titre</h3> */}

                    <div className="text">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis reprehenderit odio facilis temporibus, magni quos quis iste, neque provident, et fugit voluptatum rem labore.</p>
                        <br />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis reprehenderit odio facilis temporibus, magni quos quis iste, neque provident, et fugit voluptatum rem labore.</p>
                        <br />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis reprehenderit odio facilis temporibus, magni quos quis iste, neque provident, et fugit voluptatum rem labore.</p>
                    </div>

                </div>

            </div>
        )
    }
}
