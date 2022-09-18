import React, {Component} from "react";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
// import ParticlesBackground from './components/ParticlesBackground';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  render(){
    return (
      <div className="App">
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          {/*
          <FaceRecognition /> 
          <ParticlesBackground/>
          */}
      </div>
    );
  }
}



// function App() {
//   constructor(){
//     super();
//     this.state = {
//       input: '',
//     }
//   }

//   onInputChange = (event) => {
//     console.log(event);
//   }

//   return (
//     <div className="App">
//         <Navigation />
//         <Logo />
//         <Rank />
//         <ImageLinkForm onInputChange={this.onInputChange} />
//          {/*
//         <FaceRecognition /> 
//         <ParticlesBackground/>
//         */}
//     </div>
//   );
// }

export default App;
