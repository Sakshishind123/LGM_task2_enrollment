import React, { useState } from 'react'
import './student.css'
const Enrolledstudents = ({name,email,web,img}) => {
  const [student,setstudent]=useState([])
  const enroll=()=>{
    const all={
     name: name,
     email:email,
     website:web,
     Image:img
    }
   
    // console.log('Enrolled Student:', all);
setstudent([...student,all])
  }

  const clearForm = () => {
   setstudent([]);
  };

  return (
    <>
      <div className='btn'>
      <button className='enroll' onClick={enroll}>Enroll Student</button>
      <button className='clear' onClick={clearForm}>Clear</button>
      </div>
      <div className='student-list'>
        {student.map((student, index) => (
          <div key={index} className='student-details'>
            <p><img src={student.image} alt={`${student.name}'s profile`} className='student-image'/></p>
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Website: <a href={student.website} target="_blank" rel="noopener noreferrer">{student.website}</a></p>
            {/* <p>Gender: {student.gender}</p>
            <p>Skills: {student.skills.join(', ')}</p> */}
            
          </div>
        ))}
      </div>
    </>
  )
}

export default Enrolledstudents













// import React, { useState } from 'react';
// import './student.css';

// const Enrolledstudents = ({ name, email, web, img }) => {
//   const [students, setStudents] = useState([]);

//   const enroll = () => {
//     const newStudent = {
//       name: name || 'N/A',
//       email: email || 'N/A',
//       web: web || '#',
//       img: img || '',
//       // gender: gender || 'Not specified',
//       // skills: skills || [], // Ensure skills is an array
//     };

//     setStudents([...students, newStudent]);
//   };

//   const clearForm = () => {
//     setStudents([]);
//   };

//   return (
//     <>
//       <div className='btn'>
//         <button className='enroll' onClick={enroll}>Enroll Student</button>
//         <button className='clear' onClick={clearForm}>Clear</button>
//       </div>
//       <div className='student-list'>
//         {students.map((student, index) => (
//           <div key={index} className='student-details'>
//             <p>Name: {student.name}</p>
//             <p>Email: {student.email}</p>
//             <p>Website: <a href={student.web} target="_blank" rel="noopener noreferrer">{student.web}</a></p>
//             {/* <p>Gender: {student.gender}</p> */}
//             {/* <p>Skills: {student.skills.length > 0 ? student.skills.join(', ') : 'No skills provided'}</p> */}
//             {student.img && <p><img src={student.img} alt={`${student.name}'s profile`} className='student-image'/></p>}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Enrolledstudents;












