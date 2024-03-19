// CourseList.js
import Sidebar from './adminnav';
import React, { useState } from 'react';
import './admincourse.css';

// CourseList.js



const AdminCourseList = () => {
  const [courses, setCourses] = useState([
    // Your course data here...
  ]);

  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    duration: '',
    fee: '',
    place: ''
  });

  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    setCourses([...courses, { ...newCourse, id: courses.length + 1 }]);
    setNewCourse({
      title: '',
      description: '',
      duration: '',
      fee: '',
      place: ''
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewCourse(courses[index]);
  };

  const handleUpdateCourse = () => {
    const updatedCourses = [...courses];
    updatedCourses[editIndex] = newCourse;
    setCourses(updatedCourses);
    setEditIndex(-1);
    setNewCourse({
      title: '',
      description: '',
      duration: '',
      fee: '',
      place: ''
    });
  };

  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses);
  };

  return (
    <div>
      <Sidebar />
      <div className="course-list">
        <h2>Courses Offered</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Fee</th>
              <th>Place</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td>{editIndex === index ? <input type="text" name="title" value={newCourse.title} onChange={handleInputChange} /> : course.title}</td>
                <td>{editIndex === index ? <input type="text" name="description" value={newCourse.description} onChange={handleInputChange} /> : course.description}</td>
                <td>{editIndex === index ? <input type="text" name="duration" value={newCourse.duration} onChange={handleInputChange} /> : course.duration}</td>
                <td>{editIndex === index ? <input type="text" name="fee" value={newCourse.fee} onChange={handleInputChange} /> : course.fee}</td>
                <td>{editIndex === index ? <input type="text" name="place" value={newCourse.place} onChange={handleInputChange} /> : course.place}</td>
                <td>
                  {editIndex === index ? (
                    <button onClick={handleUpdateCourse}>Update</button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-course">
          <h3>Add New Course</h3>
          <input type="text" name="title" placeholder="Title" value={newCourse.title} onChange={handleInputChange} />
          <input type="text" name="description" placeholder="Description" value={newCourse.description} onChange={handleInputChange} />
          <input type="text" name="duration" placeholder="Duration" value={newCourse.duration} onChange={handleInputChange} />
          <input type="text" name="fee" placeholder="Fee" value={newCourse.fee} onChange={handleInputChange} />
          <input type="text" name="place" placeholder="Place" value={newCourse.place} onChange={handleInputChange} />
          <button onClick={handleAddCourse}>Add Course</button>
        </div>
      </div>
    </div>
  );
}




export default AdminCourseList;
