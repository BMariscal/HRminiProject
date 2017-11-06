import React from 'react';
import {render} from 'react-dom';
import MovieApp from './components/MovieApp';
import movieList from '../model.js';


render(
  <MovieApp movieList={movieList}/>,
  document.getElementById('app')
);

