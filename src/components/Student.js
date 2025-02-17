export default function Student ({
  name,
  phone,
  age,
  course,
  onDelete,
  onEdit
}) {
  return (
    <div className='student-card'>
      <h2>{name}</h2>
      <p>Phone: {phone}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => {
            onEdit()
          }}
        >
          Edit
        </button>

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
