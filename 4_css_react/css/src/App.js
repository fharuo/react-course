import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Fabricio");
  const redTitle = false;

  return (
    <div className="App">
      {/* CSS Global*/}
      <h1>css global</h1>    

      {/* CSS por Componente */}
      <MyComponent />
      <p>este paragrafo é do app.js</p>

      {/* CSS Inline */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>este elemento foi estilizado de forma inline</p>

      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={name === "Fabricio" ? ({color: "purple", backgroundColor: "#000"}) : null}>CSS dinâmico</h2>
      
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>este título vai ter classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />

    </div>
  );
}

export default App;
