import React from 'react';
import { Link } from 'react-router-dom';

const ReportList = ({
  reports,
  title,
  showTitle = true,
  showUsername = true,
}) => {
<<<<<<< HEAD:client/src/components/ReportList/index.js
  if (!reports.length) {
=======
  if (!thoughts.length) {
>>>>>>> fd49970be4efb2a5f0b221086d1da773b5bb74f2:client/src/components/ThoughtList/index.js
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
<<<<<<< HEAD:client/src/components/ReportList/index.js
                    had this report on {report.createdAt}
=======
                    made this report on {thought.createdAt}
>>>>>>> fd49970be4efb2a5f0b221086d1da773b5bb74f2:client/src/components/ThoughtList/index.js
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
<<<<<<< HEAD:client/src/components/ReportList/index.js
                    You had this report on {report.createdAt}
=======
                    You made this report on {thought.createdAt}
>>>>>>> fd49970be4efb2a5f0b221086d1da773b5bb74f2:client/src/components/ThoughtList/index.js
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
<<<<<<< HEAD:client/src/components/ReportList/index.js
              Join the discussion on this report.
=======
              View report of this pet.
>>>>>>> fd49970be4efb2a5f0b221086d1da773b5bb74f2:client/src/components/ThoughtList/index.js
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ReportList;
