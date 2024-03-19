// StudentDetailTable.js
import Sidebar from './adminnav';
import React from 'react';
import './studentlist.css'; // Importing CSS file


import { useState } from 'react';


const StudentDetailsTable = () => {
  // Mock student data
  const [students, setStudents] = useState([
    
        { id: 1, name: 'John Doe', age: 20, gender: 'Male', tenthPercentage: 85, twelfthPercentage: 78, courseApplied: 'Engineering', feesPaid: true, phoneNumber: '1234567890', address: '123, ABC Street, City' },
        { id: 2, name: 'Alice Smith', age: 19, gender: 'Female', tenthPercentage: 92, twelfthPercentage: 85, courseApplied: 'Medicine', feesPaid: false, phoneNumber: '9876543210', address: '456, XYZ Road, Town' },
        { id: 3, name: 'Michael Johnson', age: 22, gender: 'Male', tenthPercentage: 78, twelfthPercentage: 80, courseApplied: 'Computer Science', feesPaid: true, phoneNumber: '4561237890', address: '789, PQR Avenue, Village' },
        { id: 4, name: 'Emily Davis', age: 21, gender: 'Female', tenthPercentage: 87, twelfthPercentage: 88, courseApplied: 'Law', feesPaid: false, phoneNumber: '3216549870', address: '101, LMN Lane, Suburb' },
        { id: 5, name: 'James Wilson', age: 20, gender: 'Male', tenthPercentage: 90, twelfthPercentage: 82, courseApplied: 'Business Management', feesPaid: true, phoneNumber: '6549873210', address: '222, DEF Street, City' },
        { id: 6, name: 'Sophia Brown', age: 19, gender: 'Female', tenthPercentage: 95, twelfthPercentage: 93, courseApplied: 'Arts', feesPaid: false, phoneNumber: '7893216540', address: '333, UVW Road, Town' },
        { id: 7, name: 'David Martinez', age: 22, gender: 'Male', tenthPercentage: 83, twelfthPercentage: 79, courseApplied: 'Engineering', feesPaid: true, phoneNumber: '1593578520', address: '444, GHI Avenue, Village' },
        { id: 8, name: 'Emma Garcia', age: 20, gender: 'Female', tenthPercentage: 88, twelfthPercentage: 85, courseApplied: 'Medicine', feesPaid: false, phoneNumber: '7539514560', address: '555, RST Lane, Suburb' },
        { id: 9, name: 'William Rodriguez', age: 21, gender: 'Male', tenthPercentage: 79, twelfthPercentage: 81, courseApplied: 'Computer Science', feesPaid: true, phoneNumber: '4561237890', address: '666, JKL Street, City' },
        { id: 10, name: 'Olivia Lopez', age: 19, gender: 'Female', tenthPercentage: 92, twelfthPercentage: 90, courseApplied: 'Law', feesPaid: false, phoneNumber: '7893216540', address: '777, MNO Road, Town' },
        { id: 11, name: 'Daniel Lee', age: 22, gender: 'Male', tenthPercentage: 86, twelfthPercentage: 83, courseApplied: 'Business Management', feesPaid: true, phoneNumber: '7539514560', address: '888, DEF Avenue, Village' },
        { id: 12, name: 'Ava Hill', age: 20, gender: 'Female', tenthPercentage: 94, twelfthPercentage: 92, courseApplied: 'Arts', feesPaid: false, phoneNumber: '1593578520', address: '999, UVW Lane, Suburb' },
        { id: 13, name: 'Matthew Clark', age: 21, gender: 'Male', tenthPercentage: 81, twelfthPercentage: 79, courseApplied: 'Engineering', feesPaid: true, phoneNumber: '6549873210', address: '111, GHI Street, City' },
        { id: 14, name: 'Chloe Baker', age: 19, gender: 'Female', tenthPercentage: 89, twelfthPercentage: 87, courseApplied: 'Medicine', feesPaid: false, phoneNumber: '3216549870', address: '222, RST Road, Town' },
        { id: 15, name: 'Ethan Young', age: 22, gender: 'Male', tenthPercentage: 80, twelfthPercentage: 82, courseApplied: 'Computer Science', feesPaid: true, phoneNumber: '9876543210', address: '333, JKL Avenue, Village' },
    
  ]);

  // Sort by field
  const sortByField = (field) => {
    const sortedStudents = [...students].sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
    setStudents(sortedStudents);
  };

  return (
    <div className='dd'>
    <Sidebar/>
    <div className="student-details-table">
      <h2>Student Details</h2>
      <table>
        <thead>
          <tr>
            <th>
              Name
              <button onClick={() => sortByField('name')}>Sort</button>
            </th>
            <th>
              Age
              <button onClick={() => sortByField('age')}>Sort</button>
            </th>
            <th>Gender</th>
            <th>
              10th %
              <button onClick={() => sortByField('tenthPercentage')}>Sort</button>
            </th>
            <th>
              12th %
              <button onClick={() => sortByField('twelfthPercentage')}>Sort</button>
            </th>
            <th>Course Applied</th>
            <th>Fees Paid</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.tenthPercentage}</td>
              <td>{student.twelfthPercentage}</td>
              <td>{student.courseApplied}</td>
              <td>{student.feesPaid ? 'Paid' : 'Not Paid'}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default StudentDetailsTable;
