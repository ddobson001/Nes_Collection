// importing components

import React, { Component } from 'react';
import Collection from './components/Collection';
import Header from './components/Header';
import NavBar from './components/NavBar';


import './App.css'



class App extends Component {
  state = {
    collectionList: [
      {
        id:1,
        title:'10-Yard Fight',
        developers: 'Irem',
        date: 'US Release Date: October 1985',
        image: <img src={require('./images/10 Yard Fight.jpg'  )} alt='10-Yard Fight' />,
        collected: false
        
      },
      {
        id:2,
        title:'1942',
        developers: 'Micronics',
        date: 'US Release Date: November 1986',
        image: <img src={require('./images/1942.jpg'  )} alt='1942' />,
        collected: false
      },
      {
        id:3,
        title:'1943: The Battle of Midway',
        developers: 'Capcom',
        date: 'US Release Date: October 1988',
        image: <img src={require('./images/1943 The Battle Of Midway.jpg'  )} alt='1943' />,
        collected: false
      }
    ]
  }

  
  //Toggle Item was Collected
  markCollected = (id) => {
  this.setState({ collectionList: this.state.collectionList.map(collection => {
 if(collection.id === id){
   collection.collected = !collection.collected
 }
 return collection;
  }) });
}
  render() {
    return (
      <div className='App'>
        <NavBar />
      <Header />
        <Collection collectionList={this.state.collectionList} markCollected={this.markCollected}
   />
      </div>
    );
  }
}

export default App;
