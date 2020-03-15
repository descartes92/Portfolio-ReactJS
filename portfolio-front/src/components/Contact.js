import React, { Component, Fragment } from 'react'

import './contact.css'




export default class Contact extends Component {
    state = {

        name: "",
        email: "",
        text: ""

    }

    handleSubmit = () => {

    }

    handleInputChange = () => {


    }

    render() {
        return (
            <Fragment>
                <div className="contact" id="contact">

                    <div className="contact-icone">

                        <h2 className="contact-titre">

                            Contact

                        </h2>

                        <div className="contact-desktop">
                            <h2 className="contact-titre2">

                                Contact

                        </h2>
                            <div className="mon-tel">

                                <img src="/images/tel-rond.png" alt="tel" />
                                <p>
                                    06.17.96.97.18
                                </p>

                            </div>

                        </div>

                        <div className="mon-mail">

                            <img src="/images/email-rond.png" alt="@mail" />
                            <p>
                                descartes.sainval@gmail.com
                            </p>

                        </div>

                    </div>

                    <form action="" method="POST" className="form-user" onSubmit={this.handleSubmit}>

                        <label
                            // for="fname" 
                            className="fname"
                        >
                            Votre nom et prénom</label><br />

                        <input type="text" id="fname" name="fanme" /><br /> <br />

                        <label
                            // for="fmail" 
                            className="fmail"
                        >
                            Votre e-mail</label><br />

                        <input type="text" id="fmail" name="fmail" />

                        <legend className="legend">Votre message</legend><br />

                        <textarea className="txt-area" name="" rows="8" cols="40"></textarea> <br />

                        <button type="submit" className="btn-submit">ENVOYER</button>

                    </form>

                </div>

            </Fragment >
        )
    }
}
