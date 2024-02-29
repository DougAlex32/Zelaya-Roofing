import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [submissions] = useState([]);
  // const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/dashboard', {
      credentials: 'include', // or remove if not needed
    })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      console.log(data); // Check fetched data
      // setSubmissions(data); Uncomment and use when reintroducing state
    })
    .catch(error => console.error('There was a problem with your fetch operation:', error));
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Dashboard</h2>
      {submissions.map(submission => (
        <div key={submission._id} className="submission-item">
          <p className="submission-detail"><strong>Name:</strong> {submission.name}</p>
          <p className="submission-detail"><strong>Email:</strong> {submission.email}</p>
          <p className="submission-detail"><strong>Issue:</strong> {submission.issue}</p>
          <p className="submission-detail"><strong>Details:</strong> {submission.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

