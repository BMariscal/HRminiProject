import React from 'react';

const itemStyle = {
  marginLeft: '20px'
};

const textStyle = {
  textAlign: 'center'
};



const MovieEntry = (props)=> {
  return(<div style={itemStyle}><h1 style={textStyle}>{props.movie.title}</h1></div>)
};



export default MovieEntry;
