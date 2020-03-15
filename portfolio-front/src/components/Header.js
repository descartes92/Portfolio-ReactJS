import React, {
    Component,
    Fragment
} from 'react'
import Burger from './Burger'
import { Link } from 'react-scroll'
import './header.css'

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {

            const navbar = window.scrollY < 10;
            console.log(window.scrollY);

            if (navbar !== true) {
                this.setState({
                    scrolled: true
                })
            } else {
                this.setState({
                    scrolled: false
                })
            }

        })

    }
    componentWillUnmount() {
        window.addEventListener('scroll', () => {

            window.removeEventListener('scroll');

        })
    }

    render() {
        return (

            <Fragment >
                <div className={this.state.scrolled ? 'header scrolled' : 'header'} >
                    <div className="name" >
                        <Link
                            activeClass="active"
                            to="accueil"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={2000}
                        >
                            <p className="first-name" > Descartes </p>
                            <p className="last-name" > SAINVAL </p>

                        </Link>


                    </div>

                    <Burger>

                        {/* definir mes routes */}

                        <ul className="nav-aside" >

                            <Link
                                activeClass="active"
                                to="accueil"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={2000}
                            >Accueil</Link>

                            <Link
                                activeClass="active"
                                to="apropos"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={2000}
                            >A propos</Link>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={2000}
                            >Skills </Link>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={3000}
                            >Portfolio </Link>

                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={3000}
                            >Contact </Link>
                            {/* <li href="#" > Portfolio </li> */}

                        </ul >

                    </Burger>

                    <div className="menu-text" >

                        <ul className="ancre" >
                            {/* definir mes routes */}

                            <Link
                                activeClass="active"
                                to="accueil"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={3000}
                            >Accueil</Link>

                            <Link
                                activeClass="active"
                                to="apropos"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={3000}
                            >A propos</Link>

                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={3000}
                            >Skills </Link>

                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={3000}
                            >Portfolio </Link>

                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={3000}
                            >Contact </Link>



                        </ul >

                    </div>

                </div >

            </Fragment >
        )
    }
}