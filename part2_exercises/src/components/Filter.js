import React, { useEffect, useState } from 'react'
import Person from './Person'

const Filter = ({ persons }) => {
    const [ filter, setFilter ] = useState('')
    const [ filteredPersons, setFilteredPersons ] = useState([])

    useEffect (() => {
        setFilteredPersons(persons.filter(person => person.name.includes(filter)))
    }, [filter, setFilter])

    const changeFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <>
            <h2>Numbers</h2>
            filter shown with<input onChange={changeFilter}/>
            <ul>
                {filteredPersons.map(person =>
                    <Person person={person} />
                )}
            </ul>
        </>
    )
}

export default Filter