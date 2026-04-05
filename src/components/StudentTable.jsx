import StudentRow from './StudentRow';

function StudentTable({ students, onScoreChange }) {
  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Score</th>
            <th>Update Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <StudentRow
                key={student.id}
                student={student}
                onScoreChange={onScoreChange}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">
                No students added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
