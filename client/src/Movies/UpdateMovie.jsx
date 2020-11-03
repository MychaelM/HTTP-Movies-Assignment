import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const initialMovie = {
  title: "", 
  director: "", 
  metascore: ""
}

const UpdateMovie = (props) => {
  const [movie, setMovie] = useState(initialMovie);

  const changeHandler = e => {
    let value = e.target.value;
    if(e.target.name === "metascore") {
      value = parseInt(value, 10);
    }

    setMovie({
      ...movie,
      [e.target.name]: value
    });
  }

  return (
    <div>
      <h2>Update Movie</h2>
      <form>
        <input 
        type="text"
        name="title"
        onChange={changeHandler}
        placeholder="Title"
        value={movie.title}
        />

        <br/>
        <input 
        type="text"
        name="director"
        onChange={changeHandler}
        placeholder="Director"
        value={movie.director}
        />
        <br/>

        <input 
        type="text"
        name="metascore"
        onChange={changeHandler}
        placeholder="Metascore"
        value={movie.metascore}
        />
        <br/>

        <button>Update</button>

      </form>
    </div>
  )
}

export default UpdateMovie;