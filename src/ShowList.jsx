import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"
const ShowList = ({ shows }) => (
  <div>
    <h1 style={{textAlign:'center', fontSize:"50px",color:"red"}}>Show List</h1>
    <ul>
      {shows.map((show) => (
        <li key={show.show.id}>
          <div className="show-item">
            <img
              src={show.show.image ? show.show.image.medium : 'placeholder-image-url'}
              alt={show.show.name}
            />
            <div>
              <h3>{show.show.name}</h3>
              <p>Genres: {show.show.genres && show.show.genres.join(', ')}</p>
              <p>Status: {show.show.status}</p>
              <p>Language: {show.show.language}</p>
              <p>Runtime: {show.show.runtime} minutes</p>
              {}
              <button>
              <Link to={`/show/${show.show.id}/summary`}>Summary</Link>
            </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ShowList;
