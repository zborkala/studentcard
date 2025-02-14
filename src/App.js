import { useEffect, useState } from 'react'
import Student from './components/Student'

function App () {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [phone, setPhone] = useState("")
  const [course, setCourse] = useState("")
 
  return (
    <>
    <div className='container'>
      <Student name={name} age={age} phone={phone} course={course} />
    </div>
      <div>
        <div>
          <label>Student Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Student Age: </label>
          <input value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <label>Student Phone: </label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label>Course Name: </label>
          <input value={course} onChange={(e) => setCourse(e.target.value)} />
        </div>
      </div>
    </>
  )
}

export default App
