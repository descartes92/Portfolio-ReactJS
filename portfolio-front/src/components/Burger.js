import React, { Component } from 'react'
import './burger.css'

export default class Burger extends Component {

    constructor(props) {

        super(props);

        this.state = {

            menuOpen: false

        }

        this.toggleButton = this.toggleButton.bind(this);
    }


    toggleButton = (e) => {

        e.preventDefault()

        const menuBtn = document.querySelector('.menu-btn');

        // menuBtn.addEventListener('click', () => {

        // let menuOpen = true;
        // let menuOpen = false;


        // if (menuOpen != this.state.menuOpen) {
        if (!this.state.menuOpen) {



            menuBtn.classList.add('open');

            this.setState({
                menuOpen: !this.state.menuOpen
            })


            console.log('ouvert');

        } else {

            menuBtn.classList.remove('open');

            this.setState({
                menuOpen: !this.state.menuOpen
            })

            console.log('fermé');

        }



    }

    render() {
        return (
            <div className="burger"  >

                {

                    this.state.menuOpen && this.props.children

                }

                <div className="menu-btn" >

                    <div className="menu-btn__burger" onClick={this.toggleButton}></div>

                </div>



            </div>
        )
    }
}
