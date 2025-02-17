export default function Student ({ name, phone, age, course, onDelete }) {
  return (
    <div className='student-card'>
      <h2>{name}</h2>
      <p>Phone: {phone}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <div style={{ display: 'flex' }}>
        <button
          onClick={() => {
            onDelete()
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
