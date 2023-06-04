import './App.css';
import { useState } from 'react';
import StudentsTable from './StudentsTable';

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Андрій',
      score: 200
    },
    {
      id: 2,
      name: 'Світлана',
      score: 100
    },
    {
      id: 3,
      name: 'Людмила',
      score: 200
    },
    {
      id: 4,
      name: 'Іван',
      score: 200
    }
  ])
  const meanScore = students.length > 0
  ? students.reduce((accum, student) => accum + +student.score, 0) / students.length
  : 0;

  return (
    <div >
      <header >
        <h1>Рейтинг студентів</h1>
        <h2>Середній бал: {meanScore}</h2>
      </header>
      <div>
        <StudentsTable students={students}
                  setStudents={setStudents}/>
      </div>
    </div>
  );
}

export default App;
