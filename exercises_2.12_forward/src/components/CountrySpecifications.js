import React, { useEffect, useState } from 'react'

const CountrySpecifications = ({ countryName, countryList }) => {
    const [ countries, setCountries ] = useState([])
    const [ fCountries, setFCountries] = useState([])

    useEffect(() => {
        setCountries(countries.concat(countryList))
    }, [])

    const filter = () => {
        countries.map(country => {
            if (country.name === countryName && fCountries.length <= 1) {
                setFCountries(fCountries.concat(country))
            }
        })
    }

    return (
        fCountries.length > 0
            ?
            <>
            <h2>
                {fCountries[0].name}
            </h2>
            <p>capital {fCountries[0].capital}<br/>population {fCountries[0].population}</p>
            <h3>languages</h3>
            {fCountries[0].languages.map(language => (
                <li key={fCountries.name + 1}>{language.name}</li>
            ))}
            <img src={fCountries[0].flag} />
            </>
            :
            <>
                {filter()}
            </>
    )
}

export default CountrySpecifications