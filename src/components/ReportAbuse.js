import React, { useState } from 'react';
import axios from 'axios';

const ReportAbuse = () => {
    const [reportedContent, setReportedContent] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/reports/', {
                reported_content: reportedContent,
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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Reported Content:</label>
                <textarea
                    value={reportedContent}
                    onChange={(e) => setReportedContent(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Reason:</label>
                <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit Report</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ReportAbuse;