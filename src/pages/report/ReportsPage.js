import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'; 
import styles from '../../styles/Form.module.css';

const ReportAbuseCreateForm = () => {
    const [reportedContent, setReportedContent] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('/api/reports', { 
                reported_Content: reportedContent,
                reason,
            });
            setMessage('Report submitted successfully.');
            setReportedContent('');
            setReason('');
        } catch (error) {
        setMessage('Error submitting report.');
        console.error('Error submitting report:', error);
        }
    };
    return (
        <Form onSubmit={handleSubmit} className={styles.Form}>
          <Form.Group controlId="reportedContent">
            <Form.Label>Reported Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={reportedContent}
              onChange={(e) => setReportedContent(e.target.value)}
              required
              />
      </Form.Group>
     <Button type="submit" className="mt-3">Submit Report</Button>
      {message && <Alert variant="info" className="mt-3">{message}</Alert>}
    </Form>
  );
};

export default ReportAbuseCreateForm;