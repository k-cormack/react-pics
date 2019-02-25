import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



// const App = () => { //funtional component declaration
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 188488376d31b81a3dd132219fb7929d8ca8e400c168f3af9b72886c3547efd0'
      }
    });
        console.log(this);
        this.setState({ images: response.data.results });

        console.log(response.data.results);
        console.log(term);
      
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmitPassedProp={this.onSearchSubmit} /> {/* the passed prop can be named whatever you like */}
        <ImageList />
      </div>
      );
    }
  }


  export default App