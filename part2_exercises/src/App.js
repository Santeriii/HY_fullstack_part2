import React, { useState } from 'react'
import Filter from './components/Filter.js'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ number, setNumber ] = useState('')

  const addName = (event) => {
    let includes = false

    event.preventDefault()

    const personObject = {
        name: newName,
        number: number
    }

    persons.map(person => {
      if (person.name === personObject.name) {
        includes = true
        alert(`${newName} is already added to phonebook`)
      }}
    )

    if (!includes) {
        setPersons(persons.concat(personObject))
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