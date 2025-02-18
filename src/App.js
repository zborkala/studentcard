import { useState } from 'react'
import Student from './components/Student'

function App () {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const initialData = {
    name: '',
    age: '',
    phone: '',
    course: ''
  }
  const [data, setData] = useState(initialData)
  const [students, setStudents] = useState([
    {
      name: 'Hamza',
      age: 32,
      phone: '888888888',
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
    }
  ])

  return (
    <>
      <div className='container'>
        {students.map((student, index) => {
          return (
            <Student
              key={index}
              name={student.name}
              age={student.age}
              phone={student.phone}
              course={student.course}
              onDelete={() => {
                setStudents(students.filter((s, i) => i != index))
              }}
              onEdit={() => {
                setData(student)
                setCurrentIndex(index)
              }}
            />
          )
        })}
      </div>
      <div>
        <div>
          <label>Student Name: </label>
          <input
            value={data.name}
            onChange={e => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label>Student Age: </label>
          <input
            value={data.age}
            onChange={e => setData({ ...data, age: e.target.value })}
          />
        </div>
        <div>
          <label>Student Phone: </label>
          <input
            value={data.phone}
            onChange={e => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <div>
          <label>Course Name: </label>
          <input
            value={data.course}
            onChange={e => setData({ ...data, course: e.target.value })}
          />
        </div>
        <div>
          <button
            onClick={() => {
              if (currentIndex >= 0) {
                // To modify already exist student
                setStudents(
                  students.map((s, i) => {
                    if (i == currentIndex) {
                      return data
                    } else {
                      return s
                    }
                  })
                )
                setCurrentIndex(-1)
              } else {
                // To add new student
                setStudents([...students, data])
              }

              setData(initialData)
            }}
          >
            {currentIndex >= 0 ? 'Edit Student' : 'Add Student'}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
