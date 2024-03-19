// CourseList.js

import React, { useState } from 'react';
import './course.css';
import Navbar from './navbar';
const coursesData = [
  {
    id: 1,
    title: 'Computer Science',
    description: 'Learn the fundamentals of computer science and programming.',
    duration: '4 years',
    fee: 10000,
    place: 'University A'
  },
  {
    id: 2,
    title: 'Electrical Engineering',
    description: 'Explore the principles of electrical engineering and design.',
    duration: '4 years',
    fee: 12000,
    place: 'University B'
  },
  {
    id: 3,
    title: 'Business Administration',
    description: 'Gain skills in management, finance, marketing, and more.',
    duration: '3 years',
    fee: 11000,
    place: 'University C'
  },
  // Add more courses as needed
];

const CourseList = () => {
  const [filters, setFilters] = useState({
    title: '',
    duration: '',
    maxFee: '',
    place: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredCourses = coursesData.filter(course => {
    return (
      course.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (course.duration.toLowerCase().includes(filters.duration.toLowerCase()) || filters.duration === '') &&
      (course.fee <= parseFloat(filters.maxFee) || filters.maxFee === '') &&
      course.place.toLowerCase().includes(filters.place.toLowerCase())
    );
  });

  return (
      <div>
      <Navbar/>
      <div className="filter-container">
        <input type="text" name="title" placeholder="Filter by course title" value={filters.title} onChange={handleFilterChange} />
        <input type="text" name="duration" placeholder="Filter by duration" value={filters.duration} onChange={handleFilterChange} />
        <input type="number" name="maxFee" placeholder="Filter by max fee" value={filters.maxFee} onChange={handleFilterChange} />
        <input type="text" name="place" placeholder="Filter by place" value={filters.place} onChange={handleFilterChange} />
      </div>
      <div className="course-list">
        <h2>Courses Offered</h2>
        {filteredCourses.map(course => (
          <div key={course.id} className="course">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Fee:</strong> {course.fee}</p>
            <p><strong>Place:</strong> {course.place}</p>
            <div className="button-container">
              <button onClick={() => handleApply(course.id)}>Apply</button>
              <button onClick={() => handleDetails(course.id)}>See Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
