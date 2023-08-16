import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function RequestSupport() {
  const { register, handleSubmit, errors } = useForm();
  const [requestError, setRequestError] = useState('');
  const [requestSuccess, setRequestSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/users/request-support', data);
      setRequestSuccess(true);
    } catch (error) {
      setRequestError('Failed to request support. Please try again.');
    }
  };

  return (
    <div className="support-form">
      <h2>Request Support</h2>
      {requestSuccess ? (
        <div className="success-message">
          Support request submitted successfully.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              ref={register({ required: true })}
            />
            {errors.message && <span className="error">Message is required</span>}
          </div>
          {requestError && <span className="error">{requestError}</span>}
          <button type="submit" className="btn btn-primary">Submit Request</button>
        </form>
      )}
    </div>
  );
}

export default RequestSupport;