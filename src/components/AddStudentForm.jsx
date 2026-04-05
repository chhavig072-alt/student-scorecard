import { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || score === '') {
      alert('Please enter both student name and score.');
      return;
    }

    if (Number(score) < 0 || Number(score) > 100) {
      alert('Score must be between 0 and 100.');
      return;
    }

    onAddStudent(name, score);
    setName('');
    setScore('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Add New Student</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="number"
          placeholder="Enter score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          min="0"
          max="100"
        />
      </div>

      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;
