import React from 'react'
import Cards from './Cards'
import Wrapper from '../assets/wrappers/CocktailList'
const CardContainer = ({drinks}) => {
  return (
    <Wrapper style={{margin:'140px'}}>
   
            {
              drinks?.map((drink,index)=>{
                return <Cards drink ={drink} key={index}/>
              })
            }

            </Wrapper>
  )
}

export default CardContainer