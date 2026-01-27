
import React from 'react'
import { HomeSection, Wrapper } from './home.styles'

import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Lazizjon from "./assets/Lazizjon_2.png"
import Lazizjon3 from "./assets/lazizjon3.png"

const Home = () => {
  return (
    <HomeSection>
      <Wrapper>
        <img src={Lazizjon3} alt="" />
        <div className="name">
          <h2>Maxmudjonov Lazizjon</h2>
          <p>I am Web Devoloper</p>
        </div>
        <div className="icons">
        <FaTelegram className='icon' />
        <FaInstagram className='icon'/>
        <FaGithub className='icon'/>
        </div>
      </Wrapper>
    </HomeSection>
  )
}

export default Home

