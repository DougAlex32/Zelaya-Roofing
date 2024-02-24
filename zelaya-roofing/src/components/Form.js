import React, {useState} from "react";
import "./FormStyles.css";

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        issue: '',
        details: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        // Your fetch call goes here
        fetch('http://localhost:3001/api/form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }).then(response => {
          if (response.ok) {
            console.log('Form submitted successfully');
            // Here, you might clear the form or display a success message
            setFormData({ name: '', email: '', issue: '', details: '' }); // Example of clearing the form
          } else {
            console.error('Form submission failed');
            // Handle failure, such as by displaying an error message to the user
          }
        }).catch(error => console.error('Fetch error:', error));
      };
      return (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input name="name" type="text" value={formData.name} onChange={handleChange} />
            <label>Email</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} />
            <label>Issues/Questions?</label>
            <select name="issue" value={formData.issue} onChange={handleChange}>
              <option value="">Select an issue</option>
              <option value="leaks">Leaks</option>
              <option value="new roof">New Roof</option>
              <option value="repair">Repair</option>
              <option value="other">Other</option>
            </select>
            <label>Details</label>
            <textarea name="details" rows="7" placeholder="Please let us know more." value={formData.details} onChange={handleChange}></textarea>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      );
    };
    
    export default Form;
