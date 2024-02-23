import React from 'react'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <label>Your Name</label>
            <input type='text'/> {/* Corrected */}
            <label>Email</label>
            <input type='email'/> {/* Corrected */}
            <label>Issues/Questions?</label>
            <input type='text'/> {/* Corrected */}
            <label>Details</label>
            <textarea rows='7' placeholder='Please let us know more.'></textarea> {/* Corrected */}
            <button className='btn'>Submit</button>
        </div>
      );
    };

export default Form
