import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import CardContainer from '../components/CardContainer'
import SearchForm from '../components/SearchForm'
import { useQuery } from '@tanstack/react-query'


const Home = () => {
  const {searchTerm}  = useLoaderData()
  const {data:drinks} = useQuery(searchDrinks(searchTerm))
  console.log(drinks)
  return (
    <div>
        <div>
          <SearchForm/>
        </div>
        <div>
          <CardContainer drinks={drinks}/>
        </div>
    </div>
  )
}

export default Home

const searchDrinks =(searchTerm)=>{
  const apiUrl =  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  return {
    queryKey:['search',searchTerm || 'all'],
    queryFn:async()=>{
      const response = await axios.get(`${apiUrl}${searchTerm}`)
      return response.data.drinks
    }
  }
}

export const loader=(client)=>async ({request})=>{
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search') || ''
  await client.ensureQueryData(searchDrinks(searchTerm))
  return {searchTerm} 
}

