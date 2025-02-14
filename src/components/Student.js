export default function Student(props) {
    return <div className="student-card">
    <h2>{props.name}</h2>
    <p>Phone: {props.phone}</p>
    <p>Age: {props.age}</p>
    <p>Course: {props.course}</p>
  </div>
}

