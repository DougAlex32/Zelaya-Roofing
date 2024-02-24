import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <label>Your Name</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Issues/Questions?</label>
      <select>
        <option value="">Select an issue</option>
        <option value="leaks">Leaks</option>
        <option value="new roof">New Roof</option>
        <option value="repair">Repair</option>
        <option value="other">Other</option>
      </select>
      <label>Details</label>
      <textarea rows="7" placeholder="Please let us know more."></textarea>
      <button className="btn">Submit</button>
    </div>
  );
};

export default Form;
