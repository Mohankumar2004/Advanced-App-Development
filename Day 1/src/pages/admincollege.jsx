// CollegeAdminTable.js

import React, { useState } from 'react';
import './admincollege.css';
import Sidebar from './adminnav';
const AdminCollege = () => {
  const [colleges, setColleges] = useState([
    { id: 1, name: 'College A', coursesOffered: 'Computer Science, Electrical Engineering', duration: '4 years', fees: '$10,000', photo: 'college_a.jpg' },
    { id: 2, name: 'College B', coursesOffered: 'Business Administration, Economics', duration: '3 years', fees: '$12,000', photo: 'college_b.jpg' },
    // Add more colleges as needed
  ]);

  const [newCollege, setNewCollege] = useState({
    id: '',
    name: '',
    coursesOffered: '',
    duration: '',
    fees: '',
    photo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCollege({ ...newCollege, [name]: value });
  };

  const handleAddCollege = () => {
    setColleges([...colleges, { ...newCollege, id: colleges.length + 1 }]);
    setNewCollege({ id: '', name: '', coursesOffered: '', duration: '', fees: '', photo: '' });
  };

  const handleDeleteCollege = (id) => {
    const updatedColleges = colleges.filter(college => college.id !== id);
    setColleges(updatedColleges);
  };

  const handleEditCollege = (id) => {
    const editedCollege = colleges.find(college => college.id === id);
    setNewCollege(editedCollege);
    handleDeleteCollege(id);
  };

  return (
    <div>
    <Sidebar/>
      <h2>College Administration</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>College Name</th>
            <th>Courses Offered</th>
            <th>Duration</th>
            <th>Fees</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map(college => (
            <tr key={college.id}>
              <td>{college.id}</td>
              <td>{college.name}</td>
              <td>{college.coursesOffered}</td>
              <td>{college.duration}</td>
              <td>{college.fees}</td>
              <td>{college.photo}</td>
              <td>
                <button onClick={() => handleDeleteCollege(college.id)}>Delete</button>
                <button onClick={() => handleEditCollege(college.id)}>Edit</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td><input type="text" name="name" value={newCollege.name} onChange={handleInputChange} /></td>
            <td><input type="text" name="coursesOffered" value={newCollege.coursesOffered} onChange={handleInputChange} /></td>
            <td><input type="text" name="duration" value={newCollege.duration} onChange={handleInputChange} /></td>
            <td><input type="text" name="fees" value={newCollege.fees} onChange={handleInputChange} /></td>
            <td><input type="text" name="photo" value={newCollege.photo} onChange={handleInputChange} /></td>
            <td><button onClick={handleAddCollege}>Add</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminCollege;
