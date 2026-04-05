function StudentRow({ student, onScoreChange }) {
  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td>
        <input
          type="number"
          min="0"
          max="100"
          value={student.score}
          onChange={(e) => onScoreChange(student.id, e.target.value)}
          className="score-input"
        />
      </td>
      <td>
        <span className={isPass ? 'status pass' : 'status fail'}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  );
}

export default StudentRow;
