import { useState } from "react";

function Studentmanager() {
  const [student, setStudent] = useState("");

  const [students, setStudents] = useState<string[]>([
    "Yash",
    "Rahul",
    "Priya",
  ]);

  const addStudent = () => {
    if (student.trim() === "") return;

    setStudents([...students, student]);
    setStudent("");
  };

  const clearStudents = () => {
    setStudents([]);
  };

  const deleteStudent = (indexToDelete: number) => {
  setStudents(
    students.filter((_, index) => index !== indexToDelete)
  );
};

  return (
    <>
      <h2>Student Manager</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <button onClick={clearStudents}>
        Clear All Students
      </button>

      <hr />

      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        students.map((stu, index) => (
          <p key={index}>
            {index + 1}. {stu}
            <button onClick={() => deleteStudent(index)}>
            Delete
            </button>
          </p>
        ))
      )}
    </>
  );
}

export default Studentmanager;