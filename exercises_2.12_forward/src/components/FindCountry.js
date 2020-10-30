import React, { useState, useEffect } from 'react'
import CountrySpecifications from './CountrySpecifications'

const FindCountry = ({ countries }) => {
    const [ sT, setST ] = useState('')
    const [ countryList, setCountryList ] = useState([])
    const [ showSpecifications, setShowSpecifications ] = useState(false)
    const [ allCountries, setAllCountries ] = useState([])
    const [ searchedCountry, setSearchedCountry ] = useState('')

    useEffect (() => {
        setAllCountries(allCountries.concat(countries))
        setCountryList(countries.filter(country => country.name.includes(sT)))
    }, [sT])

    const changeST = (event) => {
        setST(event.target.value)
    }

    const showCountrySpecifications = (event) => {
        setShowSpecifications(true)
        setSearchedCountry(event.target.value)
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
                <li key={language.population}>{language.name}</li>
            ))}
            <img src={countryList[0].flag} />
        </>
        :
        !showSpecifications
            ?
            <>
            {countryList.map(country => (
                <>
                    <li key={country.capital}>
                        {country.name}
                    </li>
                    <button onClick={showCountrySpecifications} value={country.name} key={country.name}>
                        show
                    </button>
                </>
            ))}
            </>
            :
            <>
                <CountrySpecifications countryName={searchedCountry} countryList={allCountries} />
            </>

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