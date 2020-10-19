import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import FindCountry from './components/FindCountry'

const App = () => {
    const [ countries, setCountries ] = useState([])

    useEffect(() => {
        Axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    })

    return (
        <>
            <FindCountry countries={countries}/>
        </>
    )
}

export default App