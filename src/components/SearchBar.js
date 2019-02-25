import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
      this.state = { term: ''};
    }
    
    onFormSubmit = (event) => {
      event.preventDefault();

      this.props.onSubmitPassedProp(this.state.term); //when in a class-based component, referenced props must use this.props
    };

    onInputChange = (event) => {
      this.setState({ term: event.target.value });
      
      console.log(this.state.term);
    }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form"> {/* could also use an arrow function: onSubmit={(event) => this.onFormSubmit()} */}
          <div className="field">
            <label>Image Search</label>
            <input type='text' onChange={this.onInputChange}/> {/* leave () off the callback, as this is passing a reference to onInputChange, not calling for exectution}*/}
            {/* an alternate way for the above onChange: add value={this.state.term} onChange={event => this.setState({ term: event.target.value})*/}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;