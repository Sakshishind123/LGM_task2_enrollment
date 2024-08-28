import React, { useState } from 'react'
import './student.css'
import Enrolledstudents from './enrolledstudents';
const Student = () => {
const [name,setname]=useState('');
const [email,setemail]=useState('');
const [web,setweb]=useState('');
const [img,setimg]=useState('data:image/jpeg;base64,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');
// const [skilled, setskills] = useState([]);

const handleNameChange = (e) => setname(...name,e.target.value);
  const handleEmailChange = (e) => setemail(e.target.value);
  const handleWebChange = (e) => setweb(e.target.value);
  const handleImgChange = (e) => setimg(e.target.value);
  return (
    <>
      <div className='container'>

        <h1 className='a'>SAMPLE</h1>
        <h3 className='b'>Student Enrollement Form</h3>
         
      </div>
      <div className='info'>
       <div className='name'><p>Name</p>  <input type="text" onChange={handleNameChange} /></div> 
       <div className='email'><p>Email</p>  <input type="email" onChange={handleEmailChange}/></div> 
       <div className='web'>
          <p>Website</p>
          <input type="url" value={web} onChange={handleWebChange} />
        </div>
        <div className='img'>
          <p>Image link</p>
          <input type="url" value={img} onChange={handleImgChange} />
        </div>
       <div className='gender'>
    <p>Gender</p>
    <div className='options'>
        <input type="radio" name="gender" id="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" />
        <label htmlFor="female">Female</label>
    </div>
   
</div>
<div className='skills'>
    <p>Skills</p>
        <input type="checkbox" name='skills' id='Java'/>
        <label htmlFor="Java">Java</label>
        <input type="checkbox" name='skills' id='Python'/>
        <label htmlFor="Python">Python</label>
        
    </div>
    <div className='vl'></div>
      </div>
      
      <Enrolledstudents name={name}
      email={email}
      web={web}
      img={img}
      // skills={skills} 
      
      />
       </>
  )
}

export default Student
