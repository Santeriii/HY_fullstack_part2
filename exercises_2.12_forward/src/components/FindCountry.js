import React, { useState, useEffect } from 'react'

const FindCountry = ({ countries }) => {
    const [ sT, setST ] = useState('')
    const [ countryList, setCountryList ] = useState([])

    useEffect (() => {
        setCountryList(countries.filter(country => country.name.includes(sT)))
    }, [sT])

    const changeST = (event) => {
        setST(event.target.value)
    }

    const searchResults = countryList.length > 10
        ? <li>Too many countries, specify another filter</li>
        : countryList.length === 1
        ? <>
            <h2>
                {countryList[0].name}
            </h2>
            <p>capital {countryList[0].capital}<br/>population {countryList[0].population}</p>
            <h3>languages</h3>
            {countryList[0].languages.map(language => (
                <li>{language.name}</li>
            ))}
            <img src={countryList[0].flag} />
        </>
        :
        countryList.map(country => (
            <li>
                {country.name}
            </li>
        ))

    return (
        <>
            <div>
                find countries
                <input onChange={changeST}/>
            </div>
            <ul>
                {searchResults}
            </ul>
        </>
    )
}

export default FindCountry