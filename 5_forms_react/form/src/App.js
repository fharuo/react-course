import './App.css';
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <h1>forms</h1>
      <MyForm user={{name: "fabricio", email: "fabricio@gmail.com", bio: "sou programador", role: "admin"}} />
    </div>
  );
}

export default App;
