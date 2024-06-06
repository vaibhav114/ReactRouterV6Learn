import React from 'react'
import {NavLink} from 'react-router-dom'
import Wrapper from '../assets/wrappers/Navbar'
const Navbar = () => {
  return (
    <Wrapper>
      <nav style={{display:'flex', justifyContent:'space-around', margin:'20px', padding:'10px', fontSize:'30px'}}>
                <NavLink to={'/'}>Home</NavLink>   <br />
                <NavLink to={'/about'}> About</NavLink>    <br />
                <NavLink to={'/news'} >News Letter</NavLink> <br />
      </nav>
    </Wrapper>
  )
}

export default Navbar