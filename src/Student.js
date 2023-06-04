const Student = ({students, setStudents}) => {

  const handleScoreChange = (event, studentId) => {
      const updatedStudents = students.map((student) => {
    if (student.id === studentId) {
      return {
        ...student,
        score: event.currentTarget.value
      };
    }
    return student;
  });
  setStudents(updatedStudents);
  
  }
  return (
    <table>
       {
      students.sort((a, b) => b.score - a.score)
              .map((student)=>(
        <tr key={student.id}>
          <td>{student.name}</td>
          <td>
            <input type="text" value={student.score} onChange={(event) => handleScoreChange(event, student.id)}/>
          </td>
        </tr>
      ))
      }
    </table>  
  )
}
export default Student