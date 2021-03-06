import React, { Component } from 'react';
import {infura_url} from '../_private/keys';
import './App.css';
import Web3 from 'web3';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blockNumber: 0, 
      difficulty: 0, 
      gasPrice: 0, 
      latestBlocks: []
    }
  }

  async componentWillMount() {
    let web3 = new Web3(infura_url);
    let latestBlock = await web3.eth.getBlock('latest');

    console.log(latestBlock)

    this.setState({
      blockNumber: latestBlock.number, 
      difficulty: latestBlock.difficulty
    })

    let gasPrice = await web3.eth.getGasPrice();
    this.setState({
      gasPrice: gasPrice
    })
  }

  render() {
    return (
      <div className="app">
        <div className="main-block">
          <div className="block">
            Latest Block: {this.state.blockNumber}
          </div>
          <div className="block">
            Difficulty: {this.state.difficulty}
          </div>
          <div className="block">
            Gas Price: {this.state.gasPrice}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
