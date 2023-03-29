import photo_5 from './assets/photo_5_crop_nobg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="row">
            <div class="header-bar">
              
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-4 text-center">
              <img src={photo_5} class="image-self" alt="me"></img>
            </div>
            <div class="col-8 text-center">
              <h1 class="title-self">Thales Lagemann</h1>
              <h4 class="subtitle-self">Bacharelado em Sistemas de Informação</h4>
              <h4 class="subtitle-self">Universidade Federal de Santa Maria</h4>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
