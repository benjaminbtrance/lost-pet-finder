import React from 'react';
import { useQuery } from '@apollo/client';

import ReportList from '../components/ReportList';
import ReportForm from '../components/ReportForm';

import { QUERY_REPORTS } from '../utils/queries';
import MapComponent from '../components/Map/MapComponent';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REPORTS);
  const reports = data?.reports || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ReportForm />
          <MapComponent />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReportList reports={reports} title="Recent lost pet reports" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
