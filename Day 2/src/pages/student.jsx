// StudentDashboard.js

import React from 'react';
import './student.css'; 
import Navbar from './navbar';

// Mock student data
const studentData = {
  totalCoursesApplied: 10,
  coursesCompleted: 5,
  coursesWaitingForApproval: 2,
  coursesWithPaidFees: 7
};
const suggestedCourses = [
    {
      id: 1,
      title: 'Data Science',
      description: 'Learn the fundamentals of data analysis and machine learning.',
      duration: '6 months',
      fee: 8000,
      place: 'University D'
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Master the skills required to build dynamic web applications.',
      duration: '3 months',
      fee: 6000,
      place: 'Online Course'
    },
    // Add more suggested courses as needed
  ];

const StudentDashboard = () => {
  return (
    <div className="dashboard">
    <Navbar/>
      <h2 className="dashboard-title">Student Dashboard</h2>
      <div className="dashboard-row">
        <div className="dashboard-item">
          <h3 className="dashboard-item-title">Total Courses Applied</h3>
          <p className="dashboard-item-value">{studentData.totalCoursesApplied}</p>
        </div>
        <div className="dashboard-item">
          <h3 className="dashboard-item-title">Courses Completed</h3>
          <p className="dashboard-item-value">{studentData.coursesCompleted}</p>
        </div>
        <div className="dashboard-item">
          <h3 className="dashboard-item-title">Courses Waiting for Approval</h3>
          <p className="dashboard-item-value">{studentData.coursesWaitingForApproval}</p>
        </div>
        <div className="dashboard-item">
          <h3 className="dashboard-item-title">Courses with Paid Fees</h3>
          <p className="dashboard-item-value">{studentData.coursesWithPaidFees}</p>
        </div>
      </div>
      <div className="graph">
        <div className="graph-bar total-courses" style={{ height: `${studentData.totalCoursesApplied * 10}px` }}></div>
        <div className="graph-bar completed-courses" style={{ height: `${studentData.coursesCompleted * 10}px` }}></div>
        <div className="graph-bar waiting-courses" style={{ height: `${studentData.coursesWaitingForApproval * 10}px` }}></div>
        <div className="graph-bar paid-courses" style={{ height: `${studentData.coursesWithPaidFees * 10}px` }}></div>
      </div>
      <div className="suggested-courses">
        <h3>Suggested Courses</h3>
        <br></br>
        {suggestedCourses.map(course => (
          <div key={course.id} className="suggested-course">
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Fee:</strong> {course.fee}</p>
            <p><strong>Place:</strong> {course.place}</p>
            <div className="button-container">
              <button className="apply-button">Apply</button>
              <button className="details-button">See Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
