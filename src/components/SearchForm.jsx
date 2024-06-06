import React from 'react'
import { Form } from 'react-router-dom'



const SearchForm = () => {

  return (
    <div>
        <div style={{margin:'40px'}}>
            <Form className='form'>
            <input type="text" name='search' id='search' className='form-input' />
            <input type="submit"  id="submit" value="submit" className='btn' style={{marginTop:'10px'}} />
            </Form>
        </div>
    </div>
  )
}

export default SearchForm