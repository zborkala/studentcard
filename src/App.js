import Student from "./components/Student"

function App () {
  return (
    <div className='container'>
      <Student name='Hashir' age='23' phone='7654578353' course='Ethical Hacking' />
      <Student name='Ahmad' age='22' phone='98764846343' course='Full Stack Development' />
      <Student name='Abdulla' age='34' phone='6584757465' course='Graphic Designing' />
    </div>
  )
}

export default App
