import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailPage'
const SingleCard = () => {
    const {id} = useLoaderData()
    const {data:drinks} = useQuery(searchSingleDrink(id))
    console.log(drinks)
  return (
    <Wrapper style={{margin:'50px'}}>
        <div>
            <img style={{width:'200px'}} src={drinks[0]?.strDrinkThumb} alt="" />
        </div>
        <div style={{marginTop:'10px'}}>
            <h2> {drinks[0]?.strCategory}</h2>
        </div>
        <div style={{marginTop:'10px'}}>
            <h2>{drinks[0].strGlass}</h2>
        </div>

    </Wrapper>
  )
}

const searchSingleDrink =(id)=>{
    const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    return {
        queryKey:[id],
        queryFn: async()=>{
            const {data}  = await axios.get(`${singleCocktailUrl}${id}`)
            return data.drinks
        }
    }
}

export default SingleCard
export const loader=(client)=>async({params})=>{
    const {id } =params
    await client.ensureQueryData(searchSingleDrink(id))
    return {id}
}