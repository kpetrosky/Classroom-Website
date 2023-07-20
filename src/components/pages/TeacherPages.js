import React from 'react';

const gradesData = [
  {
    grade: 'Kindergarten',
    classes: [
      {
        id: 1,
        name: 'Class A',
        resources: '/Kindergarten/ClassA-resources',
        teachers: [
          { id: 1, name: 'Teacher A1', email: 'teacherA1@example.com', phone: '+1 (111) 111-1111' },
          { id: 2, name: 'Teacher A2', email: 'teacherA2@example.com', phone: '+1 (222) 222-2222' },
          { id: 3, name: 'Teacher A3', email: 'teacherA3@example.com', phone: '+1 (333) 333-3333' },
        ],
      },
      // Add more classes in Kindergarten if needed
    ],
  },
  {
    grade: 'Grade 1',
    classes: [
      {
        id: 1,
        name: 'Class A',
        resources: '/Grade1/ClassA-resources',
        teachers: [
          { id: 1, name: 'Teacher B1', email: 'teacherB1@example.com', phone: '+1 (444) 444-4444' },
          { id: 2, name: 'Teacher B2', email: 'teacherB2@example.com', phone: '+1 (555) 555-5555' },
          { id: 3, name: 'Teacher B3', email: 'teacherB3@example.com', phone: '+1 (666) 666-6666' },
        ],
      },
      // Add more classes in Grade 1 if needed
    ],
  },
  // Add more grades and classes up to 8th grade
];

const TeacherPages = () => {
  return (
    <section className="TeacherPages">
      <h2>Teacher Pages</h2>
      {gradesData.map((gradeData) => (
        <div key={gradeData.grade}>
          <h3>{gradeData.grade}</h3>
          {gradeData.classes.map((teacherClass) => (
            <div key={teacherClass.id}>
              <h4>{teacherClass.name}</h4>
              <ul>
                {teacherClass.teachers.map((teacher) => (
                  <li key={teacher.id}>
                    <strong>{teacher.name}</strong>
                    <br />
                    Email: {teacher.email}
                    <br />
                    Phone: {teacher.phone}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TeacherPages;
