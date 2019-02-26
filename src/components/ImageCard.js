import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans); 
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);

    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }


  render() {
    console.log(this.props.image.id);
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}` }}>
        <img
        ref={this.imageRef}
        alt={this.props.image.description}
        src={this.props.image.urls.regular}
        key={this.props.image.id} // why is the key not being referenced here, but alt and src are?
        />
      </div>
    );
  }
}

export default ImageCard;