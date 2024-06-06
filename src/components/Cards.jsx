import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailCard'
const Cards = ({drink}) => {
  return (
    <Wrapper>
    <div>
        <div>
            <img src={drink.strDrinkThumb} alt="" className='img'/>
        </div>
        <div style={{padding:'10px'}}> 
            <h3>{drink.strGlass}</h3>
            <Link  to={drink.idDrink}>
            <button className='btn'  style={{marginTop:'20px', marginBottom:'10px'}}> DETAILS </button>
            </Link>
        </div>
    </div>
    </Wrapper>
  )
}

export default Cards