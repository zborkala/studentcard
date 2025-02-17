import { useState } from 'react'
import Student from './components/Student'

function App () {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [phone, setPhone] = useState("")
  const [course, setCourse] = useState("")
  const [students, setStudents] = useState([
    {
      name: 'Hamza',
      age: 32,
      phone: '988765555',
      course: 'OMCE'
    },
    {
      name: 'Ali',
      age: 21,
      phone: '678987678888',
      course: 'Graphic Designing'
    },
    {
      name: 'Fathima',
      age: 19,
      phone: '87663786363',
      course: 'UI/UX'
    },
  ])
 
  return (
    <>
    <div className='container'>
      {
        students.map((student, index) => {
          return <Student key={index} name={student.name} age={student.age} phone={student.phone} course={student.course} onDelete={() => {
            setStudents(students.filter((s, i) => i != index))
          }} />
          
        })
      }
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
        <div>
          <button onClick={() => {
            setStudents([
              ...students,
              {
                name: name,
                age: age,
                phone: phone,
                course: course
              }
            ])
            setName("")
            setAge("")
            setPhone("")
            setCourse("")
          }}>
            Add Student
          </button>
        </div>
      </div>
    </>
  )
}

export default App
