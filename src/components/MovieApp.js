
import React, {Component} from 'react'
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovieBar from './AddMovieBar';
import update from 'immutability-helper';

const listStyle = {
  borderStyle: 'solid',
  borderWidth: '0.5px',
  borderColor: '#696969'
};
const pageStyle = {
  margin: '100px'
};
const headerStyle = {
  backgroundColor: '#e9e9e9',
  overflow: 'hidden',
  width: '100%',
  margin: '0 auto 0 auto'
};

const pageTitle = {
  marginLeft: '90px'

};

class MovieApp extends Component{
  constructor(props){
    super(props);

    this.state = {
      currentMovie :'',
      movieList : this.props.movieList,
      displayList: this.props.movieList
    }
  }

  movieSearch(currentMovie){
    this.filterMovie(currentMovie)
  }

  filterMovie(currentMovie){
    console.log(currentMovie.length);
    if (currentMovie.length === 0){
      this.setState({displayList: this.state.movieList});
    }else{
      const str ='\w*' + currentMovie + '\w*';
      const regex = new RegExp(str, 'gi');
      const newList = this.state.movieList.filter(movie=> {
        return movie.title.match(regex)});
      if (newList.length > 0){
        this.setState({displayList: newList});
      }else{
        this.setState({displayList: [{title: 'No Movie Found, Please Try Again'}]});
      }
    }

  }

  handleMovieAddition(title){
    const newMovie = {title: title};
    //console.log(this.state.movieList);
    const newList = this.state.movieList;
    const state2 = update(newList, {$push: [newMovie]});
    console.log(this.state.movieList);
    this.setState({movieList: state2});
    this.setState({displayList: state2});

  }

  render(){
    return (
      <div>
        <div style={headerStyle}><h1 style={pageTitle}>MovieList</h1></div>
        <AddMovieBar onClick={(movieTitle)=> this.handleMovieAddition(movieTitle)}/>
       <SearchBar onClick={(movie)=> this.movieSearch(movie)} holder={"Search Movie..."}/>
      <div style={pageStyle}>
      <div style={listStyle}>
       {this.state.displayList.map((movie,i)=>{
      return <MovieList key={i} movie={movie}/>}
    )}
    </div>
      </div>
      </div>
    )
  }
}


export default MovieApp;
