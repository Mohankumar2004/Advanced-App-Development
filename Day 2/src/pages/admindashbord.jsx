
import './admindashbord.css'; 
// AdminDashboard.js

import React from 'react';


const AdminDashboard = () => {
  // Mock data
  const collegeCount = 10;
  const courseCount = 25;
  const studentCount = 150;
  const paidStudentsCount = 100;

  const collegeRanks = [
    { id: 1, name: 'College A', rank: 1 },
    { id: 2, name: 'College B', rank: 2 },
    { id: 3, name: 'College C', rank: 3 },
    // Add more colleges as needed
  ];

  const studentPerformances = [
    { id: 1, name: 'Student 1', performance: 'Good' },
    { id: 2, name: 'Student 2', performance: 'Average' },
    { id: 3, name: 'Student 3', performance: 'Excellent' },
    // Add more students as needed
  ];

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-row">
        <div className="dashboard-item">
          <h3>Colleges</h3>
          <p>{collegeCount}</p>
          <div className="graph">
            <div className="graph-bar" style={{ width: `${collegeCount * 10}px`, backgroundColor: '#4CAF50' }}></div>
          </div>
        </div>
        <div className="dashboard-item">
          <h3>Courses</h3>
          <p>{courseCount}</p>
          <div className="graph">
            <div className="graph-bar" style={{ width: `${courseCount * 10}px`, backgroundColor: '#2196F3' }}></div>
          </div>
        </div>
        <div className="dashboard-item">
          <h3>Students</h3>
          <p>{studentCount}</p>
          <div className="graph">
            <div className="graph-bar" style={{ width: `${studentCount * 0.67}px`, backgroundColor: '#FFC107' }}></div>
          </div>
        </div>
        <div className="dashboard-item">
          <h3>Paid Students</h3>
          <p>{paidStudentsCount}</p>
          <div className="graph">
            <div className="graph-bar" style={{ width: `${paidStudentsCount * 0.67}px`, backgroundColor: '#FF5722' }}></div>
          </div>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-column">
          <h3>College Ranks</h3>
          {collegeRanks.map(college => (
            <div key={college.id} className="rank-item">
              <p>{college.rank}</p>
              <p>{college.name}</p>
            </div>
          ))}
        </div>

        <div className="dashboard-column">
          <h3>Student Performances</h3>
          {studentPerformances.map(student => (
            <div key={student.id} className="performance-item">
              <p>{student.name}</p>
              <p>{student.performance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
