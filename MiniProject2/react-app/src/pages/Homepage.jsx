import React from "react";
import { useData } from "../hooks/useData";
import { Link } from 'react-router-dom';

export default function Homepage() {
  /* const movies = useData(); */

    return (
      <div className="Homepage">
        <h4>Welcome to Movie list. </h4>
        <h5>Featured Movies</h5>
        {/* <ul>
          {movies.map((movie) => (
            <li>
              <Link to={``}></Link>
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
  