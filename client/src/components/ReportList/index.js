import React from 'react';
import { Link } from 'react-router-dom';

const ReportList = ({
  reports,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!reports.length) {
    return <h3>No Reports Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {reports &&
        reports.map((report) => (
          <div key={report._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${report.reportAuthor}`}
                >
                  {report.reportAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this report on {report.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this report on {report.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{report.reporText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/reports/${report._id}`}
            >
              View report of this pet.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ReportList;
