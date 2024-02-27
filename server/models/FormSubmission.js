const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
    // Add any other fields relevant to your form
});

const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);

module.exports = FormSubmission;
