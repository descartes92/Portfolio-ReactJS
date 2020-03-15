import React, { Component } from 'react'
import competences from '../logos/competences'
import Zoom from 'react-reveal/Zoom';


import './skills.css'


export default class Skills extends Component {


    render() {
        return (
            <Zoom duration={3000}>
                <div className="skills">
                    <h2 className="titre" >skills</h2>
                    <div className="photo">
                        {
                            competences.map((competence, i) => {
                                return (
                                    <div key={i} className="bloc-logo">
                                        <img src={`/logos/${competence.picture}`} alt={competence.name} />
                                        <p>{competence.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Zoom>
        )
    }
}
