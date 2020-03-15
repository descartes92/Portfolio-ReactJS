import React, { Component } from 'react'

import Header from './components/Header'
import Accueil from './components/Accueil'
import Apropos from './components/Apropos'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'




import './App.css'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-img">
          <img src="/images/headers-background.png" alt="graffiti" />
        </div>

        <Header />
        <Accueil />
        <Apropos />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />

      </div>
    )
  }
}

