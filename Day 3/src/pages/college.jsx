// CollegeList.js

import React from 'react';
import './college.css';
import Navbar from './navbar';
const colleges = [
  {
    id: 1,
    name: 'College A',
    image: 'college_a.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra vehicula libero, sit amet ultricies ipsum rutrum a. Pellentesque hendrerit elit id sollicitudin bibendum.',
    link: 'https://example.com/college_a'
  },
  {
    id: 2,
    name: 'College B',
    image: 'college_b.jpg',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sit amet tristique libero, vel eleifend libero. Integer sodales lobortis leo.',
    link: 'https://example.com/college_b'
  },
  {
    id: 2,
    name: 'College B',
    image: 'college_b.jpg',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sit amet tristique libero, vel eleifend libero. Integer sodales lobortis leo.',
    link: 'https://example.com/college_b'
  },
  {
    id: 2,
    name: 'College B',
    image: 'college_b.jpg',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sit amet tristique libero, vel eleifend libero. Integer sodales lobortis leo.',
    link: 'https://example.com/college_b'
  },
  // Add more colleges as needed
];

const CollegeList = () => {
  return (
    <div>
    <Navbar/>
    <div className="college-list">
    <h2>Colleges</h2>
    <div className="college-grid">
    {colleges.map(college => (
        <div key={college.id} className="college">
        <img src={college.image} alt={college.name} />
        <div className="college-info">
        <h3>{college.name}</h3>
        <p>{college.description}</p>
        <a href={college.link} target="_blank" rel="noopener noreferrer">See More</a>
        </div>
        </div>
        ))}
        </div>
        </div>
        </div>
  );
}

export default CollegeList;
