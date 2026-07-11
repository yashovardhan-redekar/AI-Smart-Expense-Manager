import { useState } from "react";

function StudentList() {
  const [students] = useState([
    "Yash",
    "Rahul",
    "Priya",
    "Amit",
  ]);

  return (
    <>
      <h2>Students</h2>

      {students.map((student) => (
        <p>{student}</p>
      ))}
    </>
  );
}

export default StudentList;