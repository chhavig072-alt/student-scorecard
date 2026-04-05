import { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aarav', score: 78 },
    { id: 2, name: 'Diya', score: 34 },
    { id: 3, name: 'Kabir', score: 56 },
    { id: 4, name: 'Meera', score: 91 }
  ]);

  const handleScoreChange = (id, newScore) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, score: Number(newScore) || 0 }
          : student
      )
    );
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      score: Number(score)
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div className="app-container">
      <Header />
      <AddStudentForm onAddStudent={addStudent} />
      <StudentTable students={students} onScoreChange={handleScoreChange} />
    </div>
  );
}

export default App;
