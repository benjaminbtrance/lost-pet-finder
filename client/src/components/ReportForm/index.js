import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_REPORT } from '../../utils/mutations';
import { QUERY_REPORTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ReportForm = () => {
  const [reportText, setReportText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addReport, { error }] = useMutation(ADD_REPORT, {
    update(cache, { data: { addReport } }) {
      try {
        const { reports } = cache.readQuery({ query: QUERY_REPORTS });

        cache.writeQuery({
          query: QUERY_REPORTS,
          data: { reports: [addReport, ...reports] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, reports: [...me.reports, addReport] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addReport({
        variables: {
          reportText,
          reportAuthor: Auth.getProfile().data.username,
        },
      });

      setReportText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'reportText' && value.length <= 280) {
      setReportText(value);
      setCharacterCount(value.length);
    }
  };

  return null;
  // <div>
  //   <h3>Search for your pet based on your location</h3>

  //   {Auth.loggedIn() ? (
  //     <>
  //       <p
  //         className={`m-0 ${
  //           characterCount === 280 || error ? 'text-danger' : ''
  //         }`}
  //       >
  //         Character Count: {characterCount}/280
  //       </p>
  //       <form
  //         className="flex-row justify-center justify-space-between-md align-center"
  //         onSubmit={handleFormSubmit}
  //       >
  //         <div className="col-12 col-lg-9">
  //           <textarea
  //             name="reportText"
  //             placeholder="Here's a new report..."
  //             value={reportText}
  //             className="form-input w-100"
  //             style={{ lineHeight: '1.5', resize: 'vertical' }}
  //             onChange={handleChange}
  //           ></textarea>
  //         </div>

  //         <div className="col-12 col-lg-3">
  //           <button className="btn btn-primary btn-block py-3" type="submit">
  //             Add Report
  //           </button>
  //         </div>
  //         {error && (
  //           <div className="col-12 my-3 bg-danger text-white p-3">
  //             {error.message}
  //           </div>
  //         )}
  //       </form>
  //     </>
  //   ) : (
  //     <p>
  //       You need to be logged in to view local lost pet reports. Please{' '}
  //       <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
  //     </p>
  //   )}
  // </div>
};

export default ReportForm;
