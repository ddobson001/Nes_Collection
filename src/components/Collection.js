import React,  { Component } from 'react';
import CollectionItems from './CollectionItems'
import PropTypes from 'prop-types'

class Collection extends Component {

    render() {
        return this.props.collectionList.map((collectionListProperties) =>(
            <CollectionItems key={collectionListProperties.id} collectionListProperties={collectionListProperties} markCollected=
            {this.props.markCollected}/>
        ));
            
    }
}

//PropTypes
Collection.propTypes ={
    collectionList: PropTypes.array.isRequired
}

export default Collection;
