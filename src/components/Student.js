export default function Student({name, phone, age, course}) {
    return <div className="student-card">
    <h2>{name}</h2>
    <p>Phone: {phone}</p>
    <p>Age: {age}</p>
    <p>Course: {course}</p>
  </div>
}

