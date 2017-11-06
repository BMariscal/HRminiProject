import React from 'react';
import MovieEntry from './MovieEntry';



const entryStyle = {
  borderStyle: 'solid',
  borderWidth: '0.5px',
  borderColor: '#696969',
  padding: '20px'
};

const MovieList = (props)=> {
  return(<div style={entryStyle}><MovieEntry movie={props.movie}></MovieEntry></div>)
};


export default MovieList;