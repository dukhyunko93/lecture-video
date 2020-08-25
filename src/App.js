import React from 'react';
import './App.css';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer';


class App extends React.Component {
  state = { instructor: [] }

  appClickHandler = (instructor_obj) => {
    let newArray = this.state.instructor.concat(instructor_obj)
    this.setState({instructor: newArray})
  }

  

  render() {

    return (
      <>
        <Header />
        <InstructorContainer appClickHandler={this.appClickHandler} />
        <AnimeContainer instructor={this.state.instructor} />
      </>
    );
  }
}






export default App;
