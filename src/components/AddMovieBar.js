import React, {Component} from 'react';

const addMovie = {
  marginLeft: '9px'
};

const inputBar = {
  marginLeft: '90px',
  width: '300px',
  height: '40px',
  marginTop: '40px',
  borderRadius: '3%'
};

const btn = {
  padding: '5px',
  height: '48px',
  width: '40px',
  backgroundColor: 'green',
  color: "white",
  borderRadius: '6%'

};
const AddMovieBar = (props) =>{
  let movieTitle = '';
  const handleChange = (e)=>{
    console.log("hello from addmovie bar");
    movieTitle = e.target.value;
  };
  return (
    <div>
      <div style={addMovie}>
        <input style={inputBar} type="text" name="addMovie" placeholder="Add a movie" onChange={handleChange.bind(this)}/>
        <button style={btn} onClick={()=> props.onClick(movieTitle)}>Add</button>
      </div>
    </div>)
};

export default AddMovieBar;