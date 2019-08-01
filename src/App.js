import React, { Component } from "react";
import ImagesCard from "./imagesCard";
import Wrapper from "./Wrapper";
import images from './images.json';
import "./App.css";
// import { runInThisContext } from "vm";
import update from 'immutability-helper';
const shuffle = require('shuffle-array');
shuffle(images);

const InitialArr = { images };

class App extends Component {
  state = {
    images,
    count: 0
  };
  // constructor(props) {
  //   super(props);
  //   this.state = InitialArr
  //   let count = 0;
  // }

  restart = () => {
    alert(`I'm sorry but you've already chosen that image`);
    const temp = this.state.images.map(item => item.click = false);

    this.setState({temp});

  };

  changeCount = () => {
    this.setState({count: this.state.count + 1})
  };

  changeClick = (id) => {

      let flag = false, clicker = this.state.images.map(
          function (item) {
              if (item.id === id && !item.click) {
                  item.click = true;
                } else if (item.id === id && item.click === true) {
                  flag = true;
                }
                return true;
              });
              if (flag) {
                this.restart()
                this.setState({count: 0})
                
              } else {
                this.setState({clicker});
                this.changeCount()
      }
      shuffle(images);

  };

  render() {
    return (
      <Wrapper>
        <h1 className='title'>Click an image to begin</h1>
        <div>
          Score: {this.state.count}
        </div>
        {this.state.images.map(item => (
          <ImagesCard
            id={item.id}
            key={item.id}
            image={item.image}
            changeClick={this.changeClick}
            click={item.click}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

