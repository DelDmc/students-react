import Student from "./Student"

const StudentsTable = ({students, setStudents}) => {

  return (
    <table>
      <Student students={students}
               setStudents={setStudents}/>
    </table>
  )
}
export default StudentsTable