import axios from 'axios';
import React, { useState } from 'react';

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
    }
    
};