// StudentApprovalTable.js

import React, { useState } from 'react';
import './adminapprove.css';

const AdminApprove = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', age: 18, gender: 'Male', tenthPercentage: 85, twelfthPercentage: 78, courseApplied: 'Computer Science', feesPaid: true, phoneNumber: '1234567890', address: '123 Main St, City' },
    { id: 2, name: 'Jane Smith', age: 19, gender: 'Female', tenthPercentage: 92, twelfthPercentage: 88, courseApplied: 'Electrical Engineering', feesPaid: false, phoneNumber: '9876543210', address: '456 Elm St, Town' },
    // Add more students as needed
  ]);

  const handleAccept = (id) => {
    // Logic to accept the student with the given id
    // You can modify the student object in the state or perform other actions
    console.log(`Student with ID ${id} accepted`);
  };

  const handleReject = (id) => {
    // Logic to reject the student with the given id
    // You can remove the student from the state or perform other actions
    console.log(`Student with ID ${id} rejected`);
  };

  return (
    <div>
      <h2>Student Approval</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>10th %</th>
            <th>12th %</th>
            <th>Course Applied</th>
            <th>Fees Paid</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.tenthPercentage}</td>
              <td>{student.twelfthPercentage}</td>
              <td>{student.courseApplied}</td>
              <td>{student.feesPaid ? 'Yes' : 'No'}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.address}</td>
              <td>
                <button onClick={() => handleAccept(student.id)}>Accept</button>
                <button onClick={() => handleReject(student.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminApprove;
