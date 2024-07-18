import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ReportList = ({ reports, handleResolve }) => {
  
  return (
    <div className="mt-3">
      <h5>Reports:</h5>
      <ListGroup>
        
        {reports.map((report) => (
          <ListGroup.Item key={report.id}>
            
            {!report.is_resolved && (
              <>
                <span>{report.reason}</span>
                <Button
                  variant="success"
                  size="sm"
                  className="ml-2"
                  onClick={() => handleResolve(report.id)}
                >
                  Resolve
                </Button>
              </>
            )}

          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ReportList;
