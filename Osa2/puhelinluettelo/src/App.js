import { useEffect, useState } from 'react'
import axios from 'axios'

const Person = (props) => {
  return (
    <div>
      {props.name} {props.number}
    </div>
  )

}

const Persons = (props) => {

  return (
    <div>
      {props.filteredPersons.map( person => 
        <Person key= {person.name} name={person.name} number={person.number} />
      )}
    </div>
  )
  
}

const Filter = (props) => {

  return (
    <div>
        filter shown with
        <input
          value={props.newFilter}
          onChange={props.handleNewFilter}
        />
    </div>
  )
  
}

const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })

  }, [])

  const handleNewName = (event) => {
    console.log(event.target.value)    
    setNewName(event.target.value)  }
  
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if(persons.findIndex(person => person.name === newName) == -1){
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }else{
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)    
    setNewNumber(event.target.value)
  }

  const filteredPersons = newFilter == 0
  ? persons 
  : persons.filter( person => person.name.toLowerCase().includes(newFilter.toLowerCase()) )

  const handleNewFilter = (event) => {
    console.log(event.target.value)    
    setNewFilter(event.target.value)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter newFilter={newFilter} handleNewFilter={handleNewFilter} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input
          value={newName} 
          onChange={handleNewName} 
          />
        </div>
        <div>
          number: 
          <input
          value={newNumber}
          onChange={handleNewNumber}
            />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} setPersons={setPersons} />
      </div>
      
  )

}

export default App