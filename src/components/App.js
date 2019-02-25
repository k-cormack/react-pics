import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



// const App = () => { //funtional component declaration
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('https://api.unsplash.com/search/photos', {
      params: { query: term },      
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
        <ImageList images={this.state.images}/>
      </div>
      );
    }
  }


  export default App