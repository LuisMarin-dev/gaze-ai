import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import ParticlesBackground from './components/ParticlesBackground';

function App() {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (envent) => {
    console.log(event);
  }

  return (
    <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} />
         {/*
        <FaceRecognition /> 
        <ParticlesBackground/>
        */}
    </div>
  );
}

export default App;
