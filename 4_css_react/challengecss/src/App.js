import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    {brand: "nissan", color: "blue", km: 1000},
    {brand: "mitsubishi", color: "red", km: 0},
    {brand: "toyota", color: "white", km: 250000}
  ];

  return (
    <div className="App">
      <h1>Carros disponiveis</h1>
      <div className='car-container'>
        {cars.map((car) => {
          return(<CarDetails car={car}/>)
        })}      
      </div>      
    </div>
  );
}

export default App;
