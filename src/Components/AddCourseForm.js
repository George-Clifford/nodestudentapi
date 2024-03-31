// import React, { useState } from 'react';
// import axios from 'axios';

// import './AddCourseForm.css'; // Import CSS file

// const AddCourseForm = () => {
//   const [courseName, setCourseName] = useState('');

//   const handleInputChange = (event) => {
//     setCourseName(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:4000/api/course/addCourse', {
//         course_name: courseName
//       });

//       if (response.status === 200) {
//         toast.success('Course added successfully');
//         // Clear the input field after successful submission
//         setCourseName('');
//       }
//     } catch (error) {
//       console.error('Error adding course:', error);
//       toast.error('Failed to add course');
//     }
//   };

//   return (
//     <div className="add-course-form">
//       <h2>Add Course</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="courseName">Course Name:</label>
//           <input
//             type="text"
//             id="courseName"
//             value={courseName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Add Course</button>
//       </form>
//     </div>
//   );
// };

// export default AddCourseForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
// import './AddCourseForm.css';

// const AddCourseForm = () => {
//   const [courseName, setCourseName] = useState('');

//   const handleInputChange = (event) => {
//     setCourseName(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:4000/api/course/addCourse', {
//         course_name: courseName
//       });

//       if (response.status === 200) {
//         toast.success('Course added successfully');
//         // Clear the input field after successful submission
//         setCourseName('');
//       }
//     } catch (error) {
//       console.error('Error adding course:', error);
//       toast.error('Failed to add course');
//     }
//   };

//   return (
//     <div>
//       <h2>Add Course</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="courseName">Course Name:</label>
//           <input
//             type="text"
//             id="courseName"
//             value={courseName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Add Course</button>
//       </form>
//       {/* Render ToastContainer here */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default AddCourseForm;
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddCourseForm.css'; // Import CSS file

const AddCourseForm = () => {
  const [courseName, setCourseName] = useState('');

  const handleInputChange = (event) => {
    setCourseName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/course/addCourse', {
        course_name: courseName
      });

      if (response.status === 200) {
        toast.success('Course added successfully');
        // Clear the input field after successful submission
        setCourseName('');
      }
    } catch (error) {
      console.error('Error adding course:', error);
      toast.error('Failed to add course');
    }
  };

  return (
    <div className="add-course-form">
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
      {/* Render ToastContainer here */}
      <ToastContainer />
    </div>
  );
};

export default AddCourseForm;


