import React, { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import dataTransfer from './components/numbers'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ number, setNumber ] = useState('')

  useEffect(() => {
    dataTransfer
    .getAll()
    .then(initialNumbers => {
      setPersons(initialNumbers)
    })
  }, [])

  const addName = (event) => {
    let includes = false
    let conf

    event.preventDefault()

    const personObject = {
        name: newName,
        number: number
    }

    persons.map(person => {
      if (person.name === personObject.name) {
        includes = true
        conf = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
        if (conf) {
          dataTransfer
          .update(person.id, personObject)
        }
      }}
    )

    if (!includes) {
        setPersons(persons.concat(personObject))
        dataTransfer
        .create(personObject)
        .catch(error => {
          return <h1>{error.response.data}</h1>
        })
    }

    setNewName('')
    includes = false
  }

  const changeNewName = (event) => {
    setNewName(event.target.value)
  }
  
  const changeNumber = (event) => {
    setNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input onChange={changeNewName}/>
        </div>
        <div>
          number: <input onChange={changeNumber}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
    <Filter persons={persons}/>
    </div>
  )

}

export default App