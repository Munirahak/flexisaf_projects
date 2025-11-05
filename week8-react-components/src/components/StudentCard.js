import React from "react";

function StudentCard({ name, course, grade }) {
  return (
    <div className="student-card">
      <h4>{name}</h4>
      <p>Course: {course}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

export default StudentCard;
