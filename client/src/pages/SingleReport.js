import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

<<<<<<< HEAD:client/src/pages/SingleReport.js
import { QUERY_SINGLE_REPORT } from '../utils/queries';
=======
import { QUERY_SINGLE_THOUGHT } from '../utils/queries';
import MapComponent from '../components/Map/MapComponent';
>>>>>>> fd49970be4efb2a5f0b221086d1da773b5bb74f2:client/src/pages/SingleThought.js

const SingleReport = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { reportId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_REPORT, {
    // pass URL parameter
    variables: { reportId: reportId },
  });

  const report = data?.report || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {report.reportAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
<<<<<<< HEAD:client/src/pages/SingleReport.js
          had this report on {report.createdAt}
=======
          made this report on {thought.createdAt}
>>>>>>> fd49970be4efb2a5f0b221086d1da773b5bb74f2:client/src/pages/SingleThought.js
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {report.reportText}
        </blockquote>
      </div>

      <div id="wrapper">
        <div className="m-3 p-4"></div>
        <MapComponent />
      </div>

      <div className="my-5">
        <CommentList comments={report.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm reportId={report._id} />
      </div>
    </div>
  );
};

export default SingleReport;
