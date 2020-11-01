import React, { useEffect, useState } from 'react'
import Person from './Person'
import dataTranfer from './numbers'

const Filter = ({ persons }) => {
    const [ filter, setFilter ] = useState('')
    const [ filteredPersons, setFilteredPersons ] = useState([])

    useEffect (() => {
        setFilteredPersons(persons.filter(person => person.name.includes(filter)))
    }, [persons, filter])

    const changeFilter = (event) => {
        setFilter(event.target.value)
    }

    const del = (event) => {
        dataTranfer
        .del(event.target.value)
    }

    return (
        <>
            <h2>Numbers</h2>
            filter shown with<input onChange={changeFilter}/>
            <ul>
                {filteredPersons.map(person =>
                <>
                    <Person person={person} /><button value={person.id} onClick={del}>Delete</button>
                </>
                )}
            </ul>
        </>
    )
}

export default Filter