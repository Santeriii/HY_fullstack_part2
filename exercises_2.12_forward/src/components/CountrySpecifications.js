import React from 'react'

const CountrySpecifications = ({ countryName, countryList }) => {
    const index

    countryList.map(country => (
        if (country.name === countryName) {
            index = country.index
        }
    ))

    return (
        <>
        <h2>
            {countryList[index].name}
        </h2>
        <p>capital {countryList[index].capital}<br/>population {countryList[index].population}</p>
        <h3>languages</h3>
        {countryList[index].languages.map(language => (
            <li>{language.name}</li>
        ))}
        <img src={countryList[index].flag} />
        </>
    )
}

export default CountrySpecifications