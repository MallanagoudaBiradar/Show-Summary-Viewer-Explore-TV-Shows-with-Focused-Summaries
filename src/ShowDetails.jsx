import React from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();

  console.log('Show ID:', id);



  return (
    <div>
      <h2>Show Details</h2>
      {}
    </div>
  );
};

export default ShowDetails;
