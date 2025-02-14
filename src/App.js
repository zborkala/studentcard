import Student from './components/Student'

function App () {
  const students = [
    {
      name: 'Hashir',
      age: 23,
      phone: 9876563865,
      course: 'Ethical Hacking'
    },
    {
      name: 'Ahmad',
      age: 22,
      phone: 56786567666,
      course: 'Graphic Designing'
    },
    {
      name: 'Muneer',
      age: 19,
      phone: 87656766553,
      course: 'Web Development'
    }
  ]
  return (
    <div className='container'>
      {students.map((student, index) => {
        return (
          <Student
            key={index}
            name={student.name}
            phone={student.phone}
            age={student.age}
            course={student.course}
          />
        )
      })}
    </div>
  )
}

export default App
