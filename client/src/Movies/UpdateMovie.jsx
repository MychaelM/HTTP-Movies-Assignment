import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const initialMovie = {

  id: '',
  title: '',
  director: '',
  metascore: '',
  stars: [''],

}

const UpdateMovie = (props) => {
  const [movie, setMovie] = useState(initialMovie);
  const {id} = useParams();
  const {push} = useHistory();

    useEffect(() => {
    axios
      .get(`http://localhost:5002/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err));
  }, [id])

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

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5002/api/movies/${id}`, movie)
      .then(res => {
        console.log(res);
        setMovie(res.data);
        push(`/`);
      })
      .catch(err => {
        console.log(err);
        console.log(movie);
      })
  }

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
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