import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./show.css"
const ShowSummary = () => {

  const { id } = useParams();


  const [showDetails, setShowDetails] = useState(null);


  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
  
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();


        setShowDetails(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };


    fetchShowDetails();
  }, [id]);


  if (!showDetails) {
    return <div>Loading...</div>;
  }

  const paragraphContent = showDetails.summary.match(/<p>([\s\S]*?)<\/p>/i);


  return (
    <div className='main'>
      <h2>{showDetails.name}</h2>
      <div className="font">
      {}
      {paragraphContent && <div dangerouslySetInnerHTML={{ __html: paragraphContent[0] }} />}
      {}
      </div>
    </div>
  );
};

export default ShowSummary;
