import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/dashboard', {
      credentials: 'include', // Necessary for cookies to be sent
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to fetch');
    })
    .then(data => setSubmissions(data))
    .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {submissions.map(submission => (
        <div key={submission._id}>
          <p>{submission.name}</p>
          <p>{submission.email}</p>
          <p>{submission.issue}</p>
          <p>{submission.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

