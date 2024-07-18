import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from '../../styles/ReportAbuseForm.module.css';

const ReportAbuseCreateForm = ({ reportedContent }) => {
  const [myReason, setReason] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('reports/', {
        reported_content: reportedContent,
        reason: myReason,
      });
      setMessage('Report submitted successfully.');
      setReason('');
    } catch (error) {
      setMessage('Error submitting report.');
      console.error('Error submitting report:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.Form}>
      <Form.Group controlId="reason">
        <Form.Label>Report Reason</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={myReason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </Form.Group>
      
      <Button type="submit" className="mt-3">Submit Report</Button>
      {message && <Alert variant="info" className="mt-3">{message}</Alert>}
    </Form>
  );
};

export default ReportAbuseCreateForm;
