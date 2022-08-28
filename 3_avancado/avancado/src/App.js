import './App.css';
import MiddleFingerDude from './assets/middlefingerdude.png';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  const cars = [
    {id: 0, brand: "ferrari", color: "vermelho", newcar: true, km: 0},
    {id: 1, brand: "nissan", color: "azul", newcar: true, km: 0},
    {id: 2, brand: "volvo", color: "branco", newcar: false, km: 1500},
    {id: 3, brand: "mitsubishi", color: "vermelho", newcar: false, km: 7000}
  ]

  const persons = [
    {id: 0, name: "fabricio", age:27, job: "programador"},
    {id: 1, name: "ana", age:31, job: "arquiteta"},
    {id: 2, name: "natalia", age: 28, job: "autonoma"},
    {id: 3, name: "thiago", age: 4, job: "estudante"}
  ]

  function showMessage() {
    console.log("evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
      <CarDetails brand="VW" km={1000} color="azul" newCar={false} />
      <CarDetails brand="Nissan" km={0} color="vermelho" newCar={true} />
      <CarDetails brand="Ford" km={20000} color="branco" newCar={false} />
      {cars.map((car) => {
        return <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newcar} />
      })}
      <Fragment propFragment="prop fragment" />
      <Container testingValue="testing">
        <p>Este é o conteudo</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
      {persons.map((person) => {
        return <UserDetails id={person.id} name={person.name} age={person.age} job={person.job} />
      })}
      
    </div>
  );
}

export default App;
