import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            {newCar && <li>Carro novo!</li>}
        </ul>
    </div>
  )
}

export default CarDetails;