import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class CollectionItems extends Component {
getCollectionStyle = () => {
  return {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: this.props.collectionListProperties.collected ? 
    'line-through': 'none'
  }
}



  render() {
    const { id,title, image, developers } = this.props.collectionListProperties;
    return (
      <div style={this.getCollectionStyle()}>
        <p>
          <input type='checkbox' onChange={this.props.markCollected.bind(
            this, id )} /> {' '}
        {title}
        {developers}
        {image}
        </p>
      </div>
    )
  }
}

//PropTypes
CollectionItems.propTypes ={
  collectionListProperties: PropTypes.object.isRequired
}

export default CollectionItems
