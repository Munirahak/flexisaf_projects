import React from "react";
import StudentCard from "./StudentCard";

function StudentList() {
  const students = [
    { name: "Amina Yusuf", course: "React Development", grade: "A" },
    { name: "Sani Bello", course: "UI/UX Design", grade: "B+" },
    { name: "Munirah Abdulkarim", course: "Frontend Engineering", grade: "A+" },
  ];

  return (
    <section className="student-list">
      <h2>Student List</h2>
      <div className="cards-container">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            course={student.course}
            grade={student.grade}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentList;
