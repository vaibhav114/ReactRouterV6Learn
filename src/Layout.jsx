import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
const Layout = () => {
  const navigation = useNavigation()
  console.log(navigation)
  return (
    <div>
        <div>
          <Navbar />
          {
            navigation.state=='loading'? <div className='loading'></div>:<Outlet/>
          }
          </div>
    </div>
  )
}

export default Layout