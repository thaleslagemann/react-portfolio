import photo from "./assets/photo_5_crop.jpg";
import "./App.css";
import PhotoContainer from "./components/containers/PhotoContainer";
import TextContainer from "./components/containers/TextContainer";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="header-bar"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4 text-center">
              <PhotoContainer photo_subtitle="Thales A. Lagemann">
                <img src={photo} className="image-self" alt="me"></img>
              </PhotoContainer>
            </div>
            <div className="col-8 text-center">
              <TextContainer>
                <h1 className="title-self">Thales Lagemann</h1>
                <h4 className="subtitle-self">Bacharelado em Sistemas de Informação</h4>
                <h4 className="subtitle-self">Universidade Federal de Santa Maria</h4>
              </TextContainer>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
