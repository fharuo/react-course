import './App.css';
import MiddleFingerDude from './assets/middlefingerdude.png';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  return (
    <div className="App">
      {/*imagem em public possuem importacao dinamica*/}
      <div>        
        <img src="/facedude.png" alt="dude resting face on arm" />
      </div>

      {/*imagem em assets necessitam importacao*/}
      <div> 
        <img src={MiddleFingerDude} alt="dude showing middle finger" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="fabricio" />
    </div>
  );
}

export default App;
