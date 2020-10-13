import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ includes, setIncludes ] = useState('false')

  const addName = (event) => {
    event.preventDefault()

    const personObject = {
        name: newName
    }

    persons.map(person => 
        {if (person.name === newName) {
            setIncludes('true')
            alert('moi')
        }}
    )

    if (includes === 'false') {
        setPersons(persons.concat(personObject))
    }

    setNewName('')
    setIncludes(false)
  }

  const changeNewName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={changeNewName}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
            <li>{person.name}</li>
        )}
    </div>
  )

}

export default App